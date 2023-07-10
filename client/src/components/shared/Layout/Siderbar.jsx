import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import InventoryIcon from '@mui/icons-material/Inventory';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { UserMenu } from './UserMenu';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Container>
      {UserMenu.map((u, key) => (
        <MenuItem key={key}>
          <IconWrapper>
            {u.icon === 'InventoryIcon' && <InventoryIcon />}
            {u.icon === 'BloodtypeIcon' && <BloodtypeIcon />}
            {u.icon === 'LocalHospitalIcon' && <LocalHospitalIcon />}
          </IconWrapper>
          <MenuItemText to={u.path}>{u.name}</MenuItemText>
        </MenuItem>
      ))}
    </Container>
  );
};

export default Sidebar;

const Container = styled(Box)`
  color: #fff;
  height: 100vh;
  background-color: #1976D2; /* Update background color to a decent color */
  padding: 24px; /* Increase padding */
  ${'' /* border-radius: 10px; */}
`;

const MenuItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 16px;
`;

const IconWrapper = styled(Box)`
  margin-right: 8px;
`;

const MenuItemText = styled(Link)`
  font-size: 1.5rem; /* Increase font size */
  color: white;
  text-decoration: none;
  padding: 5%
`;
