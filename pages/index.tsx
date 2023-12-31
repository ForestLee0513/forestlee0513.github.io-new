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

const Index = ({ articles }: Props) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <HeadMeta useDyanmicThumbnail={false} />
      <main>This is main page.</main>
    </div>
  );
};

export default Index;
