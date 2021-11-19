import {
  Center,
  HStack,
  Stack,
  StackDivider,
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
  const [value2, setValue2] = useState("1");
  const [input, setInput] = useState("1");
  const [results, setResults] = useState("0");

  const getIndex = (a, b) => {
    switch (a) {
      case "1":
        if (b == 2) setResults("meter to kilometer");
        if (b == 3) setResults(" 1 - 3");
        if (b == 4) setResults(" 1 - 4");
        if (b == 5) setResults(" 1 - 5");
        if (b == 6) setResults(" 1 - 6");
        if (b == 7) setResults(" 1 - 7");
        if (b == 8) setResults(" 1 - 8");
        if (b == 9) setResults(" 1 - 9");
        if (b == 10) setResults(" 1 - 10");
        if (b == 11) setResults(" 1 - 11");
        break;

      default:
        break;
    }
  };
  const handleChange = (e) => {
    setValue(e);
    getIndex(e, value2);
  };
  const handleChange2 = (e) => {
    setValue2(e);
    getIndex(value, e);
  };

  const handleInputChange = (e) => {
    getIndex(value, value2);
    setInput(Number(e.target.value));
  };

  return (
    <>
      <Wrap justify="center" mt="10%">
        <WrapItem>
          {" "}
          <Button leftIcon={<MdBuild />} colorScheme="pink" variant="solid">
            Length
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
        <Wrap align="flex-start" justify="flex-start" spacing={[1, 2, 4, 8]}>
          <WrapItem>
            <RadioGroup
              size="sm"
              name="radio"
              value={value}
              onChange={handleChange}
            >
              <Stack
                direction={["column", "row"]}
                spacing={[1, 2, 4, 5]}
                divider={<StackDivider borderColor="gray.200" />}
              >
                <Radio id="Length1" value="1">
                  Meter
                </Radio>
                <Radio id="Length2" value="2">
                  Kilometer
                </Radio>
                <Radio id="Length3" value="3">
                  Centimeter
                </Radio>
                <Radio id="Length4" value="4">
                  Millimeter
                </Radio>
                <Radio id="Length5" value="5">
                  Micrometer
                </Radio>
                <Radio id="Length6" value="6">
                  Nanometer
                </Radio>
                <Radio id="Length7" value="7">
                  Mile
                </Radio>
                <Radio id="Length8" value="8">
                  Yard
                </Radio>
                <Radio id="Length9" value="9">
                  Foot
                </Radio>
                <Radio id="Length10" value="10">
                  Inch
                </Radio>
                <Radio id="Length11" value="11">
                  Light Year
                </Radio>
              </Stack>{" "}
            </RadioGroup>
          </WrapItem>

          <Input
            name="input"
            value={input}
            placeholder="Convert"
            onChange={handleInputChange}
          />
          <WrapItem>
            <RadioGroup
              size="sm"
              name="radio"
              value={value2}
              onChange={handleChange2}
            >
              <Stack
                direction={["column", "row"]}
                spacing={[1, 2, 4, 5]}
                divider={<StackDivider borderColor="gray.200" />}
              >
                {value != 1 && (
                  <Radio id="Length12" value="1">
                    Meter
                  </Radio>
                )}
                <Radio id="Length13" value="2">
                  Kilometer
                </Radio>
                <Radio id="Length14" value="3">
                  Centimeter
                </Radio>
                <Radio id="Length15" value="4">
                  Millimeter
                </Radio>
                <Radio id="Length16" value="5">
                  Micrometer
                </Radio>
                <Radio id="Length17" value="6">
                  Nanometer
                </Radio>
                <Radio id="Length18" value="7">
                  Mile
                </Radio>
                <Radio id="Length19" value="8">
                  Yard
                </Radio>
                <Radio id="Length20" value="9">
                  Foot
                </Radio>
                <Radio id="Length21" value="10">
                  Inch
                </Radio>
                <Radio id="Length22" value="11">
                  Light Year
                </Radio>
              </Stack>{" "}
            </RadioGroup>
          </WrapItem>

          <Input placeholder="Search" disabled value={results} />
        </Wrap>
      </VStack>
    </>
  );
}
