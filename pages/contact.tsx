import ArticleType from "~/types/article";
import HeadMeta from "~/components/HeadMeta";
import Image from "next/image";
import Input from "~/components/Input";
import Button from "~/components/Button";
import { Container } from "~/components";

type Props = {
  article: ArticleType;
};

const Contact = ({ article }: Props) => {
  return (
    <>
      <HeadMeta title="Contact" useDyanmicThumbnail={false} />
      <Container className="py-4">
        <div className="col-span-4 order-1 pc:order-none">
          <div className="w-full bg-secondary relative pt-[50%]">
            <Image
              src="/assets/images/author.png"
              alt={`thumbnail`}
              className="w-full h-full m-0"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="my-[20px] pc:my-[40px] uppercase">About me</h2>
          {/* this hard coding will remove soon. */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            in lacus laoreet, sagittis arcu ac, laoreet justo. Nunc accumsan
            finibus risus, quis sollicitudin nunc volutpat quis. Praesent luctus
            ligula id maximus feugiat. Nulla sed enim nec dui aliquet pharetra.
            Etiam est lorem, porta sed eleifend ut, tincidunt ac tortor. Donec a
            quam vitae leo accumsan tincidunt. Vestibulum facilisis dui ac leo
            sodales tristique. Proin auctor bibendum metus ac faucibus. Vivamus
            at dolor et nisl porttitor condimentum et ac sapien. Curabitur
            eleifend fermentum rhoncus. Proin sollicitudin ante sed nunc porta
            bibendum. Vivamus laoreet magna diam, a tempus felis efficitur quis.
            Curabitur vel facilisis orci.
          </p>
        </div>
        <div className="col-span-4 uppercase">
          <h1>contact</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              console.log("submitted.");
            }}
          >
            <Input placeholder="name" inputClassName="placeholder:uppercase" />
            <Input
              placeholder="number"
              inputClassName="placeholder:uppercase"
            />
            <Input
              placeholder="context"
              inputClassName="placeholder:uppercase"
              rows={10}
              resize
            />
            <Button>submit</Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
