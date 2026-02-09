import { type Habit } from "../types/habit";

const STORAGE_KEY = "habits";

/**
 * Persist habits to localStorage
 */
export function saveHabits(habits: Habit[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
}

/**
 * Load habits safely from localStorage
 */
export function loadHabits(): Habit[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}
