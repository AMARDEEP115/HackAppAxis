import React from "react";
import navBarStyle from "../AllCss/Navbar.module.css";
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Input,
    // Link,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import navStlye from "../AllCss/Login.module.css";

const Register=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)
    return (
        <>
          <Button onClick={onOpen} colorScheme="teal" fontWeight="bold" h="40px" mt="-7px" className={navBarStyle.headIngChak}>Register</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>LOGIN</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  <form>
                    <h1 className={navStlye.entries}>Email</h1>
                    <Input placeholder='Type Email...' type="email"/>
                    <h1 className={navStlye.entries}>Password</h1>
                    <Input placeholder='Type here...' type="password"/>
                  </form>
                </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>Submit</Button>
                {/* <Button variant='ghost'>Secondary Action</Button> */}
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
    )
};

export default Register;