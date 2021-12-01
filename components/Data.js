import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Radio } from "@chakra-ui/radio";
import React from "react";

export default function Data() {
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
    <Wrap justify="flex-start" align="flex-start" spacing="8">
      {data.map((d) => (
        <WrapItem  key={d.id}>
          <Radio   colorScheme="gray" value={d.value}>
            {d.name}
          </Radio>
        </WrapItem>
      ))}
    </Wrap>
  );
}
