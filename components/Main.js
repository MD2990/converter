import { Stack, StackDivider, VStack, Wrap, WrapItem } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import { MdBuild, MdCall } from "react-icons/md";
import { Input } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";

export default function Main() {
  const [value, setValue] = useState("Meter");
  const [value2, setValue2] = useState("Meter");
  const [input, setInput] = useState("1");
  const [results, setResults] = useState("1");

  const getIndex = (a, b, e) => {
    e = Number(e) || 0;
    switch (a) {
      case "Meter":
        fromMeter(b, e);
        break;
      case "Kilometer":
        fromKilometer(b, e);
        break;

      default:
        setResults(0);
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
        name: "Meter",
        id: "1",
        value: "Meter",
      },
      {
        name: "Kilometer",
        id: "2",
        value: "Kilometer",
      },
      {
        name: "Centimeter",
        id: "3",
        value: "Centimeter",
      },
      {
        name: "Millimeter",
        id: "4",
        value: "Millimeter",
      },
      {
        name: "Micrometer",
        id: "5",
        value: "Micrometer",
      },
      {
        name: "Nanometer",
        id: "6",
        value: "Nanometer",
      },
      {
        name: "Mile",
        id: "7",
        value: "Mile",
      },
      {
        name: "Yard",
        id: "8",
        value: "Yard",
      },
      {
        name: "Feet",
        id: "9",
        value: "Feet",
      },
      {
        name: "Inch",
        id: "10",
        value: "Inch",
      },
    ];

    return (
      <Stack
        direction={["column", "row"]}
        spacing={[1, 2, 4, 5]}
        divider={<StackDivider borderColor="gray.200" />}
      >
        {data.map((d) => (
          <Radio key={d.id} value={d.value}>
            {d.name}
          </Radio>
        ))}
      </Stack>
    );
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
              id="radio-group-1"
              size="sm"
              name="radio"
              value={value}
              onChange={handleChange}
            >
              <GetData />
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
              id="radio-group-2"
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
                <GetData />
              </Stack>{" "}
            </RadioGroup>
          </WrapItem>

          <Input placeholder="Search" disabled value={results} />
        </Wrap>
      </VStack>
    </>
  );

  function fromMeter(b, e) {
    // create a function to convert meters to kilometers
    const convertMetersToKilometers = () => {
      setResults(Number(e / 1000).toFixed(4));
    };

    // create a function to convert meters to centimeters
    const convertMetersToCentimeters = () => {
      setResults(Number(e * 100).toFixed(2));
    };

    // create a function to convert meters to millimeters
    const convertMetersToMillimeters = () => {
      setResults(Number(e * 1000).toFixed(2));
    };
    // create a function to convert meters to micrometers
    const convertMetersToMicrometers = () => {
      setResults(Number(e * 1000000).toFixed(2));
    };

    // create a function to convert meters to nanometers
    const convertMetersToNanometers = () => {
      setResults(Number(e * 1000000000).toFixed(2));
    };
    // create a function to convert meters to miles

    const convertMetersToMiles = () => {
      setResults(Number(e / 1609.344).toFixed(6));
    };
    // create a function to convert meters to yards
    const convertMetersToYards = () => {
      setResults(Number(e / 0.9144).toFixed(6));
    };
    // create a function to convert meters to Feet
    const convertMetersToFeet = () => {
      setResults(Number(e / 0.3048).toFixed(6));
    };

    // create a function to convert meters to inches
    const convertMetersToInches = () => {
      setResults(Number(e / 0.0254).toFixed(6));
    };

    switch (b) {
      case "Meter":
        setResults("Convert To ...");
        break;
      case "Kilometer":
        convertMetersToKilometers(e);

        break;
      case "Centimeter":
        convertMetersToCentimeters(e);
        break;
      case "Millimeter":
        convertMetersToMillimeters(e);
        break;
      case "Micrometer":
        convertMetersToMicrometers(e);
        break;
      case "Nanometer":
        convertMetersToNanometers(e);
        break;
      case "Mile":
        convertMetersToMiles(e);
        break;
      case "Yard":
        convertMetersToYards(e);
        break;
      case "Feet":
        convertMetersToFeet(e);
        break;
      case "Inch":
        convertMetersToInches(e);

        break;

      default:
        setResults(0);
        break;
    }
  }
  function fromKilometer(b, e) {
    // create a function to convert kilometers to meters
    const convertKilometersToMeters = () => {
      setResults(Number(e * 1000).toFixed(2));
    };
    // create a function to convert kilometers to centimeters
    const convertKilometersToCentimeters = () => {
      setResults(Number(e * 100000).toFixed(2));
    };
    // create a function to convert kilometers to millimeters
    const convertKilometersToMillimeters = () => {
      setResults(Number(e * 1000000).toFixed(2));
    };
    // create a function to convert kilometers to micrometers
    const convertKilometersToMicrometers = () => {
      setResults(Number(e * 1000000000).toFixed(2));
    };
    // create a function to convert kilometers to nanometers
    const convertKilometersToNanometers = () => {
      setResults(Number(e * 1000000000000).toFixed(2));
    };
    // create a function to convert kilometers to miles
    const convertKilometersToMiles = () => {
      setResults(Number(e / 1.60934).toFixed(6));
    };
    // create a function to convert kilometers to yards
    const convertKilometersToYards = () => {
      setResults(Number(e / 0.0009144).toFixed(4));
    };
    // create a function to convert kilometers to Feet
    const convertKilometersToFeet = () => {
      setResults(Number(e / 0.0003048).toFixed(3));
    };
    // create a function to convert kilometers to inches
    const convertKilometersToInches = () => {
      setResults(Number(e * 39370).toFixed(3));
    };

    // create a function to convert kilometers to inches

    switch (b) {
      case "Kilometer":
        setResults("Convert To ...");
        break;
      case "Meter":
        convertKilometersToMeters(e);
        break;
      case "Centimeter":
        convertKilometersToCentimeters(e);
        break;
      case "Millimeter":
        convertKilometersToMillimeters(e);
        break;
      case "Micrometer":
        convertKilometersToMicrometers(e);
        break;
      case "Nanometer":
        convertKilometersToNanometers(e);
        break;
      case "Mile":
        convertKilometersToMiles(e);
        break;
      case "Yard":
        convertKilometersToYards(e);
        break;
      case "Feet":
        convertKilometersToFeet(e);
        break;
      case "Inch":
        convertKilometersToInches(e);
        break;
      default:
        setResults(0);
        break;
    }
  }
}
