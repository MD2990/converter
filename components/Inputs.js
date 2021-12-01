import { Input } from "@chakra-ui/input";
import React from "react";
import { useSnapshot } from "valtio";
import {
  fromCentimeter,
  fromFeet,
  fromInch,
  fromKilometer,
  fromMeter,
  fromMicrometer,
  fromMile,
  fromMillimeter,
  fromNanometer,
  fromYard,
} from "../lib/converters";
import state from "./store";

export const InputField = ({
  type = "number",
  value,
  placeholder,
  onChange,
  isDisabled = false,
}) => (
  <Input
    fontSize={["md", "lg", "xl", "2xl"]}
    size="lg"
    fontFamily="sans"
    fontWeight="bold"
    maxW="70%"
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange && onChange}
    isDisabled={isDisabled}
  />
);
export default function Inputs() {
  const snap = useSnapshot(state);

  const handleInputChange = (e) => {
    state.input = e.target.value;
    getIndex(snap.up, snap.down, e.target.value);
  };

  return (
    <InputField
      value={snap.input}
      placeholder="Convert"
      onChange={handleInputChange}
    />
  );
}

export const Result = () => {
  const snap = useSnapshot(state);

  return (
    <InputField
      placeholder="Search"
      isDisabled
      value={snap.results}
      type="text"
    />
  );
};

export const getIndex = (a, b, e) => {
  e = Number(e) || 0;
  switch (a) {
    case "Meter":
      fromMeter(b, e, state);
      break;
    case "Kilometer":
      fromKilometer(b, e, state);
      break;
    case "Centimeter":
      fromCentimeter(b, e, state);
      break;
    case "Millimeter":
      fromMillimeter(b, e, state);
      break;
    case "Micrometer":
      fromMicrometer(b, e, state);
      break;
    case "Nanometer":
      fromNanometer(b, e, state);
      break;
    case "Mile":
      fromMile(b, e, state);
      break;
    case "Yard":
      fromYard(b, e, state);
      break;
    case "Feet":
      fromFeet(b, e, state);
      break;
    case "Inch":
      fromInch(b, e, state);
      break;

    default:
      state.results = 0;

      break;
  }
};
