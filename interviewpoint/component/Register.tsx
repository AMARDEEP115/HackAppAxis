import React, { useState } from "react";
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
} from "@chakra-ui/react";
import navStlye from "../AllCss/Login.module.css";

let user = {
  Name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [userDetails, setUserDetails] = useState(user);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const hanldeSubmit = async () => {
    console.log(userDetails);

    if (userDetails.password !== userDetails.confirmPassword) {
      return alert("plc check your password");
    }

    let res = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        ...userDetails,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    let data = await res.json();
    if (data.OK === "OK") {
      return alert("user registered");
    } else {
      return alert("something went wrong");
    }
    console.log(data);
  };
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="teal"
        fontWeight="bold"
        h="40px"
        mt="-7px"
        className={navBarStyle.headIngChak}
      >
        Register
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <h1 className={navStlye.entries}>Name</h1>
              <Input
                placeholder="Type Name..."
                type="text"
                name="Name"
                onChange={handleChange}
              />

              <h1 className={navStlye.entries}>Email</h1>
              <Input
                placeholder="Type Email..."
                type="email"
                name="email"
                onChange={handleChange}
              />
              <h1 className={navStlye.entries}>Password</h1>
              <Input
                placeholder="Type here..."
                name="password"
                type="password"
                onChange={handleChange}
              />

              <h1 className={navStlye.entries}>Confirm Password</h1>
              <Input
                placeholder="Type here..."
                type="password"
                name="confirmPassword"
                onChange={handleChange}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose;
                hanldeSubmit();
              }}
            >
              Submit
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
