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
  const [results, setResults] = useState(0);

  const getIndex = (a, b) => {
    //create an array of all units
    const units = [
      "meters",
      "feet",
      "inches",
      "centimeters",
      "kilometers",
      "miles",
      "yards",
      "nanometers",
      "micrometers",
      "millimeters",
    ];
    const units2 = [
      "meters",
      "feet",
      "inches",
      "centimeters",
      "kilometers",
      "miles",
      "yards",
      "nanometers",
      "micrometers",
      "millimeters",
    ];
    if (a == 1 && b == 1)
      // if both are the same return nothing
      setResults(111);
    if (a == 1 && b == 2) {
      setResults(value / 1000);
    }

    // create a new function that converts a meter to kilometer

    // create a new function that converts a kilometer to meter
    const convertKilometerToMeter = (kilometer) => {
      return kilometer * 1000;
    };
    // create a new function that converts a kilometer to mile
    const convertKilometerToMile = (kilometer) => {
      return kilometer / 1.609;
    };
    // create a new function that converts a mile to kilometer
    const convertMileToKilometer = (mile) => {
      return mile * 1.609;
    };
    // create a new function that converts a kilometer to feet
    const convertKilometerToFeet = (kilometer) => {
      return kilometer * 3280.84;
    };
    // create a new function that converts a feet to kilometer
    const convertFeetToKilometer = (feet) => {
      return feet / 3280.84;
    };
    // create a new function that converts a kilometer to inch
    const convertKilometerToInch = (kilometer) => {
      return kilometer * 39370.1;
    };
    // create a new function that converts a inch to kilometer
    const convertInchToKilometer = (inch) => {
      return inch / 39370.1;
    };
    // create a new function that converts a kilometer to yard
    const convertKilometerToYard = (kilometer) => {
      return kilometer * 1093.61;
    };
    // create a new function that converts a yard to kilometer
    const convertYardToKilometer = (yard) => {
      return yard / 1093.61;
    };
    // create a new function that converts a kilometer to centimeter
    const convertKilometerToCentimeter = (kilometer) => {
      return kilometer * 100000;
    };
    // create a new function that converts a centimeter to kilometer
    const convertCentimeterToKilometer = (centimeter) => {
      return centimeter / 100000;
    };
    // create a new function that converts a kilometer to millimeter
    const convertKilometerToMillimeter = (kilometer) => {
      return kilometer * 1000000;
    };
    // create a new function that converts a millimeter to kilometer
    const convertMillimeterToKilometer = (millimeter) => {
      return millimeter / 1000000;
    };
    // create a new function that converts a kilometer to micrometer
    const convertKilometerToMicrometer = (kilometer) => {
      return kilometer * 1000000000;
    };
    // create a new function that converts a micrometer to kilometer
    const convertMicrometerToKilometer = (micrometer) => {
      return micrometer / 1000000000;
    };
    // create a new function that converts a kilometer to nanometer
    const convertKilometerToNanometer = (kilometer) => {
      return kilometer * 1000000000000;
    };
    // create a new function that converts a nanometer to kilometer
    const convertNanometerToKilometer = (nanometer) => {
      return nanometer / 1000000000000;
    };
  };
  const handleChange = (e) => {
    setValue(e);
    console.log(getIndex(value, value2, value, results));
    //setCalc(e.target.value);
    /*   switch (getIndex(Number(e), Number(value2))) {
      case getIndex(1, 1):
        //setResults(Number(e) * 100);
        console.log("meter");
        break;
      case 2:
        //setResults(Number(e) * 100);
        console.log("results");
        break;

      default:
        break;
    }

    setCalc(e); */

    // setValue(e);
  };
  const handleChange2 = (e) => {
    setValue2(e);
  };

  const handleInputChange = (e) => setInput(Number(e.target.value));

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
        <Wrap justify="center" align="center" spacing={[1, 2, 4, 8]}>
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
              onChange={(e) => handleChange2(e)}
            >
              <Stack
                direction={["column", "row"]}
                spacing={[1, 2, 4, 5]}
                divider={<StackDivider borderColor="gray.200" />}
              >
                <Radio id="Length12" value="1">
                  Meter
                </Radio>
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
