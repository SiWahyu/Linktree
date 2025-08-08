import siwahyu from "../assets/siwahyu.jpg";
import AnimatedContent from "../components/AnimatedContent/AnimatedContent";
const ImageBanner = () => {
  return (
    <>
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <img
          className="mx-auto rounded-full w-1/2"
          src={siwahyu}
          alt="siwahyu banner image"
        />
      </AnimatedContent>
    </>
  );
};

export default ImageBanner;
