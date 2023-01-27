// import Head from "next/head";
// import Image from "next/image";
import React from "react";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
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
import Navbar from "@/component/navbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return <Navbar />;
}
