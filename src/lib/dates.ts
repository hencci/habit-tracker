import { format } from "date-fns";
/**
 * Returns today's date in YYYY-MM-DD format
 */
export function today() {
  return format(new Date(), "yyyy-MM-dd");
}
