
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
import { useRouter } from 'next/router'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const router = useRouter()
  let [cn,setCn]=React.useState(0);
  let [token,setToken]=React.useState("false");
  let [name,setName]=React.useState("false");
  React.useEffect(()=>{
    let tok:string | false=localStorage.getItem("token") || "false";
    let nam:string | false=localStorage.getItem("ipName") || "false";
    setToken(tok);
    setName(nam);
  },[cn]);
  const handleDsa=()=>{
    if(token!=="false"){
      router.push("/dsapractice")
    } else {
      alert("Please Login or Signup");
    }
  };
  const handleTut=()=>{
    if(token!=="false"){
      router.push("/tutorial")
    } else {
      alert("Please Login or Signup");
    }
  };
  return (
    <Flex justifyContent={"space-between"} p="20px" h="70px" bgColor="blue.600" flexWrap={"wrap"} mb="70px">
      <Box fontSize="20px" w="200px" h="120px" border="5px solid" borderColor="blue.600" mt="-20px">
        <Link href={"/"}> <Image src={photo} alt="logo"/> </Link>
      </Box>
      <Box display={"flex"} gap="25px" justifyContent={"center"} fontSize="18px" fontWeight="bold" color="white">
        <Link href={"/"} className={navBarStyle.headIng}> Home </Link>
        <button className={navBarStyle.headIngBtn} onClick={handleDsa}> DSA Practice </button>
        <button className={navBarStyle.headIngBtn} onClick={handleTut}> Tutorial </button>
        <Link href={"/about"} className={navBarStyle.headIng}> About </Link>
        {token=="false" && <Login/>}
        {token!=="false" && <Link href={"/"}><Button
        mt="-7px"
        colorScheme="teal"
        className={navBarStyle.headIngChak}
        onClick={()=>{
          localStorage.removeItem("token");
          localStorage.removeItem("ipName");
          setCn(prev=>prev+1);
          
        }}
      >
        Logout
      </Button></Link>}
        {/* {localStorage.getItem("token")==null && <Login/>}
        {localStorage.getItem("token")!==null && <Button>Logout</Button>} */}
        {name=="false" && <Register/>}
        {name!=="false" && <Button
        mt="-7px"
        colorScheme="teal"
        className={navBarStyle.headIngChak}
      >
        {name}
      </Button>}
      </Box>
    </Flex>
  );
};

export default Navbar;
