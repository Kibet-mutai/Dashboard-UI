import Image from "next/image";
import { BsTwitter, BsMoonStars } from "react-icons/bs";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-between px-8 py-6 border-b-gray-900 border-b">
      <div className="flex">
        <h1 className="font-bold text-lg">Dashboard UI</h1>
      </div>
      <div className="flex space-x-4">
        <Link href="#" className="w-12-h-12">
          <BsTwitter className="w-full h-full" />
        </Link>
        <Link href="#" className="w-12-h-12">
          <BsMoonStars className="w-full h-full" />
        </Link>
      </div>
    </div>
  );
}
