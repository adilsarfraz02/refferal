"use client"
import React from 'react';
import { BorderBeam } from "@/components/ui/Borderbeam";
import { Image, useDisclosure } from "@nextui-org/react";
import LoginModal from "./LoginModal";
import { FaArrowRight } from "react-icons/fa6";
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function HeroSection() {
    const { status } = useSession();
  const { isOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <section className=" bg-gradient-to-br h-screen from-black to-zinc-900 flex flex-col items-center justify-center text-center text-primary-foreground">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Grow Your Business with Referrals
            </h1>
            <p className="max-w-[700px] mx-auto mt-4 text-lg md:text-xl px-8">
              Our referral program makes it easy to reward your customers for spreading the word about your products or services.
            </p>
            <div className="mt-8">
              {
                status === 'unauthenticated' || status === 'loading' ? 
                <LoginModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                Button={
                  <button
                    onClick={() => onOpenChange(true)}
                    className="flex mx-auto group items-center gap-3 bg-zinc-500/10 relative  justify-center whitespace-nowrap text-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-500/20 py-3 rounded-full px-6"
                  >
                    <span>Sign Up Now</span> <FaArrowRight className='mt-1 group-hover:ml-2.5 group-hover:-rotate-45 transition-all duration-300'/>
                    <BorderBeam size={`84`} />
                  </button>
                }
                  /> 
                  : 
                   <Link href={`/dashobard`}
                    
                    className="flex mx-auto w-fit group items-center gap-3 bg-zinc-500/10 relative  justify-center whitespace-nowrap text-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-500/20 py-3 rounded-full px-6"
                  >
                    <span>{ status === 'authenticated' &&  'Dashboard'}</span> <FaArrowRight className='mt-1 group-hover:ml-2.5 group-hover:-rotate-45 transition-all duration-300'/>
                    <BorderBeam size={`84`} />
                  </Link>
                }
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Reward Referrals</h3>
                <p className="text-muted-foreground">
                  Incentivize your customers to refer their friends and colleagues with rewards like discounts, gift cards, or exclusive offers.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Track Referrals</h3>
                <p className="text-muted-foreground">
                  Monitor the performance of your referral program with detailed analytics and reporting, so you can optimize your strategy.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Automate Referrals</h3>
                <p className="text-muted-foreground">
                  Streamline your referral process with automated workflows that handle everything from referral tracking to reward fulfillment.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <Image
                  src="/placeholder.svg"
                  width="600"
                  height="400"
                  style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
                  alt="Referral Program"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Boost Your Referral Program</h2>
                <p className="text-muted-foreground">
                  Our platform makes it easy to set up and manage a successful referral program. With customizable rewards, automated tracking, and detailed analytics, you can maximize the impact of your referrals.
                </p>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">© 2024 Referral. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0"></div>
        </div>
      </footer>
    </div>
  );
}
