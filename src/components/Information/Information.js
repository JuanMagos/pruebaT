import React from 'react';
import './Information.css';
import { Avatar, Box } from '@mui/material';

const Information = ({ number, title, description }) => {
  return (
    <Box className="infoContainer">
      <div className="infoAvatar">
        <Avatar
          alt="Remy Sharp"
          src={require(`../../assets/images/frame-${number}.png`)}
        />
      </div>

      <h2>
        {number}. {title}
      </h2>
      <span>{description}</span>
    </Box>
  );
};

export default Information;
