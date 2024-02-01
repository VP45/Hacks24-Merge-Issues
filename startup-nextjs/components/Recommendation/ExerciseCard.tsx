import Image from "next/image";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="rounded-md m-4 flex w-full flex-col gap-4 bg-gray-200 p-4 shadow-md md:max-w-[640px]">
      <div className="mx-auto grid grid-cols-1 items-center justify-center gap-4 px-8 py-4 text-center md:grid-cols-2">
        <div className="aspect-square w-full rounded-md p-2 shadow-md">
          <Image src={exercise.link} alt={exercise.name} width={250} height={300} className="" />
        </div>

        <div className="mx-4 flex aspect-square w-64 flex-col justify-center rounded-full border-8 border-solid border-white bg-primary p-2 shadow-md">
          {exercise.sets != 0 ? (
            <>
              <div>
                <p className="text-lg tracking-wide text-white">
                  {"Sets: "}
                  {exercise.sets}
                </p>
              </div>
              <div>
                <p className="text-lg tracking-wide text-white">
                  {"Reps: "}
                  {exercise.reps}
                </p>
              </div>
              <div>
                <p className="text-lg tracking-wide text-white">
                  {"Rest: "}
                  {exercise.rest}
                </p>
              </div>
            </>
          ) : (
            <p className="text-3xl tracking-wide text-white">
              {"10 - 30 minute session"}
            </p>
          )}
        </div>
      </div>
      <div className="rounded-lg bg-primary p-4">
        <p className="text-2xl font-bold tracking-wider text-white">
          {exercise.name}
        </p>
        {exercise.steps &&
          exercise.steps[0] != "" &&
          exercise.steps.map((step, id) => {
            return (
              <div key={id}>
                <p className="text-md tracking-wide text-white">
                  {id + 1}
                  {". "}
                  {step}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ExerciseCard;
