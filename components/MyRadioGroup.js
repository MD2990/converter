import { Divider, WrapItem } from "@chakra-ui/layout";
import { RadioGroup } from "@chakra-ui/radio";
import React from "react";
import { useSnapshot } from "valtio";
import Data from "./Data";
import Inputs, { getIndex, Result } from "./Inputs";
import state from "./store";

export default function MyRadioGroup() {
  const snap = useSnapshot(state);

  const handleChangeUp = (e) => {
    state.up = e;

    getIndex(e, snap.down, snap.input);
  };
  const handleChangeDown = (e) => {
    state.down = e;

    getIndex(snap.up, e, snap.input);
  };


  const MyRadioGroups = ({ value, onChange }) => (
    <WrapItem    bg='gray.50' rounded='xl'   p="4">
      <RadioGroup
        color="blue.600"
        fontWeight="bold"
        size="md"
        value={value}
        onChange={onChange}
      >
        <Data />
      </RadioGroup>
    </WrapItem>
  );

  return (
    <>
      <Divider pt="4%" />
      <MyRadioGroups value={snap.up} onChange={handleChangeUp} />
      <Inputs />

      <MyRadioGroups value={snap.down} onChange={handleChangeDown} />
      <Result />
    </>
  );
}
