import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { UidContext } from './Authentication/UserContext';

function Header() {
    const { userData, isAuth } = useContext(UidContext);

    return (
        <Box component="header" sx={{ flexGrow: 1 }}>
            <AppBar component="div" position="static">
                <Toolbar>
                    <Typography
                        variant="h1"
                        component="h1"
                        className="title-main"
                        sx={{ flexGrow: 1 }}
                    >
                        Àirneis
                    </Typography>
                    {isAuth && userData ? (
                        <p>Hello {userData.fullName} !</p>
                    ) : null}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                        }}
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                        }}
                    >
                        <SearchIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
