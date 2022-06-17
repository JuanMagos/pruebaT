import React, { useState } from 'react';
import './Header.styles.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import logo from '../../assets/images/logo.png';

const pages = ['How it works', 'Marketplace', 'Why TradeSharing', 'FAQ'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <AppBar position="static" class="nav-bar">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <img src={logo} alt="logo" className="logo" />
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                style={{ background: '#000', color: '#fff' }}
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>Spanish</MenuItem>
                <MenuItem value={30}>French</MenuItem>
              </Select>
              <Button
                style={{ background: '#fff', color: '#000', fontWeight: 700 }}
                variant="contained"
              >
                Join the waitlist
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
