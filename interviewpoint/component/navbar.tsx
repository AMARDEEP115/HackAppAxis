import React from "react";
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
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex justifyContent={"space-between"} p="20px" flexWrap={"wrap"}>
      <Box fontSize="20px">
        <Link href={"/"}> Interview Point </Link>
      </Box>
      <Box display={"flex"} gap="15px" justifyContent={"center"}>
        <Link href={"/"}> Home </Link>
        <Link href={"/dsapractice"}> DSA Practice </Link>
        <Link href={"/tutorial"}> Tutorial </Link>
        <Link href={"/about"}> About </Link>

        <>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen} h="30px">
            Register
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
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." />
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </>
      </Box>
    </Flex>
  );
};

export default Navbar;
