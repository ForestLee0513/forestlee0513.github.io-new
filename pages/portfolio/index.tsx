import { GetStaticPropsContext } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getAllLocaledArticles } from "~/lib/markdownParser";
import HeadMeta from "~/components/HeadMeta";
import Post from "~/types/article";
import Container from "~/components/Container";

type Props = {
  articles: Post[];
};

const portfolio = ({ articles }: Props) => {
  console.log(articles);
  return (
    <>
      <HeadMeta title="portfolio" useDyanmicThumbnail={false} />
      <Container className="py-4 flex-1 grid-rows-1 overflow-hidden">
        <div className="col-span-4 overflow-y-auto">
          <ul>
            <li>
              <h3>ACME Proj</h3>
              <p>Simple desc.</p>
              <hr />
            </li>
          </ul>
        </div>
        <div className="col-span-4 hidden pc:block">
          <div className="w-full h-full bg-secondary"></div>
        </div>
      </Container>
    </>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const articles = await getAllLocaledArticles(
    `_data/${locale}/portfolio`,
    locale as string
  );

  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale as string, ["portfolio"])),
    },
  };
};

export default portfolio;
