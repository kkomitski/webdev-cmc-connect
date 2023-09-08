import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav className="h-16 border border-solid border-red-600">
        <div className="flex h-full w-5/12 items-center justify-between pl-10">
          <Link href="/">home</Link>
          <Link href="/solutions">solutions</Link>
          <Link href="/asset-classes">asset classes</Link>
          <Link href="/about">about</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
