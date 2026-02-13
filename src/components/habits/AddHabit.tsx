// src/components/habits/AddHabit.tsx
import { useState } from "react";

export function AddHabit({ onAdd }: { onAdd: (name: string) => void }) {
  const [name, setName] = useState("");

  function handleSubmit() {
    if (!name.trim()) return;
    onAdd(name);
    setName("");
  }

  return (
    <div className="flex gap-2">
      <input
        className="border p-2 rounded w-full"
        placeholder="New habit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-black text-white px-4 rounded"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}
