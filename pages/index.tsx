//---------------------------------

import { useState } from "react";
import type { NextPage } from "next";
import { Box, Divider, Group, Text, useMantineTheme } from "@mantine/core";


import CustomAppShell from "../components/Layout";
import CustomRadarChart from "../components/CustomRadarChart";
import DataPointForm from "../components/DataPointForm";
import DataPointFormValues from "../types/DataPointFormValues";
import { ResponsiveFlexWrapper } from "../components/ResponsiveFlexWrapper";
import { multiplyWeight } from "../components/SumData";

const Home: NextPage = () => {
  const [formValues, setFormValues] = useState<number[]>([]);
  const handleFormSubmit = (values: DataPointFormValues) => {
    //console.log(values);
    setFormValues(Object.values(values));
  };
  const theme = useMantineTheme();

  return (
    <CustomAppShell>
      <Text size="sm" fw={5}>
        รายละเอียดเกี่ยวกับการจัดทำโครงการเพื่อขับเคลื่อนการบรรลุเป้าหมายตามยุทธศาสตร์ชาติ
        ประจำปีงบประมาณ พ.ศ. 2570 สามารถดูได้ที่
        <Text
          variant="link"
          component="a"
          href="http://nscr.nesdc.go.th/project2569/"
          style={{ textDecoration: 'underline', color: theme.colors.blue[5] }}
        >
          {" "}
          https://www.nesdc.go.th/nscr/project70/
        </Text>
      </Text>
      <div
        style={{
          width: "100%",
          height: "2px",
          backgroundColor: theme.colors.gray[8],
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
      </div>
      <Group style={{ height: "100%" }}>
        <Box style={{ flex: 1, padding: theme.spacing.md }}>
          <DataPointForm handleFormSubmit={handleFormSubmit} />
        </Box>
        <Box style={{ flex: 1, padding: theme.spacing.md }}>
          <div style={{ width: '100%', height: '100%', maxWidth: '600px', margin: '0 auto' }}>
           <CustomRadarChart data={formValues} />
          </div>
          <Text style={{textAlign:'center'}} fw={500}>
            ผลคะแนนของโครงการ {" "}
          </Text>
          <Text style={{textAlign:'center'}} fw={700}>{multiplyWeight(formValues)}
            /100
          </Text>
        </Box>
      </Group>
    </CustomAppShell>
  );
};

export default Home;

//----------------------------------------------------------
//underconstruction page code

/*
import styled, { keyframes } from 'styled-components';
//import nesdcLogo from 'public/Footer-NESDC.png'; // Adjust the path as necessary

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
`;

const UnderConstructionText = styled.div`
  font-size: 60px;
  font-weight: bold;
  animation: ${slideIn} 1s ease-out;
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 5px;
`;

const IndexPage: NextPage = () => {
  return (
    <div>

      <StyledContainer>
        <UnderConstructionText>อยู่ระหว่างดำเนินการ</UnderConstructionText>
        <InfoContainer>
          <div>อยู่ระหว่างการปรับเงื่อนไขของหลักเกณฑ์การประเมินโครงการเพื่อขับเคลื่อนการบรรลุเป้าหมายตามยุทธศาสตร์ชาติ ประจำปีงบประมาณ พ.ศ. 2569</div>
          <div>
            รายละเอียดเพิ่มเติมเกี่ยวกับโครงการเพื่อขับเคลื่อนฯ
            <Link href="http://nscr.nesdc.go.th/project2569/">http://nscr.nesdc.go.th/project2569/</Link>
          </div>
          <div>หากมีข้อสงสัยเพิ่มเติม โปรดติดต่อที่</div>
          <div>
            <Link href="https://line.me/ti/p/@nscr" target="_blank"> LINE Official ยุทธศาสตร์ชาติ</Link> |
            <Link href="mailto:nscr@nesdc.go.th">nscr@nesdc.go.th</Link> |
            โทร 0-2280-4085 ต่อ 6226, 6225, 6233, 6234
          </div>
        </InfoContainer>
      </StyledContainer>
    </div>
  );
};

export default IndexPage;
*/
