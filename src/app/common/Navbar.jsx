import { PrimaryButton } from "./Buttons";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";

export default function Navbar() {
  return (
    <nav className="bg-gray-600 w-full px-4 h-[3.5rem] pt-5 flex justify-between items-start relative z-20">
      <PrimaryButton>Call Us</PrimaryButton>
      <Image src="/logo.svg" alt="logo" width={100} height={40} className=""/>
      <CgMenuRight className="text-white text-5xl" />
    </nav>
  );
}
