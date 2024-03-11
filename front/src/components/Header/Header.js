import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Link } from '@mui/material';
import useCartStore from '../../store/cartStore';

function Header({ onMenuIconClick }) {
    const { cart } = useCartStore();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <div id="header">
            <Box component="header" sx={{ flexGrow: 1 }}>
                <AppBar component="div" position="static">
                    <Toolbar>
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{ flexGrow: 1 }}
                        >
                            <Link color="inherit" href="/">
                                Àirneis
                            </Link>{' '}
                        </Typography>
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
                            onClick={handleCartClick}
                            sx={{
                                mr: 2,
                            }}
                        >
                            <Badge badgeContent={cartCount} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={onMenuIconClick}
                            sx={{
                                mr: 2,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Header;
