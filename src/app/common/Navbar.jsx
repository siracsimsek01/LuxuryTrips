import { PrimaryButton } from "./Buttons";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <PrimaryButton>Call Us</PrimaryButton>
      <Image src="/logo.svg" alt="logo" width={100} height={100} />
      <Image src="/hamburger.svg" alt="menu" width={100} height={100} />
    </nav>
  );
}
