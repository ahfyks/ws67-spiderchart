import {
  AppShell,
  Burger,
  Box,
  Image,
  Text,
  useMantineTheme,
  Flex
} from "@mantine/core";
import { ReactNode, useState } from "react";
import { useMantineColorScheme } from '@mantine/core';

type Props = {
  children?: ReactNode;
};

const CustomAppShell = ({ children }: Props) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding='md'
      header={{
        height: 'auto',
      }}
      footer={{
        height: 40,
      }}
      styles={(theme) => ({
        main: {
          backgroundColor:
            colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Box component="header" p="xs">
        <Flex
          align="center"
          style={{ height: "100%" }}>
          <Image width={80} height={80} src='nesdc-logo.png' />
          <Text fw={700}>
            Spider Chart หลักเกณฑ์การประเมินโครงการ เพื่อขับเคลื่อนการบรรลุเป้าหมายตามยุทธศาสตร์ชาติประจำปี 2568
          </Text>
        </Flex>
      </Box>
      {children}
      <Box component="footer" p="xs">
        <Flex
          align="center"
          style={{ height: "100%" }}>
          <Image width={20} height={20} src='nesdc-logo.png' />
          <Text size="xs" fw={500}>
            สำนักงานสภาพัฒนาการเศรษฐกิจและสังคมแห่งชาติ
            <Text size="xs" fw={500}>
              Office of the National Economic and Social Development Council
            </Text>
          </Text>
        </Flex>
      </Box>
    </AppShell>
  );
};

export default CustomAppShell;