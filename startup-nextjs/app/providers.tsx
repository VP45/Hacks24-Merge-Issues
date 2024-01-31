"use client";

import { OcrContextProvider } from "@/context/OcrContext";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <OcrContextProvider>{children}</OcrContextProvider>
    </ThemeProvider>
  );
}
