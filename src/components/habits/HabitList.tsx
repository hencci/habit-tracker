import { HabitCard } from "./HabitCard";
import type { Habit } from "../../types/habit";

export function HabitList({
  habits,
  onToggle,
}: {
  habits: Habit[];
  onToggle: (id: string) => void;
}) {
  return (
    <div className="space-y-3">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggle={() => onToggle(habit.id)}
        />
      ))}
    </div>
  );
}
