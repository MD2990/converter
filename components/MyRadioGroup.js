import { WrapItem } from '@chakra-ui/layout';
import { RadioGroup } from '@chakra-ui/radio';
import React from 'react'
import Data from './Data';

export default function MyRadioGroup({ value, onChange }) {
  return (
    <WrapItem>
      <RadioGroup
        color="gray.500"
        fontWeight="semi-bold"
        size="md"
        value={value}
        onChange={onChange}
      >
        <Data />
      </RadioGroup>
    </WrapItem>
  );
}
