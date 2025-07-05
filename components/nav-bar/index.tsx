import React from "react";
import { ExternalLink } from "lucide-react";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="shadow-sm w-full sticky top-0  bg-white dark:bg-gray-900 z-[9999]">
      <div className="w-full flex items-center justify-center h-auto bg-black">
        <div className="max-w-6xl mx-auto py-2">
        <p className="text-white text-sm">
  <b>Supercharge your career with our AI-powered resume builder.</b>
</p>
        </div>
      </div>
      <div className="w-full mx-auto max-w-7xl p-3 px-5 flex items-center justify-between ">
        <div className="flex items-center flex-1 gap-9">
          <div>
            <h5 className="font-black text-lg text-primary">CVbuild.ai</h5>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex items-center gap-5 text-[14px] font-medium text-black dark:text-white">
              <li>
                <Link href="#">AI Features</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Resources</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <LoginLink className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Sign In
          </LoginLink>
          <RegisterLink className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            Get Started
          </RegisterLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
