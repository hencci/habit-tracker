import { Line } from "react-chartjs-2";

export function ProgressChart({ data }: { data: number[] }) {
  return (
    <Line
      data={{
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Completed",
            data,
            borderWidth: 2,
          },
        ],
      }}
    />
  );
}
