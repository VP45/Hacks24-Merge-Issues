"use client";
import { SignIn } from "@clerk/nextjs";
// import Link from "next/link";F
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContext } from "react";
import { OcrContext } from "@/context/OcrContext";

export default function SignInPage() {
  const { setUserType } = useContext(OcrContext);
  return (
    <section className="bg-gray-300 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-6 pt-12 md:pb-20 md:pt-20">
          {/* Page header */}
          {/* <div className="max-w-3xl pb-6 mx-auto text-center md:pb-10">
                        <h1 className="h1">
                            Welcome back.
                        </h1>
                    </div> */}

          <div className="mt-10 flex items-center justify-center">
            <Tabs defaultValue="doctor" className="w-[400px]">
              <TabsList className="ml-12 grid grid-cols-2">
                <TabsTrigger
                  value="doctor"
                  onClick={() => {
                    setUserType("doctor");
                    localStorage.setItem("userT", "doctor");
                  }}
                >
                  Doctor
                </TabsTrigger>
                <TabsTrigger
                  value="user"
                  onClick={() => {
                    setUserType("user");
                    localStorage.setItem("userT", "user");
                  }}
                >
                  User
                </TabsTrigger>
              </TabsList>
              <TabsContent value="doctor">
                <SignIn />
              </TabsContent>
              <TabsContent value="user">
                <SignIn />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
