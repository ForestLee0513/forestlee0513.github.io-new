import type ArticleType from "~/types/article";
import {
  getAllLocaledArticles,
  getArticleFromSlug,
} from "~/lib/markdownParser";
import { Body, Header, AuthorCard } from "~/components/article";
import HeadMeta from "~/components/HeadMeta";
import { GetStaticPropsContext } from "next";
import { Container } from "~/components";

type Props = {
  article: ArticleType;
};

interface IParams extends GetStaticPropsContext {
  params: {
    slug: string;
  };
}

const ProjectArticle = ({ article }: Props) => {
  const {
    frontmatter: { title, date, description },
    readingTime,
  } = article;
  return (
    <>
      <HeadMeta
        title={title}
        description={description}
        useDyanmicThumbnail={true}
      />
      <Container className="py-4">
        <div className="pc:col-start-3 pc:col-end-7 col-span-4">
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
};

export const getStaticProps = async ({ params, locale }: IParams) => {
  const article = await getArticleFromSlug(
    params.slug,
    `_data/${locale}/portfolio`,
    locale as string
  );

  return {
    props: {
      article,
      isFallback: false,
    },
  };
};

export const getStaticPaths = async ({ locales }: GetStaticPropsContext) => {
  const pathsPromise = locales?.map(async (locale) => {
    const articles = await getAllLocaledArticles(
      `_data/${locale}/portfolio`,
      locale as string
    );

    return articles.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
        locale: locale,
      };
    });
  });

  if (pathsPromise) {
    const paths = await Promise.all(pathsPromise);

    return {
      paths: paths.flat(),
      fallback: false,
    };
  }
};

export default ProjectArticle;
