import {
  Box,
  Group,
  Image,
  Button,
  Popover,
  Select,
  Modal,
  Stack,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import ModalPopover from "./ModalPopover";

import DataPointFormValues from "../types/DataPointFormValues";

type Props = {
  handleFormSubmit: (values: DataPointFormValues) => void;
};

const DataPointForm = ({ handleFormSubmit }: Props) => {
  const form = useForm({
    initialValues: {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
    },
    validate: {
      a: (value) =>
        value == 1 || value == 0 ? null : "ระบุได้เฉพาะเลข 1 หรือ 0",
      b: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5",
      c: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5",
      d: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5",
      e: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5",
      f: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5",
      g: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5",
    },
    // inputWeight:{
    //   a:(value) == value*2,
    //   b:(value) == value*2,
    //   c:(value) == value*2,
    //   d:(value) == value*2,
    //   e:(value) == value*2,
    //   f:(value) == value*2,
    //   g:(value) == value*2,
    // },

  });

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="1. โครงการสอดคล้องกับปัจจัยและองค์ประกอบของห่วงโซ่คุณค่าของเป้าหมายแผนแม่บทย่อย (Y1) ที่เลือกมา และโครงการสามารถส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อย (Y1) และยุทธศาสตร์ชาติตามหลักการ XYZ (ระบุได้เฉพาะเลข 1 หรือ 0)"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFound="โปรดระบุคะแนน 0-1"
          data={["0", "1"]}
          {...form.getInputProps("a")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 1"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 1"
        >
          <Image src="q-criteria-description\criteria_68-01-description.png" alt="criteria-68-01" />
        </ModalPopover>
      </Group>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="2.ความจำเป็นต้องมีโครงการ"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFound="โปรดระบุคะแนน 1-5"
          data={["1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"]}
          {...form.getInputProps("b")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 2"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 2"
        >
          <Image src="q-criteria-description\criteria_68-02-description-1.png" alt="criteria-68-02-01" />
        
          <Image src="q-criteria-description\criteria_68-02-description-2.png" alt="criteria-68-02-02" />
        </ModalPopover>
      </Group>

      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="3. โครงการเป็นการจัดทำบนฐานข้อมูลเชิงประจักษ์ (ไม่ใช่การกล่าวอ้าง)"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFound="โปรดระบุคะแนน 0-5"
          data={["0", "1", "2", "3", "4", "5"]}
          {...form.getInputProps("c")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 3"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 3"
        >
          <Image src="q-criteria-description\criteria_68-03-description-1.png" alt="criteria-68-03-01" />
          <Image src="q-criteria-description\criteria_68-03-description-2.png" alt="criteria-68-03-02" />
          
        </ModalPopover>
      </Group>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="4. โครงการมีวัตถุประสงค์ ผลผลิตผลลัพธ์ และ กลุ่มเป้าหมายผู้รับประโยชน์ ที่ชัดเจน สามารถส่งผลต่อการบรรลุเป้าหมายของโครงการอย่างเป็นรูปธรรม"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFound="โปรดระบุคะแนน 0-5"
          data={["0", "1", "2", "3", "4", "5"]}
          {...form.getInputProps("d")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 4"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 4"
        >
          <Image src="q-criteria-description\criteria_68-04-description-1.png" alt="criteria-68-04-01" />
          <Image src="q-criteria-description\criteria_68-04-description-2.png" alt="criteria-68-04-02" />
        </ModalPopover>
      </Group>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="5. โครงการมีรายละเอียดแผนการดำเนินงานและกิจกรรมที่ ชัดเจน เป็นไปได้จริง และ ส่งผลโดยตรง ต่อการบรรลุเป้าหมายและวัตถุประสงค์ของโครงการอย่างแท้จริง"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFound="โปรดระบุคะแนน 0-5"
          data={["0", "1", "2", "3", "4", "5"]}
          {...form.getInputProps("e")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 5"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 5"
        >
          <Image src="q-criteria-description\criteria_68-05-description-1.png" alt="criteria-68-05-01" />
          <Image src="q-criteria-description\criteria_68-05-description-2.png" alt="criteria-68-05-02" />
          
        </ModalPopover>
      </Group>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="6. โครงการมีตัวชี้วัดที่สามารถชี้และวัดความสำเร็จของเป้าหมายโครงการได้อย่างเป็นรูปธรรม"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFound="โปรดระบุคะแนน 0-5"
          data={["0", "1", "2", "3", "4", "5"]}
          {...form.getInputProps("f")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 6"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 6"
        >
          <Image src="q-criteria-description\criteria_68-06-description-1.png" alt="criteria-68-06-01" />
          <Image src="q-criteria-description\criteria_68-06-description-2.png" alt="criteria-68-06-02" />
        </ModalPopover>
      </Group>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="7. โครงการไม่เป็นการจัดตั้งกองทุนและคณะกรรมการ/การจัดตั้งหน่วยงาน/การปรับปรุง ซ่อมแซม ก่อสร้างอาคารสำนักงาน/การจัดซื้อครุภัณฑ์ หากเป็นต้องส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อย (Y1) ที่เกี่ยวข้องอย่างชัดเจน"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFound="โปรดระบุคะแนน 0-5"
          data={["0", "0.25", "0.50", "0.75", "1", "1.25", "1.50", "1.75", "2", "2.25", "2.50", "2.75", "3", "3.25", "3.50", "3.75", "4", "4.25", "4.50", "4.75", "5"]}
          {...form.getInputProps("g")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 7"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 7"
        >
          <Image src="q-criteria-description\criteria_68-07-description-1.png" alt="criteria-68-07" />

        </ModalPopover>
      </Group>
      <Group position="center" mt="md">
        <Button type="submit">แสดงผลคะแนน</Button>
      </Group>
    </form>
  );
};

export default DataPointForm;
