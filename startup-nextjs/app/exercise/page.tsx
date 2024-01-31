import SafetyGuide from "@/components/Recommendation/SafetyGuide";
import Link from "next/link";
import { AiFillRobot } from "react-icons/ai";

const Exercise = () => {
  return (
    <>
      <Link href="/chat/injury">
        <button
          className="fixed bottom-20 right-6 z-50 animate-bounce cursor-pointer rounded border-none bg-[#c759ff] p-4 text-white outline-none hover:scale-105 hover:bg-violet-600"
          title="Chat with ExerciseBot"
        >
          <AiFillRobot />
        </button>
      </Link>
      <div className="flex flex-col items-center justify-center gap-4 p-4 mt-28">
        <SafetyGuide />
        <p className="text-red-500">
          *We recommend reading the safety guide before starting any exercise to
          prevent injuries.
        </p>
        <div>
          <Link href="/exercise/stretching">
            <button
              className="rounded bg-[#c759ff] px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:scale-105 hover:shadow-md focus:outline-none active:bg-violet-600"
              type="button"
            >
              Start Exercising
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Exercise;
