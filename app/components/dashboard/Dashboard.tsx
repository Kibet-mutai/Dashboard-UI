import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
export default function Dashboard() {
  return (
    <main className="px-4 py-8 mt-6 w-full">
      <div className="border border-gray-700 flex flex-col gap-y-4 rounded-md">
        <div className="flex justify-between border-b border-b-gray-700 p-4">
          <div className="items-center flex space-x-6">
            <button className="relative items-center flex justify-between w-48 border border-gray-700 px-2 py-1 rounded-md hover:bg-gray-500/25">
              <div className="flex items-center space-x-2">
                <Image
                  src={"/images/acme-inc.png"}
                  alt={"trial"}
                  height={20}
                  width={20}
                  className="rounded-full"
                />
                <h3 className="font-medium">Acme Inc</h3>
              </div>
              <div className="flex flex-col space-x-0">
                <div className="w-3 h-3 text-gray-400 rotate-180">
                  <BiChevronDown className="w-full h-full" />
                </div>
                <div className="w-3 h-3 text-gray-400">
                  <BiChevronDown className="w-full h-full" />
                </div>
              </div>
            </button>
            <div className="flex space-x-6">
              <Link href={"#"}>Overview</Link>
              <Link href={"#"}>Customers</Link>
              <Link href={"#"}>Products</Link>
              <Link href={"#"}>Settings</Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="search"
              className="border border-gray-700 items-center w-72 bg-inherit px-2 rounded-md outline-none py-1"
              placeholder="Search..."
            ></input>
            <Image
              src={"/images/01.png"}
              alt="image"
              height={30}
              width={30}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col px-4">
          <div className="flex w-full justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex space-x-2">
              <input
                type="date"
                name="date"
                id="date"
                className="border-gray-700 border outline-none bg-inherit w-80 rounded-md p-1"
              />
              <button className="items-center bg-white px-2.5 text-black rounded-md text-sm">
                Download
              </button>
            </div>
          </div>
          <div className="text">Another</div>
        </div>
      </div>
    </main>
  );
}
