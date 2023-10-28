import { GetStaticPropsContext } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { getAllLocaledArticles } from "~/lib/markdownParser";
import HeadMeta from "~/components/HeadMeta";
import Post from "~/types/article";
import Container from "~/components/Container";
import { useState } from "react";
import Image from "next/image";

type Props = {
  articles: Post[];
};

const Portfolio = ({ articles }: Props) => {
  const [coverImageUrl, setCoverImageUrl] = useState("");

  return (
    <>
      <HeadMeta title="Portfolio" useDyanmicThumbnail={false} />
      <Container className="py-4 flex-1 grid-rows-1 overflow-hidden">
        <div className="col-span-4 overflow-y-auto">
          <ul className="m-0 p-0 list-none">
            {articles.map((article, index) => {
              const {
                frontmatter: { title, description, coverImage },
                slug,
              } = article;
              return (
                <li
                  className="m-0 p-0"
                  key={index}
                  onMouseOver={() => {
                    if (coverImage) setCoverImageUrl(coverImage);
                  }}
                  onMouseLeave={() => setCoverImageUrl("")}
                >
                  <a href={`/portfolio/${slug}`} className="no-underline">
                    <h3>{title}</h3>
                    <p className=" text-textSecondary">{description}</p>
                    <hr />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-span-4 hidden pc:block">
          <div className="w-full h-full bg-secondary relative">
            {coverImageUrl ? (
              <Image
                src={coverImageUrl}
                alt={`portfolio-thumbnail`}
                className="w-full h-full m-0"
                layout="fill"
                objectFit="cover"
              />
            ) : (
              ""
            )}
          </div>
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

export default Portfolio;
