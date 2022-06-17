import React from 'react';
import './MainBanner.css';
import banner from '../../assets/images/banner.png';
import textBanner from '../../assets/images/text_banner.png';
import binance from '../../assets/images/Binance.png';
import power from '../../assets/images/power.png';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const MainBanner = () => {
  return (
    <>
      <Box className="bannerContainer">
        <Box className="firstGridBanner">
          <img
            src={textBanner}
            alt="logo"
            className="textBanner"
            width={'408px'}
          />
          <Button className="joinButton">{'Join the waitlist'}</Button>
        </Box>
        <Box>
          <img src={banner} alt="logo" className="banner" />
        </Box>
      </Box>
      <Box className="secondBannerContainer">
        <Box className="squareContent">
          <img src={binance} alt="logo" className="binance" />
          <div className="square">
            <span>534</span>
            <p>Binance account</p>
          </div>
        </Box>
        <Box className="squareContent">
          <img src={power} alt="logo" className="power" />
          <div className="square">
            <span>$122,673,328 USDT</span>
            <p>Binance account</p>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default MainBanner;
