import { useEffect, useRef, useState } from "react";
import type { Habit } from "../types/habit";
import { loadHabits, saveHabits } from "../lib/storage";
import { today } from "../lib/dates";

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const isFirstLoad = useRef(true);

  /**
   * Load habits once when component mounts
   */
  useEffect(() => {
    const stored = loadHabits();
    setHabits(stored);
  }, []);

  /**
   * Save habits whenever they change
   * BUT skip first render to avoid overwriting storage
   */ useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    saveHabits(habits);
  }, [habits]);
  function addHabit(name: string) {
    setHabits((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        name,
        createdAt: today(),
        completedDates: [],
      },
    ]);
  }

  /**
   * Toggle completion for TODAY only
   */
  function toggleHabitCompletion(id: string) {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;

        const date = today();
        const alreadyCompleted = habit.completedDates.includes(date);

        return {
          ...habit,
          completedDates: alreadyCompleted
            ? habit.completedDates.filter((d) => d !== date)
            : [...habit.completedDates, date],
        };
      }),
    );
  }

  /**
   * Remove habit entirely
   */
  function removeHabit(id: string) {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }

  return { habits, addHabit, toggleHabitCompletion, removeHabit };
}
