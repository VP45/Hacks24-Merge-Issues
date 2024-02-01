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

import { FaDumbbell } from "react-icons/fa";
import { GiCursedStar } from "react-icons/gi";

import Image from "next/image";
import { useContext } from "react";
import { OcrContext } from "@/context/OcrContext";
import DoctorDashboard from "@/components/Patients/DoctorDashboard";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import UploadDialog from "@/components/Upload/UploadDialog";
import Link from "next/link";

const Dashboard = () => {
  const { userType } = useContext(OcrContext);
  const { isSignedIn, user } = useUser();
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  if (!isLoaded || !isSignedIn || !userId) {
    router.push("/signin");
  }

  console.log(userId);
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
                src={`https://ui-avatars.com/api/?name=${user?.fullName}&random=true`}
                alt="Swapnil Vishwakarma"
              />
              <p className="pt-2 text-lg font-semibold">{user?.fullName}</p>
              <p className="text-sm text-gray-600">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
              <div className="ml-5 mt-3 text-body-color">
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

            <div className="mx-10 flex flex-col border p-5 mt-5 rounded">
              <Link href="/recommendation">
                <div className="mb-3 me-2 flex flex-col items-center rounded-lg bg-primary px-5 py-5 text-center text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-[#2557D6]/50 dark:focus:ring-[#2557D6]/50 hover:scale-105">
                  <GiCursedStar size={40} />
                  <p className="text-xl">Recommendation</p>
                </div>
              </Link>
              <Link href="/exercise">
                <div
                  className="mb-2 me-2 flex flex-col items-center rounded-lg border border-primary bg-white px-5 py-5 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800 hover:scale-105"
                >
                  <FaDumbbell size={40} className="text-primary" />
                  <p className="text-xl text-primary">Exercise</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="ml-1 w-full">
            <div className="mx-3 flex items-center justify-between">
              <h3 className="font-medium">Medical History</h3>
              <UploadDialog />
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
