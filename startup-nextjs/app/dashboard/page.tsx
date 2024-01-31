"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { useContext } from "react";
import { OcrContext } from "@/context/OcrContext";
import DoctorDashboard from "@/components/Patients/DoctorDashboard";
import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { userType } = useContext(OcrContext);
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  // console.log(user)
  return (
    <>
      {userType === "doctor" ? (
        <DoctorDashboard />
      ) : (
        <section className="container mt-24 flex h-screen justify-between pt-5">
          <div className="w-[40%] border-r">
            <div className="border-b p-6  text-center">
              <Image
                width={100}
                height={100}
                className="mx-auto h-24 w-24 rounded-full border-2 border-black"
                src="https://ui-avatars.com/api/?name=Swapnil+Vishwakarma&random=true"
                alt="Swapnil Vishwakarma"
              />
              <p className="pt-2 text-lg font-semibold">Swapnil Vishwakarma</p>
              <p className="text-sm text-gray-600">
                {user.primaryEmailAddress.emailAddress}
              </p>
            </div>
            <div className="mt-3 text-body-color">
              <p>
                <span className="font-medium text-black dark:text-white">
                  DOB :{" "}
                </span>
                18 aug 2003
              </p>
              <p>
                <span className="font-medium text-black dark:text-white">
                  Gender :{" "}
                </span>
                Male
              </p>
              {/* <p><span className="font-medium text-black">Phone : </span>1234567890</p> */}
            </div>
          </div>

          <div className="ml-1 w-full">
            <div className="mx-3 flex items-center justify-between">
              <h3 className="font-medium">Medical History</h3>
              <Button variant="outline">Button</Button>
            </div>
            <Table className="mt-2 border">
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader className="bg-gray-700">
                <TableRow>
                  <TableHead className="w-[100px] text-white">Date</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  {/* <TableHead>Method</TableHead> */}
                  <TableHead className="text-right text-white">
                    Lab Name
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">31/01/2024</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell className="text-right">
                    Lorem ipsum dolor sit amet consectetur.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">31/01/2024</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell className="text-right">
                    Lorem ipsum dolor sit amet consectetur.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">31/01/2024</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell className="text-right">
                    Lorem ipsum dolor sit amet consectetur.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
