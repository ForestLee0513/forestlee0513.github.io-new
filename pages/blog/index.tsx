import { GetStaticPropsContext } from "next";
import Image from "next/image";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getAllLocaledArticles } from "~/lib/markdownParser";
import Post from "~/types/article";
import HeadMeta from "~/components/HeadMeta";
import SearchIcon from "~/public/assets/icons/search.svg";

type Props = {
  articles: Post[];
};

const Blog = ({ articles }: Props) => {
  return (
    <>
      <HeadMeta useDyanmicThumbnail={false} />
      <div className="col-span-4 pc:col-span-2">
        <form>
          <div className="p-[6px] pc:p-[10px] border-b-[2px] flex">
            <SearchIcon className="w-[28px] h-[28px]" />
            <input
              type="text"
              className="w-full bg-[transparent] pl-[10px]"
              placeholder="Search"
            />
          </div>
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
        <li className="col-span-4 pc:col-span-1 m-0 p-0 flex flex-col">
          <div className="pt-[54%] mt-0 relative">
            <Image
              src="/assets/images/author.png"
              alt="thumbnail"
              className="w-full h-full m-0"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col mt-[20px]">
            <h3>Test</h3>
            <p className="mt-[10px] mb-0">2023.01.01</p>
            <p className="mt-[10px] mb-0">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </li>
        <li className="col-span-4 pc:col-span-1 m-0 p-0 flex flex-col">
          <div className="pt-[54%] mt-0 relative">
            <Image
              src="/assets/images/default-thumbnail.png"
              alt="thumbnail"
              className="w-full h-full m-0"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col mt-[20px]">
            <h3>Test</h3>
            <p className="mt-[10px] mb-0">2023.01.01</p>
            <p className="mt-[10px] mb-0">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </li>
        <li className="col-span-4 pc:col-span-1 m-0 p-0 flex flex-col">
          <div className="pt-[54%] mt-0 relative">
            <Image
              src="/assets/images/default-thumbnail.png"
              alt="thumbnail"
              className="w-full h-full m-0"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col mt-[20px]">
            <h3>Test</h3>
            <p className="mt-[10px] mb-0">2023.01.01</p>
            <p className="mt-[10px] mb-0">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </li>
        <li className="col-span-4 pc:col-span-1 m-0 p-0 flex flex-col">
          <div className="pt-[54%] mt-0 relative">
            <Image
              src="/assets/images/default-thumbnail.png"
              alt="thumbnail"
              className="w-full h-full m-0"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col mt-[20px]">
            <h3>Test</h3>
            <p className="mt-[10px] mb-0">2023.01.01</p>
            <p className="mt-[10px] mb-0">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </li>
      </ul>

      {/* <List
        route="/blog"
        articles={articles}
        emptyErrorMessage={t("articleEmptyError")}
      /> */}
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
