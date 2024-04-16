import { Back } from "iconic-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = ({
  title = "Server Error!",
  msg = "Please try again later",
}: {
  title?: string;
  msg?: string;
}) => {
  return (
    <div className="flex w-full rounded-2xl bg-slate-200 text-center justify-center">
      <div className="self-center">
        <p className="text-4xl text-gray-700 font-semibold mb-2">{title}</p>
        <p className="text-3xl text-gray-700 font-semibold">{msg}</p>
        <Image
          className="rounded-full z-10 my-7"
          src="/error.png"
          alt="error img"
          quality={50}
          width={500}
          height={220}
          priority
        />
        <Link href="/">
          <div className="flex p-2 border-2 rounded-2xl border-gray-700 hover:bg-blue-200 text-center gap-2 w-fit mx-auto">
            <Back size="34" color="#222" />
            <p className="text-gray-700 text-lg font-semibold self-center">
              Back to homepage
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;
