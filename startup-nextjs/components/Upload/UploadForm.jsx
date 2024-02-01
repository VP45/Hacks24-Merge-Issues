import React from "react";

const UploadForm = () => {
  return (
    <div>
      <label
        htmlFor="dropzone-file"
        className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
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
            <span className="font-semibold">Click to upload Images</span> or{" "}
            <span
              onClick={(e) => {
                e.preventDefault();
                setOpenModal(true);
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
              setVideo((prev) => e.target.files[0]);

              setSelectedWorkout(e.target.files[0].name.split(".")[0]);
            }
          }}
          id="dropzone-file"
          type="file"
          accept=".pdf ,image/*"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default UploadForm;
