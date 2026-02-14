import { useHabits } from "./hooks/useHabit";
import { AddHabit } from "./components/habits/AddHabit";
import { HabitList } from "./components/habits/HabitList";

export default function App() {
  const { habits, addHabit, toggleHabitCompletion } = useHabits();

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Habit Tracker</h1>

      <AddHabit onAdd={addHabit} />
      <HabitList habits={habits} onToggle={toggleHabitCompletion} />
    </main>
  );
}
