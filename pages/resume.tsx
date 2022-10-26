import ArticleType from "../interfaces/article";
import { getArticleFromSlug } from "../lib/markdownParser";
import Body from "../components/article/Body";
import Header from "../components/article/Header";

type Props = {
  article: ArticleType;
};

const Resume = ({ article }: Props) => {
  const {
    frontmatter: { title, date, description },
    readingTime,
  } = article;

  return (
    <>
      <Header
        title={title}
        date={date}
        readingTime={readingTime}
        description={description}
      />
      <Body article={article} />
    </>
  );
};

export async function getStaticProps() {
  const article = await getArticleFromSlug("resume", "_data");

  return {
    props: {
      article,
      isFallback: false,
    },
  };
}

export default Resume;