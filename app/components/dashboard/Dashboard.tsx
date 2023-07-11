"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiChevronDown, BiDollar, BiPulse } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { CgBox } from "react-icons/cg";
import Graph from "./Graph";

export default function Dashboard() {
  const [dropDown, setDropDown] = useState(false);
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
              className="rounded-full object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col px-4 py-2">
          <div className="flex w-full justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex space-x-2">
              <input
                type="date"
                name="date"
                id="date"
                className="border-gray-700 border outline-none bg-inherit w-80 rounded-md p-1 cursor-pointer"
              />
              <button className="items-center bg-white px-2.5 text-black rounded-md text-sm">
                Download
              </button>
            </div>
          </div>
          <div className="bg-gray-500/25 rounded-md flex items-center py-1 px-2 w-96 space-x-6">
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Analytics</Link>
            <Link href={"#"}>Reports</Link>
            <Link href={"#"}>Notifications</Link>
          </div>
          <div className="grid grid-cols-4 space-x-3 py-3">
            <div className="col-span-1 items-left flex flex-col border border-gray-700 rounded-md px-3 py-4">
              <div className="flex justify-between py-2">
                <h1 className="text-sm">Total Revenue</h1>
                <BiDollar className="text-gray-700" />
              </div>
              <span className="font-bold text-2xl">$45,231.89</span>
              <h6 className="text-gray-700 text-xs">+20.1% from last month</h6>
            </div>
            <div className="col-span-1 items-left flex flex-col border border-gray-700 rounded-md px-3 py-4">
              <div className="flex justify-between py-2">
                <h1 className="text-sm">Subscriptions</h1>
                <FiUsers className="text-gray-700" />
              </div>
              <span className="font-bold text-2xl">+2350</span>
              <h6 className="text-gray-700 text-xs">+180.1% from last month</h6>
            </div>
            <div className="col-span-1 items-left flex flex-col border border-gray-700 rounded-md px-3 py-4">
              <div className="flex justify-between py-2">
                <h1 className="text-sm">Sales</h1>
                <CgBox className="text-gray-700" />
              </div>
              <span className="font-bold text-2xl">+12,234</span>
              <h6 className="text-gray-700 text-xs">+19% from last month</h6>
            </div>
            <div className="col-span-1 items-left flex flex-col border border-gray-700 rounded-md px-3 py-4">
              <div className="flex justify-between py-2">
                <h1 className="text-sm">Active Now</h1>
                <BiPulse className="text-gray-700" />
              </div>
              <span className="font-bold text-2xl">+573</span>
              <h6 className="text-gray-700 text-xs">+201 since last hour</h6>
            </div>
          </div>
          <div className="grid grid-cols-10 space-x-3">
            <div className="col-span-6 border border-gray-700 px-3 rounded-md py-2">
              <Graph />
            </div>
            <div className="col-span-4 rounded-md border border-gray-700 p-3 flex flex-col">
              <div className="flex flex-col pb-6">
                <h1 className="text-lg font-bold">Recent Sales</h1>
                <h6 className="text-gray-700 text-xs">
                  You made 265 sales this month.
                </h6>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between">
                  <div className="items-center flex flex-row space-x-3">
                    <Image
                      src={"/images/01.png"}
                      alt={"image"}
                      height={30}
                      width={30}
                      className="rounded-full object-cover"
                    />
                    <div className="space-y-0">
                      <h1 className="text-base">Olivia Martin</h1>
                      <h6 className="text-gray-700 text-xs">
                        olivia.martin@email.com
                      </h6>
                    </div>
                  </div>
                  <span className="font-medium text-lg">+$1,999.00</span>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex flex-row space-x-3">
                    <Image
                      src={"/images/03.png"}
                      alt={"image"}
                      height={30}
                      width={30}
                      className="rounded-full object-cover"
                    />
                    <div className="space-y-0">
                      <h1 className="text-base">Isabella Nguyen</h1>
                      <h6 className="text-gray-700 text-xs">
                        isabella.nguyen@email.com
                      </h6>
                    </div>
                  </div>
                  <span className="font-medium text-lg">+$299.00</span>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex flex-row space-x-3">
                    <Image
                      src={"/images/02.png"}
                      alt={"image"}
                      height={30}
                      width={30}
                      className="rounded-full object-cover"
                    />
                    <div className="space-y-0">
                      <h1 className="text-base">Jackson Lee</h1>
                      <h6 className="text-gray-700 text-xs">
                        jackson.lee@email.com
                      </h6>
                    </div>
                  </div>
                  <span className="font-medium text-lg">+$39.00</span>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex flex-row space-x-3">
                    <Image
                      src={"/images/04.png"}
                      alt={"image"}
                      height={30}
                      width={30}
                      className="rounded-full object-cover"
                    />
                    <div className="space-y-0">
                      <h1 className="text-base">William Kim</h1>
                      <h6 className="text-gray-700 text-xs">will@email.com</h6>
                    </div>
                  </div>
                  <span className="font-medium text-lg">+$99.00</span>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex flex-row space-x-3">
                    <Image
                      src={"/images/05.png"}
                      alt={"image"}
                      height={30}
                      width={30}
                      className="rounded-full object-cover"
                    />
                    <div className="space-y-0">
                      <h1 className="text-base">Sofia Davis</h1>
                      <h6 className="text-gray-700 text-xs">
                        sofia.davis@email.com
                      </h6>
                    </div>
                  </div>
                  <span className="font-medium text-lg">+$39.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
