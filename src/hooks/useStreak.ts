import { differenceInCalendarDays, parseISO } from "date-fns";

/**
 * Calculates current streak based on completed dates
 */
export function calculateStreak(dates: string[]) {
  if (!dates.length) return 0;

  const sorted = [...dates].sort((a, b) => +new Date(b) - +new Date(a));

  let streak = 1;

  for (let i = 0; i < sorted.length - 1; i++) {
    const diff = differenceInCalendarDays(
      parseISO(sorted[i]),
      parseISO(sorted[i + 1]),
    );

    if (diff === 1) streak++;
    else break;
  }

  return streak;
}
