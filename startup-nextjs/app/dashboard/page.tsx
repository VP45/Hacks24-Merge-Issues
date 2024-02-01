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
import { use, useContext, useEffect, useState } from "react";
import { OcrContext } from "@/context/OcrContext";
import DoctorDashboard from "@/components/Patients/DoctorDashboard";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import UploadDialog from "@/components/Upload/UploadDialog";
import Link from "next/link";
import axios from "axios";

const Dashboard = () => {
  const { userType } = useContext(OcrContext);
  const { isSignedIn, user } = useUser();
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  if (!isLoaded || !isSignedIn || !userId) {
    router.push("/signin");
  }

  console.log(userId);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {

      const res = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + `get_user_data?user_id=${userId}`
        ,{
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": '*',
            "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content-Type, Accept ',
            "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE" ,
            "Access-Control-Max-Age": 3600 
          },
        },
      );
      console.log("ukh", res);
      setData(res.data.links);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {userType === "doctor" ? (
        <DoctorDashboard />
      ) : (
        <section className="container mt-48 flex h-screen justify-between pt-5">
          <div className="w-[40%] border-r">
            <div className="border-b p-6  text-center">
              <img
                // width={100}
                // height={100}
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

            <div className="mx-10 mt-5 flex flex-col rounded border p-5">
              <Link href="/recommendation">
                <div className="mb-3 me-2 flex flex-col items-center rounded-lg bg-primary px-5 py-5 text-center text-sm font-medium text-white hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-[#2557D6]/50 dark:focus:ring-[#2557D6]/50">
                  <GiCursedStar size={40} />
                  <p className="text-xl">Recommendation</p>
                </div>
              </Link>
              <Link href="/exercise">
                <div className="mb-2 me-2 flex flex-col items-center rounded-lg border border-primary bg-white px-5 py-5 text-center text-sm font-medium text-gray-900 hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-800">
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
                  <TableHead className="text-white">Lab Name</TableHead>
                  {/* <TableHead>Method</TableHead> */}
                  <TableHead className="text-right text-white">
                    View Document
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item[1]}</TableCell>
                    {/* <TableCell>{item.status}</TableCell> */}
                    <TableCell className="text-right">
                      Dr. Lal Path Labs
                    </TableCell>
                    <TableCell>
                      <Link
                        href={`${item[0]}`}
                        target="_blank"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        View
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
