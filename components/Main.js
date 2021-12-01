import { Center, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import React from "react";
import MyRadioGroup from "./MyRadioGroup";

export default function Main() {


  return (
    <Center m="4" p="4">
      <Wrap
        justify="center"
        align="center"
        spacing="8"
        p="4"
        m="4"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        alignSelf="center"
      >
        <WrapItem  >
          <Text
            userSelect="none"
            textShadow="0px 0px 10px lightblue"
            fontWeight="bold"
            fontFamily="sans"
            color="blue.500"
            fontSize={["lg", "2xl", "5xl", "6xl"]}
            textAlign="center"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="pre-wrap"
          >
            Welcome to the converter{"\n"}
            <Text
              fontWeight="thin"
              fontFamily="arial"
              fontSize={["xs", "sm", "md", "lg"]}
              as="span"
            >
              Please select the unit you want to convert
            </Text>
          </Text>
        </WrapItem>

        <MyRadioGroup />
      </Wrap>
    </Center>
  );
}
