"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
const MainScreenLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // biome-ignore lint/style/useConst: <explanation>
    let startTime = Date.now();
    // biome-ignore lint/style/useConst: <explanation>
    let endTime = startTime + 15000; // 15 seconds in milliseconds
    const updateProgress = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const progressValue = Math.min((elapsedTime / 15000) * 100, 95);
      setProgress(progressValue);
      if (now < endTime) {
        requestAnimationFrame(updateProgress);
      }
    };
    requestAnimationFrame(updateProgress);
  }, []);
  return (
    <main className="h-screen w-full flex items-center justify-center flex-col ">
      <div
        className="flex flex-col"
        style={{
          width: "300px",
        }}
      >
        <h1 className="text-center font-bold text-2xl"> Fitness Tracker</h1>
        <Progress
          className="w-full h-2 mt-[20px]"
          value={progress}
        />
      </div>
    </main>
  );
};

export default MainScreenLoader;
