import Link from "next/link";
import { NoticesIcon } from "./NoticesIcon";
import { PartnersIcon } from "./PartnersIcon";
import { HomeIcon } from "./HomeIcon";

export const Menu = () => {
  return (
    <nav className="flex py-4 bg-[#121212] justify-evenly fixed shadowLight bottom-0 w-full items-center ">
      <Link href={"/partners"}>
        <PartnersIcon />
      </Link>
      <Link href={"/"}>
        <HomeIcon />
      </Link>
      <Link href={"/notices"}>
        <NoticesIcon />
      </Link>
    </nav>
  );
};
