import type { Habit } from "../../types/habit";
import { calculateStreak } from "../../hooks/useStreak";

export function HabitCard({
  habit,
  onToggle,
}: {
  habit: Habit;
  onToggle: () => void;
}) {
  const streak = calculateStreak(habit.completedDates);

  return (
    <div className="p-4 border rounded flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{habit.name}</h3>
        <p className="text-sm text-gray-500">🔥 {streak} day streak</p>
      </div>
      <button onClick={onToggle}>✅</button>
    </div>
  );
}
