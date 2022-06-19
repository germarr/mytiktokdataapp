import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Thisbar({ data }) {
  // console.log("cccccc", data.datsDate);
  // console.log("cccccc", data.dayList);

  return (
    <>
      <Bar
        options={{
          // layout: {
          //   padding: {
          //     bottom: -8,
          //   },
          // },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                display: true,
                maxRotation: 0,
                minRotation: 0,
                autoSkip: true,
                font: {
                  size: 9,
                },
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              enabled: true,
            },
            legend: {
              position: "top" as const,
              display: false,
            },
            title: {
              display: false,
            },
          },
        }}
        data={{
          labels: data.dayList,
          datasets: [
            {
              // label: "Holi",
              data: data.datsDate,
              borderColor: "#cbd5e1",
              backgroundColor: "rgba(51, 65, 85, 0.1)",
              borderRadius: 3,
              borderWidth: 2,
            },
            // {
            //   // label: "Holi",
            //   data: data.daysDataTwo,
            //   borderColor: "#ef4444",
            //   backgroundColor: "rgba(239, 68, 68, 0.1)",
            //   borderRadius: 3,
            //   borderWidth: 2,
            // },
          ],
        }}
      />
    </>
  );
}
