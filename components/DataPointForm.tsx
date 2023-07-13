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
          label="1. โครงการส่งผลต่อปัจจัยหลักภายใต้ห่วงโซ่คุณค่า ของเป้าหมายแผนแม่บทย่อย (Y1) ที่เลือกมา (ตามข้อเท็จจริง) และสามารถส่งผลต่อการบรรลุเป้าหมายแผนแม่บทและยุทธศาสตร์ชาติ ตามหลักการ XYZ (ระบุได้เฉพาะเลข 1 หรือ 0)"
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
          <Image src="q-criteria-description\criteria_68-01-description.png" alt="q1" />
        </ModalPopover>
      </Group>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="2.ความจำเป็นต้องมีหรือไม่มีโครงการนี้"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFound="โปรดระบุคะแนน 0-5"
          data={["0", "1", "2", "3", "4", "5"]}
          {...form.getInputProps("b")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 2"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 2"
        >
          <Image src="q-criteria-description\criteria_68-02-description-1.png" alt="q2" />
        </ModalPopover>
      </Group>

      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="3. โครงการเป็นการจัดทำจากข้อมูล เชิงประจักษ์ เช่น มีข้อมูลสถิติ/งานวิจัยรองรับ (ไม่ใช่การกล่าวอ้าง)"
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
          <Image src="q-criteria-description\q3-description.png" alt="q3" />
        </ModalPopover>
      </Group>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="4. โครงการมีวัตถุประสงค์ ผลผลิต ผลลัพธ์ และกลุ่มเป้าหมายผู้รับประโยชน์ที่ชัดเจน 
        สามารถส่งผลต่อการบรรลุเป้าหมายของโครงการอย่างเป็นรูปธรรม"
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
          <Image src="q-criteria-description\q4-description.png" alt="q4" />
        </ModalPopover>
      </Group>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="5. โครงการมีแผนการดำเนินงานและกิจกรรม ที่ชัดเจน เป็นไปได้จริง และส่งผลโดยตรงต่อการบรรลุเป้าหมาย และวัตถุประสงค์ของโครงการอย่างแท้จริง"
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
          <Image src="q-criteria-description\q5-description.png" alt="q5" />
        </ModalPopover>
      </Group>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="6. โครงการมีตัวชี้วัดที่สามารถสะท้อนการบรรลุผลสัมฤทธิ์ตามเป้าหมายของโครงการ ได้อย่างเป็นรูปธรรม"
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
          <Image src="q-criteria-description\q6-description.png" alt="q6" />
        </ModalPopover>
      </Group>
      <Group noWrap>
        <Select
          style={{ width: "100%" }}
          required
          label="7. โครงการเป็นการปรับปรุงซ่อมแซม/ก่อสร้างอาคาร/จัดตั้งกองทุน/หน่วยงาน/คณะกรรมการต่าง ๆ หรือไม่ หากเป็นต้องส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อย (Y1) ที่เกี่ยวข้องอย่างชัดเจน"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFound="โปรดระบุคะแนน 0-5"
          data={["0", "1", "2", "3", "4", "5"]}
          {...form.getInputProps("g")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 7"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 7"
        >
          <Image src="q-criteria-description\q7-1-description.png" alt="q7-1" />
          <Image src="q-criteria-description\q7-2-description.png" alt="q7-2" />
        </ModalPopover>
      </Group>
      <Group position="center" mt="md">
        <Button type="submit">แสดงผลคะแนน</Button>
      </Group>
    </form>
  );
};

export default DataPointForm;
