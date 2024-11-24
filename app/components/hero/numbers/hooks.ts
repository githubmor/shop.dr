import { useEffect, useState } from "react";

export const useAnimNumber = (goal: number) => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    let startTime: number | null = null;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 3000; // Normalize progress (0 to 1)
      const easedProgress = easeOut(progress); // Apply easing function

      // Calculate the current value
      const current = Math.min(goal, Math.floor(goal * easedProgress));
      setNumber(current);

      // Continue animating unless we reach the goal
      if (current < goal) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Cleanup in case of unmount
      startTime = null;
    };
  }, [goal]);
  return number;
};
