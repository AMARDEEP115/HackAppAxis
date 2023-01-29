import React, { useState } from "react";
import navBarStyle from "../AllCss/Navbar.module.css";
import { useRouter } from 'next/navigation';
import Router from 'next/router';
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
let user = {
  email: "",
  password: "",
};


const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [userDetails, setUserDetails] = useState(user);
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const hanldeSubmit = async () => {
    console.log(userDetails);

    if (!userDetails.password || !userDetails.email) {
      return alert("plc fill correctly");
    }
    // retrun;
    let res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        ...userDetails,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    let data = await res.json();
    console.log(data);

    if (data.OK === "OK") {
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("ipName", JSON.stringify(data.messg));
      alert("Login succesfull");
      return Router.reload();
    } else {
      return alert("User not found");
    }
  };
  return (
    <>
      <Button
        mt="-7px"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        className={navBarStyle.headIngChak}
      >
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Login</DrawerHeader>

          <DrawerBody>
            <h1 className={navStlye.entries}>Email</h1>
            <Input
              placeholder="Type here..."
              onChange={handleChange}
              name="email"
              type="email"
            />
            <h1 className={navStlye.entries}>Password</h1>
            <Input
              placeholder="Type here..."
              type="password"
              onChange={handleChange}
              name="password"
            />
          </DrawerBody>

          <DrawerFooter>
            <Button
              colorScheme="blue"
              color="white"
              mr="40px"
              onClick={() => {
                onClose;
                hanldeSubmit();
              }}
            >
              SUMBIT
            </Button>
            <Button colorScheme="red" color="white" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Login;
