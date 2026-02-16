import type { Habit } from "../../types/habit";
import { calculateStreak } from "../../hooks/useStreak";
import { today } from "../../lib/dates";

export function HabitCard({
  habit,
  onToggle,
  onRemove,
}: {
  habit: Habit;
  onToggle: () => void;
  onRemove: () => void;
}) {
  const streak = calculateStreak(habit.completedDates);
  const completedToday = habit.completedDates.includes(today());

  return (
    <div className="p-4 border rounded flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{habit.name}</h3>
        <p className="text-sm text-gray-500">🔥 {streak} day streak</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onToggle}
          className={`px-3 py-1 rounded ${
            completedToday ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          {completedToday ? "Done" : "Mark"}
        </button>

        <button
          onClick={onRemove}
          className="px-3 py-1 rounded bg-red-500 text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
