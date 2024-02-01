
import Features from "@/components/Features";
import Hero from "@/components/Hero";
// import ScrollUp from "@/components/ScrollUp";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DocScribe",
  description: "Website for performing OCR on medical reports",
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
