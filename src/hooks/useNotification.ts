/**
 * Request browser notification permission
 */
export function requestNotificationPermission() {
  if ("Notification" in window) {
    Notification.requestPermission();
  }
}

/**
 * Send a habit reminder notification
 */
export function sendHabitReminder(habitName: string) {
  if (Notification.permission === "granted") {
    new Notification("Habit Reminder", {
      body: `Time to complete "${habitName}"`,
    });
  }
}
