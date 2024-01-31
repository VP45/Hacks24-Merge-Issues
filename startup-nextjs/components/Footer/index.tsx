"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 py-4 text-center text-white">
      <p className="text-sm">© 2024 Your Company Name. All rights reserved. | <a href="https://github.com/VP45/Hacks24-Merge-Issues" className="underline">GitHub</a></p>
    </footer>
  );
};

export default Footer;
