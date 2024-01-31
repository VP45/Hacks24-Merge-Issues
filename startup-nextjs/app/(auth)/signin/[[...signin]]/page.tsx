'use client'
import { SignIn } from "@clerk/nextjs";
// import Link from "next/link";F
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";


export default function Page() {
    const [userType, setUserType] = useState<string>('user')
    return (
        <section className="bg-gray-300 dark:bg-black">
            <div className="max-w-6xl px-4 mx-auto sm:px-6">
                <div className="pt-12 pb-6 md:pt-20 md:pb-20">
                    {/* Page header */}
                    {/* <div className="max-w-3xl pb-6 mx-auto text-center md:pb-10">
                        <h1 className="h1">
                            Welcome back.
                        </h1>
                    </div> */}

                    <div className="flex items-center justify-center mt-10">
                        <Tabs defaultValue="doctor" className="w-[400px]">
                            <TabsList className="grid grid-cols-2 ml-12">
                                <TabsTrigger value="doctor" onClick={() => { setUserType("doctor") }}>Doctor</TabsTrigger>
                                <TabsTrigger value="user" onClick={() => { setUserType("user") }}>User</TabsTrigger>
                            </TabsList>
                            <TabsContent value="doctor"><SignIn /></TabsContent>
                            <TabsContent value="user"><SignIn /></TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
}
