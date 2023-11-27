import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import Image from "next/image";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Container from "~/components/Container";
import { getAllLocaledArticles } from "~/lib/markdownParser";
import Post from "~/types/article";
import HeadMeta from "~/components/HeadMeta";
import SearchIcon from "~/public/assets/icons/search.svg";
import Input from "~/components/Input";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArticleType from "~/types/article";

type Props = {
  articles: Post[];
  categories: string[];
};

const Blog = ({ articles, categories }: Props) => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  // 카테고리 변경 함수
  const onCategoryClick = (category: string) => {
    router.replace({
      query: { ...router.query, category },
    });

    // 동일한 카테고리 클릭 시 초기화
    if (selectedCategory === category) {
      router.replace({
        query: { ...router.query, category: "" },
      });
    }
  };

  // 카테고리 쿼리스트링이 변경됐을 때 스테이트 지정
  useEffect(() => {
    const selectedCategoryFromQuery = router.query.category as string;
    setSelectedCategory(selectedCategoryFromQuery);
  }, [router.query.category]);

  // 검색 키워드 input 변경 이벤트함수
  const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;

    setSearchKeyword(value);
  };

  // Debounce 처리된 상태로 search 쿼리스트링 지정 (500ms)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.replace({
        query: { ...router.query, searchKeyword: searchKeyword },
      });
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchKeyword]);

  return (
    <>
      <HeadMeta title="Blog" useDyanmicThumbnail={false} />
      <Container className="py-4">
        <div className="col-span-4 pc:col-span-2">
          <div>
            <Input
              placeholder="Search"
              onChange={onSearchInputChange}
              leftChildren={<SearchIcon className="w-[28px] h-[28px]" />}
            />
            <h2 className="hidden pc:block mt-[40px]">Category</h2>
            {/* Category list */}
            <ul className="m-0 mt-[10px] p-0 list-none flex overflow-x-auto pc:block">
              {categories.map((category, index) => {
                return (
                  <li
                    className={
                      selectedCategory === category
                        ? "m-0 first:pl-0 last:pr-0 p-[10px] first:pc:pl-[10px] last:pc:pr-[10px] block pc:list-item grow-0 shrink-0 basis-auto cursor-pointer underline font-black underline-offset-2 decoration-2"
                        : "m-0 first:pl-0 last:pr-0 p-[10px] first:pc:pl-[10px] last:pc:pr-[10px] block pc:list-item grow-0 shrink-0 basis-auto cursor-pointer"
                    }
                    key={`category-${index}`}
                    onClick={() => {
                      onCategoryClick(category);
                    }}
                  >
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Articles */}
        <ul className="w-full grid grid-cols-4 pc:grid-cols-3 m-0 p-0 gap-[20px] pc:gap-[40px] pt-[20px] pc:pt-0 col-span-4 pc:col-span-6">
          {articles.length <= 0
            ? "글을 찾지 못했습니다 검색 키워드를 다시 확인해주세요."
            : ""}
          {articles.map((article) => {
            const {
              slug,
              frontmatter: { date, description, title, coverImage },
            } = article;
            return (
              <li
                className="col-span-4 pc:col-span-1 m-0 p-0 flex flex-col cursor-pointer"
                key={slug}
              >
                <a href={`/blog/${slug}`} className="no-underline">
                  <div className="pt-[54%] mt-0 relative bg-secondary">
                    {coverImage ? (
                      <Image
                        src={coverImage}
                        alt={`${slug}-thumbnail`}
                        className="w-full h-full m-0"
                        layout="fill"
                        objectFit="cover"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="flex flex-col mt-[20px]">
                    <h3>{title}</h3>
                    <p>{date}</p>
                    <p>{description}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
};

export const getServerSideProps = async ({
  locale,
  query,
}: GetServerSidePropsContext) => {
  const articles = await getAllLocaledArticles(
    `_data/${locale}/blog`,
    locale as string
  );
  const categories = [
    ...new Set(
      articles
        .map((article) => {
          const { category } = article.frontmatter;
          return category;
        })
        .flat()
    ),
  ];
  const selectedCategory = query.category as string;
  const searchKeyword = query.searchKeyword as string;

  return {
    props: {
      articles: articles
        .filter((article: ArticleType) => {
          if (selectedCategory) {
            return article.frontmatter.category.includes(selectedCategory);
          }

          return article;
        })
        .filter((article: ArticleType) => {
          if (searchKeyword) {
            return article.frontmatter.title.includes(searchKeyword);
          }

          return article;
        }),
      categories,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

export default Blog;
