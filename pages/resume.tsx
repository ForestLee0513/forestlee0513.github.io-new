import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Container from "~/components/Container";
import ArticleType from "~/types/article";
import { getArticleFromSlug } from "~/lib/markdownParser";
import { Body, Header } from "~/components/article";
import HeadMeta from "~/components/HeadMeta";

type Props = {
  article: ArticleType;
};

const Resume = ({ article }: Props) => {
  const { t } = useTranslation("resume");

  if (article) {
    const {
      frontmatter: { title, date, description },
      readingTime,
    } = article;

    return (
      <>
        <HeadMeta title="Resume" useDyanmicThumbnail={false} />
        <Container className="py-4 flex-1 grid-rows-1 overflow-auto pc:overflow-hidden">
          <div className="col-span-4 overflow-y-auto pc:col-start-3">
            <Header
              title={title}
              date={date}
              readingTime={readingTime}
              description={description}
            />
            <Body article={article} />
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <h1>{t("resumeNotExistsErrorTitle")}</h1>
      <p>{t("resumeNotExistsErrorDescription")}</p>
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const article = await getArticleFromSlug(
    "resume",
    `_data/${locale}`,
    locale as string
  );

  if (article) {
    return {
      props: {
        article,
        ...(await serverSideTranslations(locale as string, ["resume"])),
        isFallback: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["resume"])),
      isFallback: false,
    },
  };
}

export default Resume;
