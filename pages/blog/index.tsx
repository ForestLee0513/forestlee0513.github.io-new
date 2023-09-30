import { GetStaticPropsContext } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { getAllLocaledArticles } from "~/lib/markdownParser";
import Post from "~/types/article";
import { AuthorCard, List } from "~/components/article";
import bio from "~/bio";
import HeadMeta from "~/components/HeadMeta";

type Props = {
  articles: Post[];
};

const Blog = ({ articles }: Props) => {
  const { t } = useTranslation("common");

  return (
    <>
      <HeadMeta useDyanmicThumbnail={false} />
      <div className="col-span-4 pc:col-span-2">
        <form>
          <input type="text" className="w-full" />
          <h2 className="hidden pc:block">Category</h2>
        </form>
      </div>
      <ul className="w-full grid pc:grid-cols-3 m-0 p-0 pc:gap-x-[40px] col-span-4 pc:col-span-6">
        <li className="col-span-1 m-0 p-0"></li>
        <li className="col-span-1 m-0 p-0"></li>
        <li className="col-span-1 m-0 p-0"></li>
        <li className="col-span-1 m-0 p-0"></li>
        <li className="col-span-1 m-0 p-0"></li>
        <li className="col-span-1 m-0 p-0"></li>
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
