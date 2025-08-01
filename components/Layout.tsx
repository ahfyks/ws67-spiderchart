import '@mantine/core/styles.css';
import {
  AppShell,
  Box,
  Image,
  Text,
  useMantineTheme,
  Flex,
  Button
} from "@mantine/core";
import { ReactNode, useState } from "react";
import { useMantineColorScheme } from '@mantine/core';

type Props = {
  children?: ReactNode;
};

const CustomAppShell = ({ children }: Props) => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding='md'
      header={{
        height: 'auto'
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
      <Box component="header" p="xs" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Flex align="center" style={{ height: "100%" }}>
          <Image width={80} height={80} src='nesdc-logo.png' />
          <Text fw={700}>
            Spider Chart หลักเกณฑ์การประเมินโครงการ เพื่อขับเคลื่อนการบรรลุเป้าหมายตามยุทธศาสตร์ชาติ ประจำปีงบประมาณ พ.ศ. 2570
          </Text>
        </Flex>
        <Button 
          onClick={() => toggleColorScheme()} 
          variant="filled"
          style={{ 
            marginLeft: 'auto', 
            transition: 'background-color 0.3s ease, transform 0.3s ease', 
            transform: colorScheme === 'dark' ? 'translateY(0)' : 'translateY(-5px)',
            backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            color: colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[0]
          }}
        >
          {colorScheme === 'dark' ? '🌞' : '🌙'}
        </Button>
      </Box>
      {children}
      <Box component="footer" p="xs" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Flex align="center" style={{ height: "100%" }}>
          <Image width={20} height={20} src='nesdc-logo.png' />
          <Text size="xs" fw={500}>
            สำนักงานสภาพัฒนาการเศรษฐกิจและสังคมแห่งชาติ
          </Text>
          <Text size="xs" fw={500}>
            Office of the National Economic and Social Development Council
          </Text>
        </Flex>
        <Text size="xs" style={{ textAlign: 'right' }}>
          made and sculpted by <Text component="a" href="https://www.linkedin.com/in/dujnapa-fha" style={{ color: theme.colors.blue[5] }}>☁️</Text> 
        </Text>
      </Box>
    </AppShell>
  );
};

export default CustomAppShell;
