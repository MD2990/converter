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
  const [calc, setCalc] = useState('1');
  const [results, setResults] = useState(0);

  const handleChange = (e) => {


    //setCalc(e.target.value);
    switch (Number(e)) {
      case 1 :
        //setResults(Number(e) * 100);
        console.log('meter');
        break;
      case 2 :
        //setResults(Number(e) * 100);
        console.log(results);
        break;

      default:
        setResults(Number(e) * 500);
        break;
    } 

     setCalc( e );

   // setValue(e);
  };
  const handleChange2 = (e) => {
    setValue2(e);
    console.log(e);
  };


  const handleInputChange = (e) => setResults( Number(e.target.value)*100);

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
              value={calc}
              onChange={ handleChange}
            >
              <Stack
                direction={["column", "row"]}
                spacing={[1, 2, 4, 5]}
                divider={<StackDivider borderColor="gray.200" />}
              >
                <Radio id="Length1" value='1' >
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
            name="calc"
            placeholder="Search"
          
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
