import { useEffect, useState } from "react";
import type { Habit } from "../types/habit";
import { loadHabits, saveHabits } from "../lib/storage";
import { today } from "../lib/dates";

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);

  // Load habits on app start
  useEffect(() => {
    setHabits(loadHabits());
  }, []);

  // Persist habits whenever they change
  useEffect(() => {
    saveHabits(habits);
  }, [habits]);

  function addHabit(name: string) {
    setHabits([
      ...habits,
      {
        id: crypto.randomUUID(),
        name,
        createdAt: today(),
        completedDates: [],
      },
    ]);
  }

  function toggleHabitCompletion(id: string) {
    setHabits(
      habits.map((habit) => {
        if (habit.id !== id) return habit;

        const date = today();
        const completed = habit.completedDates.includes(date);

        return {
          ...habit,
          completedDates: completed
            ? habit.completedDates.filter((d) => d !== date)
            : [...habit.completedDates, date],
        };
      }),
    );
  }

  return { habits, addHabit, toggleHabitCompletion };
}
