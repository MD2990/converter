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
import React, { useCallback, useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";
import { Input } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
export default function Main() {
  const [value, setValue] = useState("1");
  const [value2, setValue2] = useState("2");
  const [input, setInput] = useState("1");
  const [results, setResults] = useState("1");

  // create a function to convert meters to kilometers
  const convertMetersToKilometers = (e) => {
    setResults(Number(e / 1000).toFixed(4));
  };

  // create a function to convert meters to centimeters
  const convertMetersToCentimeters = (e) => {
    setResults(Number(e * 100).toFixed(2));
  };

  // create a function to convert meters to millimeters
  const convertMetersToMillimeters = (e) => {
    setResults(Number(e * 1000).toFixed(2));
  };
  // create a function to convert meters to micrometers
  const convertMetersToMicrometers = (e) => {
    setResults(Number(e * 1000000).toFixed(2));
  };

  // create a function to convert meters to nanometers
  const convertMetersToNanometers = (e) => {
    setResults(Number(e * 1000000000).toFixed(2));
  };
  // create a function to convert meters to miles

  const convertMetersToMiles = (e) => {
    setResults(Number(e / 1609.344).toFixed(6));
  };
  // create a function to convert meters to yards
  const convertMetersToYards = (e) => {
    setResults(Number(e / 0.9144).toFixed(6));
  };
  // create a function to convert meters to foots
  const convertMetersToFeet = (e) => {
    setResults(Number(e / 0.3048).toFixed(6));
  };

  // create a function to convert meters to inches
  const convertMetersToInches = (e) => {
    setResults(Number(e / 0.0254).toFixed(6));
  };

  const getIndex = (a, b, e) => {
    e = Number(e) || 0;
    switch (a) {
      case "1":
        switch (b) {
          case "2":
            convertMetersToKilometers(e);

            break;
          case "3":
            convertMetersToCentimeters(e);
            break;
          case "4":
            convertMetersToMillimeters(e);
            break;
          case "5":
            convertMetersToMicrometers(e);
            break;
          case "6":
            convertMetersToNanometers(e);
            break;
          case "7":
            convertMetersToMiles(e);
            break;
          case "8":
            convertMetersToYards(e);
            break;
          case "9":
            convertMetersToFeet(e);
            break;
          case "10":
            convertMetersToInches(e);

            break;

          default:
            setResults("Unknown");
            break;
        }
        break;
      default:
        setResults("Unknown Main");
        break;
    }
  };
  const handleChange = (e) => {
    setValue(e);
    getIndex(e, value2, input);
  };
  const handleChange2 = (e) => {
    setValue2(e);
    getIndex(value, e, input);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    getIndex(value, value2, e.target.value);
  };
  const GetData = () => {
    
    const data = [
      {
        name: Meter,
         id:"Meter",
         value="Meter",



        name: Kilometer,
        id:'Kilometer',
        value:'Kilometer',

        name: Centimeter,
        id:'Centimeter',
        value:'Centimeter',

        name: Millimeter,
        id:'Millimeter',
        value:'Millimeter',

        name: Micrometer,
        id:'Millimeter',
        value:'Millimeter',

        name: Nanometer,
        id:'Nanometer',
        value:'Nanometer',


        name: Mile,
        id:'Mile',
        value:'Mile',

        name: Yard,
        id:'Yard',
        value:'Yard',

        name: Foot,
        id:'Foot',
        value:'Foot',

        name: Inch,
        id:'Inch',
        value:'Inch'
      },
    ];
    return (<>
          {
              data.map(d=>      <Radio key={d.id}  id={d.id} value={d.value}>
                  {d.name}
                </Radio>)

          }
    </>)};
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
              <GetData/>
              </Stack>{" "}
            </RadioGroup>
          </WrapItem>

          <Input
            type="number"
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
                {value !== "1" && (
                  <Radio id="Length12" value="1">
                    Meter
                  </Radio>
                )}

               <GetData/>
              </Stack>{" "}
            </RadioGroup>
          </WrapItem>

          <Input placeholder="Search" disabled value={results} />
        </Wrap>
      </VStack>
    </>
  );
}
