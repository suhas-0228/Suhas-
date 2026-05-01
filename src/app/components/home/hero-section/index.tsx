import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm R. Suhas</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>B.Tech IT Student | Full-Stack Developer</h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
              Passionate IT student building real-world projects using
              full-stack and computer vision technologies.
            </p>
          </div>
          <Image
            src={getImgPath("/images/home/banner/suhas-photo.jpeg")}
            alt="R. Suhas"
            width={685}
            height={650}
            className="block lg:hidden rounded-lg object-cover object-center max-h-[520px] w-full"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/suhas-photo.jpeg")}
          alt="R. Suhas"
          width={685}
          height={913}
          className="absolute right-0 top-0 z-1 max-h-[820px] w-auto rounded-bl-lg object-cover object-center"
        />
      </div>
    </section>
  );
};

export default index;
