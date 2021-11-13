import {
  Center,
  HStack,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/layout";
import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";
import { Input } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
export default function Main() {
  const [value, setValue] = useState("1");

  const handleChange = (e) => {
    setValue(e);
    console.log(e);
  };

  return (
    <>
      <Wrap justify="center" mt="10%">
        <WrapItem>
          {" "}
          <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
            Settings
          </Button>
        </WrapItem>

        <WrapItem>
          {" "}
          <Button
            leftIcon={<MdBuild />}
            mt=""
            colorScheme="pink"
            variant="solid"
          >
            Settings
          </Button>
        </WrapItem>

        <WrapItem>
          <Button rightIcon={<MdCall />} colorScheme="blue" variant="outline">
            Call us
          </Button>
        </WrapItem>
      </Wrap>

      <VStack
        justify="center"
        mx={[1, 3, 8, 14]}
        p={[1, 2, 4, 8]}
        align="center"
      >
        <Wrap justify="center" align="center" spacing={[1, 2, 4, 8]}>
          <WrapItem>
            <RadioGroup
              name="radio"
              value={value}
              onChange={(e) => handleChange(e)}
            >
                <Stack direction="row" spacing={[1, 2, 4, 8]}>
              <Radio id="1" value="1">
                First
              </Radio>
              <Radio id="2" value="2">
                Second
              </Radio>
              <Radio id="3" value="3">
                Third
              </Radio>
                </Stack>
            </RadioGroup>
          </WrapItem>

          <Text>Swap</Text>

          <Input placeholder="Search" />
        </Wrap>
      </VStack>
    </>
  );
}
