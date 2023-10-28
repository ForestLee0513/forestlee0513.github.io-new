import { GetStaticPropsContext } from "next";
import Image from "next/image";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Container from "~/components/Container";
import { getAllLocaledArticles } from "~/lib/markdownParser";
import Post from "~/types/article";
import HeadMeta from "~/components/HeadMeta";
import SearchIcon from "~/public/assets/icons/search.svg";
import Input from "~/components/Input";
import { useEffect } from "react";

type Props = {
  articles: Post[];
};

const Blog = ({ articles }: Props) => {
  return (
    <>
      <HeadMeta title="Blog" useDyanmicThumbnail={false} />
      <Container className="py-4">
        <div className="col-span-4 pc:col-span-2">
          <form>
            <Input
              placeholder="Search"
              leftChildren={<SearchIcon className="w-[28px] h-[28px]" />}
            />
            <h2 className="hidden pc:block mt-[40px]">Category</h2>
            {/* Category list */}
            <ul className="m-0 mt-[10px] p-0 list-none flex overflow-x-auto pc:block">
              <li className="m-0 first:pl-0 last:pr-0 p-[10px] first:pc:pl-[10px] last:pc:pr-[10px] block pc:list-item grow-0 shrink-0 basis-auto">
                sample Category 1
              </li>
              <li className="m-0 first:pl-0 last:pr-0 p-[10px] first:pc:pl-[10px] last:pc:pr-[10px] block pc:list-item grow-0 shrink-0 basis-auto">
                sample Category 2
              </li>
            </ul>
          </form>
        </div>
        {/* Articles */}
        <ul className="w-full grid grid-cols-4 pc:grid-cols-3 m-0 p-0 gap-[20px] pc:gap-[40px] pt-[20px] pc:pt-0 col-span-4 pc:col-span-6">
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

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const articles = await getAllLocaledArticles(
    `_data/${locale}/blog`,
    locale as string
  );

  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

export default Blog;
