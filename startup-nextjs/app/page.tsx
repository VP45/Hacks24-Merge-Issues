
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import ScrollUp from "@/components/ScrollUp";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      {/* <ScrollUp /> */}
      <Hero />
      <Features />
      <Video />
     
    </>
  );
}
