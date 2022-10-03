import { getAllArticles } from "../lib/markdownParser";
import Head from "next/head";

import Post from "../interfaces/article";
import Link from "next/link";
import type ArticleType from "../interfaces/article";

type Props = {
  articles: Post[];
};

const Index = ({ articles }: Props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next.js blog template with some additional features!</h1>
        <ul>
          {articles.map((article: ArticleType, index) => {
            return (
              <Link href={`/blog/${article.slug}`} passHref key={index}>
                <li>
                  <h3>{article.frontmatter.title}</h3>
                  <p>{article.frontmatter.description}</p>
                  <p>{article.readingTime}</p>
                  <hr />
                </li>
              </Link>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const articles = await getAllArticles("_data/blog");

  return { props: { articles } };
};

export default Index;
