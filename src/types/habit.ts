/**
 * Represents a single habit entity.
 * completedDates stores ISO date strings (YYYY-MM-DD)
 */
export interface Habit {
  id: string;
  name: string;
  createdAt: string;
  completedDates: string[];
  reminderTime?: string;
}
