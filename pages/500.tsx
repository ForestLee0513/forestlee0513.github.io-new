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
          <h1>500: Internal Server Error</h1>
          <p>서버에 에러가 발생하였습니다.</p>
          <p>새로고침 후 해결되지 않는다면 아래 연락처로 연락하십시오.</p>
          <p>
            <span className="font-bold">Email:</span> forestlee0513@gmail.com
          </p>
          <button
            className="underline font-bold"
            onClick={() => {
              router.back();
            }}
          >
            Go Back
          </button>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
