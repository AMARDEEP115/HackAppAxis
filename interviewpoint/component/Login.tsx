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
import navStlye from "../AllCss/Login.module.css";

const Login=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<HTMLButtonElement>(null)
    return (
        <>
      <Button mt="-7px" ref={btnRef} colorScheme='teal' onClick={onOpen} className={navBarStyle.headIngChak}>
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <h1 className={navStlye.entries}>Email</h1>
            <Input placeholder='Type here...' type="email"/>
            <h1 className={navStlye.entries}>Password</h1>
            <Input placeholder='Type here...' type="password"/>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme='blue' color="white" mr="40px" onClick={onClose}>SUMBIT</Button>
            <Button colorScheme='red' color="white" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    )
};

export default Login;