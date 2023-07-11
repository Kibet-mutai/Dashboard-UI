import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Chart as chartJs,
} from "chart.js";

chartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      data: [
        4600, 4800, 3900, 900, 5800, 3000, 1800, 3000, 3000, 5000, 2500, 1200,
      ],
      backgroundColor: ["rgba(186,255,0)"],
      borderColor: ["inherit"],
    },
  ],
};
export default function Graph() {
  return (
    <div>
      <h2 className="font-medium">Overview</h2>
      <Bar
        data={data}
        width={100}
        height={40}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
}
