"use client";
import React, { useState, useEffect } from "react";

import ExerciseCard from "../Recommendation/ExerciseCard";
import { workouts } from "../Recommendation/workoutsData";

const Cardio = () => {
  const exercises = workouts.cardio;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      currentIndex + 1 >= exercises.length ? currentIndex : currentIndex + 1,
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1 < 0 ? currentIndex : currentIndex - 1);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <ExerciseCard exercise={exercises[currentIndex]} index={currentIndex} />
      <div className="m-2 flex max-w-[640px] flex-row justify-between gap-20 p-2">
        <button
          className="rounded bg-[#c759ff] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:scale-105 hover:shadow-md focus:outline-none active:bg-violet-600"
          type="button"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="rounded bg-[#c759ff] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:scale-105 hover:shadow-md focus:outline-none active:bg-violet-600"
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cardio;
