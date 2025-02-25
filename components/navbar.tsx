import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container z-50 flex justify-center items-center py-2 fixed top-0">
      <div className="w-[90%] text-2xl flex justify-between font-bold">
        <div>
          <Link href="#">RB</Link>
        </div>
        <div className="px-6">
          <Link href="#">Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
