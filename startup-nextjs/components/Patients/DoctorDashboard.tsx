"use client";

import React, { useState } from "react";
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
import ChatUI from "./ChatUI";
import Select from "react-select";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

type Props = {};

type PatientType = {
  id: string;
  name: string;
  age: number;
  email: string;
  date: string;
};

// fake patient details
const patients: PatientType[] = [
  {
    id: "1",
    name: "John Doe",
    age: 35,
    email: "john.doe@example.com",
    date: "2024-01-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    age: 28,
    email: "jane.smith@example.com",
    date: "2024-01-02",
  },
  {
    id: "3",
    name: "Michael Johnson",
    age: 45,
    email: "michael.johnson@example.com",
    date: "2024-01-03",
  },
  {
    id: "4",
    name: "Emily Brown",
    age: 22,
    email: "emily.brown@example.com",
    date: "2024-01-04",
  },
  {
    id: "5",
    name: "William Wilson",
    age: 50,
    email: "william.wilson@example.com",
    date: "2024-01-05",
  },
  {
    id: "6",
    name: "Olivia Garcia",
    age: 31,
    email: "olivia.garcia@example.com",
    date: "2024-01-06",
  },
  {
    id: "7",
    name: "James Martinez",
    age: 40,
    email: "james.martinez@example.com",
    date: "2024-01-07",
  },
  {
    id: "8",
    name: "Sophia Lee",
    age: 27,
    email: "sophia.lee@example.com",
    date: "2024-01-08",
  },
  {
    id: "9",
    name: "Daniel Anderson",
    age: 38,
    email: "daniel.anderson@example.com",
    date: "2024-01-09",
  },
  {
    id: "10",
    name: "Isabella Taylor",
    age: 33,
    email: "isabella.taylor@example.com",
    date: "2024-01-10",
  },
];

const DoctorDashboard = (props: Props) => {
  const { isLoaded, isSignedIn, user } = useUser();

//   if (!isLoaded || !isSignedIn) {
//     return null;
//   }

  const [users, setUsers] = useState<PatientType[]>(patients);
  const [filteredUsers, setFilteredUsers] = useState<PatientType[]>(patients);
  const [query, setQuery] = useState<string>("");

  return (
    <section className="container mt-24 flex h-[600px] justify-between gap-6 pt-5">
      <div className="w-[40%] min-w-[300px] max-w-[400px] rounded-md border border-[#e5e7eb]">
        <div className="h-full overflow-hidden rounded bg-white shadow-lg">
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
              {user?.primaryEmailAddress.emailAddress}
            </p>
            <div className="mt-5">
              <a
                href="#"
                className="rounded-full border px-4 py-2 text-xs font-semibold text-gray-700"
              >
                Manage your Account
              </a>
            </div>
          </div>
          <div className="border-b">
            <a href="#" className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Add members
                </p>
                <p className="text-xs text-gray-500">
                  Add/manage users &amp; teams
                </p>
              </div>
            </a>
            <a href="#" className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Account settings
                </p>
                <p className="text-xs text-gray-500">
                  Usage, billing, branding, teams
                </p>
              </div>
            </a>
            <a href="#" className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Personal settings
                </p>
                <p className="text-xs text-gray-500">
                  Email, profile, notifications
                </p>
              </div>
            </a>
            <a href="#" className="flex px-4 py-2 hover:bg-gray-100">
              <div className="text-green-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Apps &amp; integrations
                </p>
                <p className="text-xs text-gray-500">Google, slack, mail</p>
              </div>
            </a>
          </div>
          <div className="">
            <a href="#" className="flex px-4 py-2 pb-4 hover:bg-gray-100">
              <p className="text-sm font-medium leading-none text-gray-800">
                Product updates
              </p>
            </a>
            <a href="#" className="flex px-4 py-2 pb-4 hover:bg-gray-100">
              <p className="text-sm font-medium leading-none text-gray-800">
                Status updates
              </p>
            </a>
            <a href="#" className="flex px-4 py-2 pb-4 hover:bg-gray-100">
              <p className="text-sm font-medium leading-none text-gray-800">
                Support FAQ
              </p>
            </a>
            <a href="#" className="flex px-4 py-2 pb-4 hover:bg-gray-100">
              <p className="text-sm font-medium leading-none text-gray-800">
                Logout
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="no-scr relative w-full overflow-x-auto rounded-md border border-[#e5e7eb] p-2 sm:rounded-lg">
        <div className="flex-column flex flex-wrap items-center justify-between space-y-4 bg-white pb-4 dark:bg-gray-900 md:flex-row md:space-y-0">
          <div>
            {/*  sort option by, date */}
            <Select
              className="w-full"
              placeholder="Sort By"
              options={[
                { value: "date", label: "Date" },
                { value: "name", label: "Name" },
              ]}
            />
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setFilteredUsers(
                  users.filter((user) =>
                    user.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase()),
                  ),
                );
              }}
              type="text"
              id="table-search-users"
              className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Patient
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user) => {
              return (
                <tr
                  key={user?.id}
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
                  >
                    <img
                      className="h-10 w-10 rounded-full"
                      src={`https://ui-avatars.com/api/?name=${user?.name}&random=true`}
                      alt={user?.name}
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">{user.name}</div>
                      <div className="font-normal text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{user.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">{user.age}</div>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/patient/${user.id}`}
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DoctorDashboard;
