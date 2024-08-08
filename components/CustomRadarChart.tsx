import { Box, Grid } from "@mantine/core";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Interaction,
} from "chart.js";

import { useMantineColorScheme } from '@mantine/core';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type Props = {
  data: number[];
};

const setChartData = (data: number[], colorScheme: string) => ({
  labels: ["1", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      label: "คะแนน",
      data: data,
      fill: true,
      backgroundColor: colorScheme === "dark" ? "rgba(255, 99, 132, 0.2)" : "rgba(255, 159, 64, 0.2)",
      borderColor: colorScheme === "dark" ? "rgb(255, 99, 132)" : "rgb(255, 159, 64)",
      pointBackgroundColor: colorScheme === "dark" ? "rgb(255, 99, 132)" : "rgb(255, 159, 64)",
      pointBorderColor: colorScheme === "dark" ? "#000" : "#fff",
      pointHoverBackgroundColor: colorScheme === "dark" ? "#000" : "#fff",
      pointHoverBorderColor: colorScheme === "dark" ? "rgb(255, 99, 132)" : "rgb(255, 159, 64)",
    }
  ],
});


 

const datasetsLabel = [
  ['โครงการสอดคล้องกับปัจจัยและองค์ประกอบของห่วงโซ่คุณค่าของเป้าหมายแผนแม่บทย่อย (Y1)',
  'ที่เลือกมา และโครงการสามารถส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อย (Y1)',
  'และยุทธศาสตร์ชาติตามหลักการ XYZ'],
  ['ความจำเป็นต้องมีโครงการ'],
  ['โครงการเป็นการจัดทำบนฐานข้อมูลเชิงประจักษ์ (ไม่ใช่การกล่าวอ้าง)'],
  ['โครงการมีวัตถุประสงค์ ผลผลิต ผลลัพธ์ และกลุ่มเป้าหมายผู้รับประโยชน์',
   'เป็นองค์ประกอบที่ชัดเจน สามารถส่งผลต่อการบรรลุเป้าหมายของโครงการอย่างเป็นรูปธรรม'],
  ['โครงการมีรายละเอียดแผนการดำเนินงานและกิจกรรมที่ชัดเจน เป็นไปได้จริง',
  'และส่งผลโดยตรงต่อการบรรลุเป้าหมายและวัตถุประสงค์ของโครงการอย่างแท้จริง'],
  ['โครงการมีตัวชี้วัดที่สามารถชี้และวัดความสำเร็จของเป้าหมายโครงการได้อย่างเป็นรูปธรรม'],
  ['โครงการไม่เป็นการจัดจัดตั้งกองทุนคณะกรรมการ/',
    'การจัดตั้งหน่วยงาน/การปรับปรุง ซ่อมแซม ก่อสร้างอาคารสำนักงาน/การซื้อครุภัณฑ์',
    'หากเป็นต้องส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อย (Y1) ที่เกี่ยวข้องอย่างชัดเจน'],
];


const setChartOptions = (colorScheme: string) => ({
  elements: {
    line: {
      borderWidth: 3,
    },
  },
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        label: function (datasets:any) {
          const lines = [...datasetsLabel[parseInt(datasets.label) - 1]]
          lines[0] = ' ' + datasets.label + ' ' + lines[0]
          return lines
        },
      },
    },
  },
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 5,
      ticks: {
        stepSize: 1,
        color: colorScheme === "dark" ? "#fff" : "#000",
      },
      grid: {
        color: colorScheme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
      },
      angleLines: {
        color: colorScheme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.1)",
      },
      pointLabels: {
        color: colorScheme === "dark" ? "#fff" : "#000",
      },
    },
  },
  responsive: true,
});

const CustomRadarChart = ({ data }: Props) => {
  const { colorScheme } = useMantineColorScheme();

  let newData = [
    Number(data[0]),
    Number(data[1]),
    Number(data[2]),
    Number(data[3]),
    Number(data[4]) * (5/3 * (Number(data[5]) + Number(data[6]) + Number(data[7]))),
    Number(data[8]),
    Number(data[9])
  ];
  return <Radar data={setChartData(newData, colorScheme)} options={setChartOptions(colorScheme)} />;
}

export default CustomRadarChart;
