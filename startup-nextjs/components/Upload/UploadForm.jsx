"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [date, setDate] = useState(null);

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }
    if (!date) {
      alert("Please select a date");
      return;
    }
    console.log(file, date);

    setLoading(true);

    // send the file and workout to the backend
    try {
      // const res = await axios.post("http://localhost:5000/api/posture", {
      //     exercise_type: selectedWorkout,
      //     upoadFile: file
      // });
      // console.log(res.data);

      const formData = new FormData();
      formData.append("exercise_type", selectedWorkout);
      formData.append("file", file);

      const res = await axios.post(
        "https://8b6b-2402-3a80-4190-beee-98ef-b30e-7fb3-6cb4.ngrok-free.app/upload-file?exercise_type=" +
          selectedWorkout,
        formData,
      );
      console.log(res.data);
      setResult(res.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center sm:max-w-lg">
        <div className="flex w-full  cursor-pointer flex-col items-center justify-center rounded-lg border-2">
          <div className="flex flex-col items-center justify-center gap-2 pb-6 pt-5">
            {/* preview of file */}

            {file ? (
              <div className="relative mx-auto h-full w-[90%]">
                <Image
                  className="h-full w-full"
                  src={URL.createObjectURL(file)}
                  alt="uploaded file"
                  width={200}
                  height={200}
                  controls
                />
                <button
                  onClick={() => {
                    setFile(null);
                    setResult(null);
                  }}
                  className="absolute right-0 top-0 flex -translate-y-1 translate-x-1/2 rounded-full bg-red-500 p-1"
                >
                  <RxCross2 className="h-4 w-4 text-white" />
                </button>
              </div>
            ) : (
              <label
                htmlFor="dropzone-file"
                className="flex w-[90%] min-w-[300px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
              >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                  <svg
                    className="mb-3 h-10 w-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">
                      Click to upload Images
                    </span>{" "}
                    or{" "}
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        // setOpenModal(true);
                      }}
                      className="rounded-md bg-primary px-2 py-1 text-white"
                    >
                      PDF
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    JPEG, PNG, GIF, SVG, etc.
                  </p>
                </div>
                <input
                  onChange={(e) => {
                    if (e.target.files) {
                      // @ts-ignore
                      setFile((prev) => e.target.files[0]);
                    }
                  }}
                  id="dropzone-file"
                  type="file"
                  accept=".pdf ,image/*"
                  className="hidden"
                />
              </label>
            )}

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[90%] min-w-[300px] justify-center text-left font-normal",
                    !date && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              className="w-[90%] min-w-[300px] rounded-lg bg-primary px-4 py-2 font-bold text-white hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
