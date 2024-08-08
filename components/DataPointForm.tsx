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
  useMantineTheme,
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
      a: 0, //q1
      b: 0, //q2
      c: 0, //q3
      d: 0, //q4
      e: 0, //q5.1
      f: 0, //q5.2
      g: 0, //q5.3
      h: 0, //q5.4
      // i: 0, //q5
      j: 0, //q6
      k: 0, //q7
    },
    validate: {
      a: (value) =>
        value == 1 || value == 0 ? null : "ระบุได้เฉพาะเลข 1 หรือ 0", //q1
      b: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5", //q2
      c: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5", //q3
      d: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5", //q4
      e: (value) =>
        value == 1 || value == 0 ? null : "ระบุได้เฉพาะเลข 0 หรือ 1", //q5.1
      f: (value) =>
        value == 1 || value == 0 ? null : "ระบุได้เฉพาะเลข 0 หรือ 1", //q5.2
      g: (value) =>
        value == 1 || value == 0 ? null : "ระบุได้เฉพาะเลข 0 หรือ 1", //q5.3
      h: (value) =>
        value == 1 || value == 0 ? null : "ระบุได้เฉพาะเลข 0 หรือ 1", //q5.4
      // i: (value) =>
      // value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5", //q5
      j: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5", //q6
      k: (value) =>
        value >= 0 && value <= 5 ? null : "ระบุได้เฉพาะเลข 0 ถึง 5", //q7

    },
  });

  const selectStyle = { flexGrow: 1, flexShrink: 1, flexBasis: 0 };
  const theme = useMantineTheme();

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Group style={{ alignItems: 'center' }}>
        <Select
          style={selectStyle}
          required
          label="1. โครงการสอดคล้องกับปัจจัยและองค์ประกอบของห่วงโซ่คุณค่าของเป้าหมายแผนแม่บทย่อย (Y1) ที่เลือกมา และโครงการสามารถส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อย (Y1) และยุทธศาสตร์ชาติตามหลักการ XYZ (ระบุได้เฉพาะเลข 1 หรือ 0)"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFoundMessage="โปรดระบุคะแนน 0-1"
          data={["0", "1"]}
          {...form.getInputProps("a")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 1"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 1"
        >
          <Image src="q-criteria-description\pj2569-1.png" alt="criteria-69-1" />
          <Image src="q-criteria-description\pj2569-1-2.png" alt="criteria-69-1-2" />
        </ModalPopover>
      </Group>
      <Group>
        <Select
          style={selectStyle}
          required
          label="2.ความจำเป็นต้องมีโครงการ"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFoundMessage="โปรดระบุคะแนน 1-5"
          data={["0.875", "1.125", "1.375", "1.5", "1.625", "1.75", "1.875", "2", "2.125", "2.25", "2.375", "2.5", "2.625", "2.75", "2.875", "3", "3.125", "3.25", "3.375", "3.5", "3.625", "3.75", "3.875", "4", "4.125", "4.25", "4.375", "4.5", "4.75", "5"]}
          {...form.getInputProps("b")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 2"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 2"
        >
          <Image src="q-criteria-description\pj2569-2.png" alt="criteria-69-2" />
        </ModalPopover>
      </Group>

      <Group>
        <Select
          style={selectStyle}
          required
          label="3. โครงการเป็นการจัดทำบนฐานข้อมูลเชิงประจักษ์ (ไม่ใช่การกล่าวอ้าง)"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFoundMessage="โปรดระบุคะแนน 0-5"
          data={["0", "1", "2", "3", "4", "5"]}
          {...form.getInputProps("c")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 3"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 3"
        >
          <Image src="q-criteria-description\pj2569-3.png" alt="criteria-69-3-1" />
          <Image src="q-criteria-description\pj2569-3-2.png" alt="criteria-69-3-2" />
          
        </ModalPopover>
      </Group>
      <Group>
        <Select
          style={selectStyle}
          required
          label="4. โครงการมีวัตถุประสงค์ ผลผลิต ผลลัพธ์ และ กลุ่มเป้าหมายผู้รับประโยชน์ เป็นองค์ประกอบที่ชัดเจน สามารถส่งผลต่อการบรรลุเป้าหมายของโครงการอย่างเป็นรูปธรรม"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFoundMessage="โปรดระบุคะแนน 0-5"
          data={["0", "0.5", "1", "2", "3", "4", "5"]}
          {...form.getInputProps("d")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 4"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 4"
        >
          <Image src="q-criteria-description\pj2569-4.png" alt="criteria-69-4-1" />
          <Image src="q-criteria-description\pj2569-4-2.png" alt="criteria-69-4-2" />
        </ModalPopover>
      </Group>
      <Group style={{ width: '100%', marginBottom: '15px', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '16px', fontWeight: 'normal', display: 'block', marginBottom: '10px', width: '100%' }}>
            5. โครงการมีรายละเอียดแผนการดำเนินงานและกิจกรรมที่ชัดเจน เป็นไปได้จริง และ ส่งผลโดยตรงต่อการบรรลุเป้าหมายและวัตถุประสงค์ของโครงการอย่างแท้จริง
          </label>
          <Group pl="md" style={{ width: '100%', marginBottom: '15px' }}>
            <Select
              style={{ ...selectStyle, flex: 1 }}
              required
              label="5.1 มีการระบุกิจกรรม (ไม่ระบุ/ระบุ)"
              placeholder="โปรดเลือกคะแนน"
              searchable
              nothingFoundMessage="โปรดระบุคะแนน 0 หรือ 1"
              data={["0", "1"]}
              {...form.getInputProps("e")}
            />
          </Group>
          <Group pl="md" style={{ width: '100%', marginBottom: '15px' }}>
            <Select
              style={{ ...selectStyle, flex: 1 }}
              required
              label="5.2 ความชัดเจนของรายละเอียดของกิจกรรม (ไม่ชัดเจน/ชัดเจน)"
              placeholder="โปรดเลือกคะแนน"
              searchable
              nothingFoundMessage="โปรดระบุคะแนน 0 หรือ 1"
              data={["0", "1"]}
              {...form.getInputProps("f")}
            />
          </Group>
          <Group pl="md" style={{ width: '100%', marginBottom: '15px' }}>
            <Select
              style={{ ...selectStyle, flex: 1 }}
              required
              label="5.3 ความถูกต้องของการจัดลำดับกิจกรรม (ไม่ถูกต้อง/ถูกต้อง)"
              placeholder="โปรดเลือกคะแนน"
              searchable
              nothingFoundMessage="โปรดระบุคะแนน 0 หรือ 1"
              data={["0", "1"]}
              {...form.getInputProps("g")}
            />
          </Group>
          <Group pl="md" style={{ width: '100%', marginBottom: '15px' }}>
            <Select
              style={{ ...selectStyle, flex: 1 }}
              required
              label="5.4 ความเป็นไปได้จริงของกิจกรรมในการส่งผลต่อการบรรลุเป้าหมายของโครงการ (ผลผลิตและผลลัพธ์ของโครงการ) (เป็นไปไม่ได้/เป็นไปได้)"
              placeholder="โปรดเลือกคะแนน"
              searchable
              nothingFoundMessage="โปรดระบุคะแนน 0 หรือ 1"
              data={["0", "1"]}
              {...form.getInputProps("h")}
            />
          </Group>
        </div>
        <div style={{ marginLeft: '20px', alignSelf: 'center' }}>
          <ModalPopover
            title="เกณฑ์การให้คะแนน ข้อที่ 5"
            buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 5"
          >
            <Image src="q-criteria-description\pj2569-5.png" alt="criteria-69-5-1" />
            <Image src="q-criteria-description\pj2569-5-2.png" alt="criteria-69-5-2" />
          </ModalPopover>
        </div>
      </Group>
      <Group>
        <Select
          style={selectStyle}
          required
          label="6. โครงการมีตัวชี้วัดที่สามารถชี้และวัดความสำเร็จของเป้าหมายโครงการได้อย่างเป็นรูปธรรม"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFoundMessage="โปรดระบุคะแนน 0-5"
          data={["0", "1", "2", "3", "4", "5"]}
          {...form.getInputProps("j")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 6"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 6"
        >
          <Image src="q-criteria-description\pj2569-6.png" alt="criteria-69-6-1" />
          <Image src="q-criteria-description\pj2569-6-2.png" alt="criteria-69-6-2" />
        </ModalPopover>
      </Group>
      <Group>
        <Select
          style={selectStyle}
          required
          label="7. โครงการไม่เป็นการจัดตั้งกองทุนและคณะกรรมการ/การจัดตั้งหน่วยงาน/การปรับปรุง ซ่อมแซม ก่อสร้างอาคารสำนักงาน/การจัดซื้อครุภัณฑ์ หากเป็นต้องส่งผลต่อการบรรลุเป้าหมายแผนแม่บทย่อย (Y1) ที่เกี่ยวข้องอย่างชัดเจน"
          placeholder="โปรดเลือกคะแนน"
          searchable
          nothingFoundMessage="โปรดระบุคะแนน 0-5"
          data={["0", "0.25", "0.50", "0.75", "1", "1.25", "1.50", "1.75", "2", "2.25", "2.50", "2.75", "3", "3.25", "3.50", "3.75", "4", "4.25", "4.50", "4.75", "5"]}
          {...form.getInputProps("k")}
        />
        <ModalPopover
          title="เกณฑ์การให้คะแนน ข้อที่ 7"
          buttonLabel="รายละเอียดเกณฑ์การให้คะแนน ข้อที่ 7"
        >
          <Image src="q-criteria-description\pj2569-7.png" alt="criteria-69-7-1" />
        </ModalPopover>
      </Group>
      <Group justify="center" mt="md">
        <Button type="submit">แสดงผลคะแนน</Button>
      </Group>
    </form>
  );
};

export default DataPointForm;