import { Children, FC, ReactNode, useState } from "react";
import { Image, Modal, Button, Group, Tooltip } from "@mantine/core";

interface IModalPopover {
    title: string;
    children: ReactNode
    buttonLabel: string;
}


const ModalPopover:FC<IModalPopover> =({ title, children, buttonLabel })=> {
  const [modalOpened1, setModalOpened1] = useState(false);
  
  return (
    <>
  <Modal
        id='1'
        opened={modalOpened1}
        onClose={() => setModalOpened1(false)}
        title={title}
        size="full"
        styles={{
            close:{
                width: "40",
                height: "40",
                color: 'red'
            }
        }}
      >
        {/* <Image src="q-criteria-description\q1-description.png" alt="q1" /> */}
        {children}
      </Modal>
      <Group justify="center">
        <Tooltip label={buttonLabel} withArrow>
          <Button onClick={() => setModalOpened1(true)} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35}} size="xs">?</Button>
        </Tooltip>
      </Group>
    </>

  );
}
export default ModalPopover;