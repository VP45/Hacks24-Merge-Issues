// import React, { useEffect } from "react";
import { injuryPrevention } from "./workoutsData";

const SafetyGuide = () => {
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);
  return (
    <>
      <div className="w-screen px-4 md:px-32">
        <div
          className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded border-violet-800 
  bg-violet-200 text-black shadow-lg"
        >
          <div className="mb-0 rounded-t border-0 px-4 py-3">
            <div className="flex flex-wrap items-center justify-center text-center">
              <div className="relative w-full max-w-full flex-1 flex-grow px-4 ">
                <h3 className="text-lg font-semibold text-black">
                  Safety Measures for injury Prevetion
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto ">
            <table className="w-full border-collapse items-center bg-transparent">
              <thead>
                <tr>
                  <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-violet-700 bg-violet-400 px-12 py-3 text-left align-middle text-xs font-semibold uppercase text-violet-800 md:px-6">
                    Preventive Measure
                  </th>
                  <th className="whitespace-nowrap border border-l-0 border-r-0 border-solid border-violet-700 bg-violet-400 px-12 py-3 pl-12 text-left align-middle text-xs font-semibold uppercase text-violet-800 md:px-6 md:pl-6">
                    Explanation
                  </th>
                </tr>
              </thead>

              <tbody>
                {injuryPrevention.map((measure, id) => {
                  const key = Object.keys(measure)[0];
                  const value = Object.values(measure)[0];
                  return (
                    <tr key={id} className="border border-solid border-b-white">
                      <th className="md:text-md flex items-center whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-sm">
                        <p className="text-lg font-bold text-black">{key}</p>
                      </th>
                      <td className="whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs">
                        <p className="text-lg text-black">{value}</p>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafetyGuide;
