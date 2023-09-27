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
    <div>
      <HeadMeta useDyanmicThumbnail={false} />
      <main>
        <List
          route="/blog"
          articles={articles}
          emptyErrorMessage={t("articleEmptyError")}
        />
      </main>
    </div>
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
