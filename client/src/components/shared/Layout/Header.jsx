import React from 'react';
import styled from '@emotion/styled';


import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Root = styled('div')({
    flexGrow: 1,
    backgroundColor: 'pink', // Change the background color to pink
    color: 'black',
});

const Title = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    display: 'none',
    fontSize: '2rem',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
}));

const DrawerContainer = styled('div')({
    width: 250,
});

const Name = styled(Typography)({
    paddingLeft: '2%',
    paddingRight: '2%',
});

const Header = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };

    const renderDrawer = () => (
        <DrawerContainer
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                </ListItem>
            </List>
            <Divider />
        </DrawerContainer>
    );

    return (
        <Root>
            <AppBar position="static">
                <Toolbar>
                    <MenuButton
                        edge="start"
                        color="red"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </MenuButton>
                    <Title variant="h6">
                        Blood Bank
                        <BloodtypeIcon />
                    </Title>
                    <Name>
                        Welcome {user?.name}
                    </Name>
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {renderDrawer()}
            </Drawer>
        </Root>
    );
};

export default Header;
