/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";

export const NavBar = () => {
  return (
    <>

      <div className="flex p-6 absolute top-0 left-0 w-full h-20 lg:hidden">
        <Drawer>
          <DrawerTrigger><Menu className="text-foreground"/></DrawerTrigger>
          <DrawerContent className="flex flex-col gap-10 mx-auto align-middle justify-center">
            <Link className=" text-center" href="/">
              Home
            </Link>
            <Link className=" text-center" href="/projects">
              Projects
            </Link>
            <Link className=" text-center" href="/contact">
              Contact
            </Link>
            <div className="flex justify-center mb-10">
              <ModeToggle />
            </div>
          </DrawerContent>
        </Drawer>
        </div>


      <nav className=" container hidden lg:sticky top-0 bg-background z-50 left-0 w-full h-20 lg:flex justify-center items-center lg:gap-32 p-8">
        <Link
          className=" hover:scale-110 hover:bg-gradient-to-r hover:text-indigo-500 animate"
          href="/"
        >
          // Home
        </Link>
        <Link
          className=" hover:scale-110 hover:bg-gradient-to-r hover:text-indigo-500 animate"
          href="/projects"
        >
          // Projects
        </Link>
        <Link
          className=" hover:scale-110 hover:bg-gradient-to-r hover:text-indigo-500 animate"
          href="/contact"
        >
          // Contact
        </Link>
        <ModeToggle />
      </nav>
    </>
  );
};
