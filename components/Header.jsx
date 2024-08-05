"use client"
import Link from "next/link";
import LoginModal from "@/sections/LoginModal";
import { signOut, useSession } from "next-auth/react";
import { Button, useDisclosure } from "@nextui-org/react";
import ShinyButton from "./ui/ShinyButton";
import { BorderBeam } from "./ui/Borderbeam";
import DropdownNav from "./DropdownNav";
export default function Navbar() {
  const { data: session, status } = useSession();
  const { isOpen, onOpenChange } = useDisclosure();

 
    return (
        <header id="homeHeader" className="fixed top-0 w-full text-primary-foreground py-4 px-6 flex items-center justify-between">
          <Link className="flex items-center gap-2" href="/">
            
            <span className="text-lg font-semibold">Referral</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link className="text-sm font-medium hover:underline" href="#">
              Refer a friend
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              Contact
            </Link>
          </nav>
           { status === 'unauthenticated' && (<LoginModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                Button={
                   <button
                    onClick={() => onOpenChange(true)}
                    className="inline-flex hover:shadow-2xl hover:shadow-zinc-700/20 bg-zinc-500/10 relative items-center justify-center whitespace-nowrap text-base font-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-500/20 w-fit rounded-3xl px-4 py-2"
                  >
                    Sign Up
                    <BorderBeam size={`45`} />
                  </button>
                }
        />)}
        {
          status === 'loading' && (
            <button
                    onClick={() => onOpenChange(true)}
                    className="inline-flex animate-pulse hover:shadow-2xl h-10 w-20 hover:shadow-zinc-700/20 bg-zinc-500/10 relative items-center justify-center whitespace-nowrap text-base font-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-500/20 rounded-3xl px-4 py-2"
                  >
                   
            </button>
          )
        }
        {
          status === 'authenticated' &&
          session?.user && (
           <DropdownNav user={session?.user}/>
          )
        }
        </header>
    )
}