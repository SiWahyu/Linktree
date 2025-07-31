import {
  FaInstagram,
  FaLink,
  FaSpotify,
  FaTiktok,
  FaUser,
} from "react-icons/fa";
import SpotlightCard from "./SpotLightCard";

export default function LinkList() {
  const listLink = [
    {
      title: "Instagram",
      icon: <FaInstagram className="w-6 h-6" />,
      link: "https://www.instagram.com/si_yuu.4",
    },
    {
      title: "Tiktok",
      icon: <FaTiktok className="w-6 h-6" />,
      link: "https://www.tiktok.com/@siwahyu_xyz",
    },
    {
      title: "Portofolio",
      icon: <FaUser className="w-6 h-6" />,
      link: "https://siwahyu.vercel.app",
    },
    {
      title: "Spofity",
      icon: <FaSpotify className="w-6 h-6" />,
      link: "https://open.spotify.com/user/31hy5677pup7tpbkq6lzasxmaawa?si=81d2455a9c054e4e",
    },
  ];
  return (
    <div className=" grid grid-cols-12 gap-4 p-4 justify-self-center">
      {listLink.map((item, index) => (
        <a
          className="text-white col-span-12 sm:col-span-6 lg:col-span-4  w-full"
          href={item.link}
          key={index}
        >
          <SpotlightCard
            key={index}
            className="custom-spotlight-card "
            spotlightColor="rgba(139, 92, 246, 0.25)"
          >
            <div className="flex flex-row justify-evenly flex-wrap gap-2.5">
              {item.icon ? item.icon : <FaLink />}
              <div className="font-semibold font-mono">{item.title}</div>
            </div>
          </SpotlightCard>
        </a>
      ))}
    </div>
  );
}
