import React from 'react';
import './HowWorks.css';
import Information from '../Information/Information';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const info = [
  {
    number: 1,
    title: 'Find owners',
    description:
      'Filter the marketplace to find the accounts that fit your needs',
  },
  {
    number: 2,
    title: 'Fund the escrow',
    description:
      'Send collateral funds to create a reserve in case your trade cole in negative',
  },
  {
    number: 3,
    title: 'Trade in real-time',
    description:
      'Control rental accounts from one single connection. Via API or web',
  },
  {
    number: 4,
    title: 'Collect Profit',
    description:
      'Your trade colsed with profit? collect profit from the escrow and withdraw the reserve',
  },
];
const HowWorks = () => {
  return (
    <Box className="infoParentContainer">
      <h1>How it works</h1>
      <Box className="listInfo">
        {info.map((info) => (
          <Information
            key={info.number}
            number={info.number}
            title={info.title}
            description={info.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HowWorks;
