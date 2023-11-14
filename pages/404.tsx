import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "~/components";
import HeadMeta from "~/components/HeadMeta";

const NotFound = () => {
  const router = useRouter();

  return (
    <>
      <HeadMeta title="Error" useDyanmicThumbnail={false} />
      <Container>
        <div className="pc:col-start-3 pc:col-end-7 col-span-4">
          <h1>404: Page Not Found</h1>
          <p>해당 페이지는 존재하지 않습니다.</p>
          <button
            className="underline font-bold"
            onClick={() => {
              router.back();
            }}
          >
            뒤로가기
          </button>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
