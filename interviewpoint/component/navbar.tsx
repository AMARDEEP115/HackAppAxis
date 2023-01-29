
import React from "react";
import photo from "../logo.jpg";
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
import Link from "next/link";
import Image from "next/image";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <Flex justifyContent={"space-between"} p="20px" h="70px" bgColor="blue.600" flexWrap={"wrap"} mb="70px">
      <Box fontSize="20px" w="200px" h="120px" border="5px solid" borderColor="blue.600" mt="-20px">
        <Link href={"/"}> <Image src={photo} alt="logo"/> </Link>
      </Box>
      <Box display={"flex"} gap="25px" justifyContent={"center"} fontSize="18px" fontWeight="bold" color="white">
        <Link href={"/"} className={navBarStyle.headIng}> Home </Link>
        <Link href={"/dsapractice"} className={navBarStyle.headIng}> DSA Practice </Link>
        <Link href={"/tutorial"} className={navBarStyle.headIng}> Tutorial </Link>
        <Link href={"/about"} className={navBarStyle.headIng}> About </Link>
        <Login/>
        {/* {localStorage.getItem("token")==null && <Login/>}
        {localStorage.getItem("token")!==null && <Button>Logout</Button>} */}
        <Register/>
      </Box>
    </Flex>
  );
};

export default Navbar;
