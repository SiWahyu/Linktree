import TextType from "../components/TextType";
import Squares from "./Squares/Squares";
import ImageBanner from "./ImageBanner";
import FadeContent from "../components/FadeContent/FadeContent";
import Lanyard from "./Lanyard";

const Banner = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-950 relative">
      <div className="absolute w-full h-full bottom-0 left-0 right-0 top-0 z-0">
        <Squares
          speed={0.5}
          squareSize={50}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#99a1af"
        />
      </div>

      <div className="flex items-center justify-center text-white relative z-10 pointer-events-none">
        <section className="grid h-screen place-content-center ">
          <div className="mx-auto w-screen sm:place-items-center-safe md:place-items-stretch  max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32">
            <div className="block -mt-40  md:hidden">
              {/* <ImageBanner /> */}
              <Lanyard position={[0, 0, 24]} gravity={[0, -40, 0]} />
            </div>
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <div className="max-w-prose md:text-left flex flex-col items-center md:items-start -mt-32 md:mt-0">
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
                  Hai! Ini Ceritanya
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span>Linktree</span>
                    <TextType
                      text={["SiWahyu", "SiWahyu", "SiWahyu"]}
                      typingSpeed={75}
                      pauseDuration={1800}
                      showCursor={true}
                      cursorCharacter="|"
                      textColors={["#8B5CF6"]}
                    />
                  </div>
                </h1>
                <div className="mt-4">
                  <button className="inline-block rounded border border-gray-600 bg-transparent px-4 py-2.5 font-medium text-white shadow-sm transition-colors hover:bg-gray-800">
                    Get Started
                  </button>
                </div>
              </div>
            </FadeContent>
            <div className="hidden md:block md:-mt-24">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              {/* <ImageBanner /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
