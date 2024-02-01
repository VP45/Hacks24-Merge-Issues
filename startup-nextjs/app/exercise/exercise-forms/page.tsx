import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Stretching from "@/components/Recommendation/Stretching";
import Cardio from "@/components/Exercises/Cardio";

const ExerciseForms = () => {
  return (
    <div className="mt-24">
      <Tabs defaultValue="stretching">
        <TabsList>
          <TabsTrigger value="stretching">Stretching</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
        </TabsList>
        <TabsContent value="stretching">
          <Stretching />
        </TabsContent>
        <TabsContent value="cardio">
          <Cardio />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExerciseForms;
