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

const transformData = (data: number[]) => {
  const output = data.map((inputVal, i) => {
    return i == 0 ? inputVal * 5 : inputVal
  });
  return output;
};


const setChartData = (data: number[]) => ({
  labels: ["1", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      label: "คะแนน",
      data: transformData(data),
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    }
  ],
});


 

const datasetsLabel = [
  ['โครงการสอดคล้องกับปัจจัยและองค์ประกอบของห่วงโซ่คุณค่าของเป้าหมายแผนแม่บทย่อย (Y1)',
  'ที่เลือกมาและโครงการสามารถส่งผลต่อการบรรลุ',
  'Y1 และยุทธศาสตร์ชาติ ตามหลักการ XYZ'],
  ['ความจำเป็นต้องมีโครงการ'],
  ['โครงการเป็นการจัดทำบนฐานข้อมูลเชิงประจักษ์ (ไม่ใช่การกล่าวอ้าง)'],
  ['โครงการมีวัตถุประสงค์ ผลผลิต ผลลัพธ์ และกลุ่มเป้าหมายผู้รับประโยชน์ที่ชัดเจน',
   'สามารถส่งผลต่อการบรรลุเป้าหมายของโครงการอย่างเป็นรูปธรรม'],
  ['โครงการมีรายละเอียดแผนการดำเนินงานและกิจกรรมที่ชัดเจน เป็นไปได้จริง',
  'และส่งผลโดยตรงต่อการบรรลุเป้าหมายและวัตถุประสงค์ของโครงการอย่างแท้จริง'],
  ['โครงการมีตัวชี้วัดที่สามารถชี้และวัดความสำเร็จของเป้าหมายโครงการได้อย่างเป็นรูปธรรม'],
  ['โครงการไม่เป็นการจัดจัดตั้งกองทุนคณะกรรมการ/','การจัดตั้งหน่วยงาน/การปรับปรุง ซ่อมแซม ก่อสร้างอาคารสำนักงาน/การซื้อครุภัณฑ์','หากเป็นต้องส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อย (Y1) ที่เกี่ยวข้องอย่างชัดเจน'],
];


const options = {
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
        stepSize: 1
      },
      grid: {
        backgroundColor: "rgb(0, 0, 0)",
        bordercolor: "rgb(0, 0, 0)",
        color: "rgb(0, 0, 0)",
      },
      angleLines:{
        color: "rgb(0, 0, 0)",

      }
    },
  },
  responsive: true,

};

const CustomRadarChart = ({ data }: Props) => {
  return <Radar data={setChartData(data)} options={options} />;
}

export default CustomRadarChart;
