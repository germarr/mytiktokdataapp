import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(Filler, ArcElement, Tooltip, Legend, RadialLinearScale);

export default function Ecopie({ data }) {
  return (
    <>
      <Pie
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "left" as const,
              display: true,
              labels: {
                color: "black",
              },
            },
          },
        }}
        data={{
          labels: data.weeknames,
          datasets: [
            {
              label: "# of Votes",
              data: data.weeksdata,
              backgroundColor: [
                "#d73027",
                "#fc8d59",
                "#fee090",
                "#ffffbf",
                "#e0f3f8",
                "#91bfdb",
                "#4575b4",
              ],
              borderColor: [
                "#d73027",
                "#fc8d59",
                "#fee090",
                "#ffffbf",
                "#e0f3f8",
                "#91bfdb",
                "#4575b4",
              ],
              borderWidth: 1,
            },
          ],
        }}
      />
    </>
  );
}
