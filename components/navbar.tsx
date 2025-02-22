import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container flex justify-center items-center py-2">
      <div className="w-[90%] flex justify-between">
        <div>RB</div>
        <div className="flex">
          <div className="px-6">
            <Link href="#">Work</Link>
          </div>
          <div className="px-6">Menu</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
