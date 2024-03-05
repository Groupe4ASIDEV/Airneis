import { useContext } from 'react';
import { UidContext } from '../Authentication/UserContext';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LoginIcon from '@mui/icons-material/Login';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DescriptionIcon from '@mui/icons-material/Description';
import BalanceIcon from '@mui/icons-material/Balance';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

export default function BasicMenu({ anchorEl, open, onClose }) {
    const { isAuth, userData, logout } = useContext(UidContext);

    return (
        <div>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {isAuth
                    ? [
                          <Link
                              to="/auth"
                              key="link-auth"
                              className="custon-link"
                          >
                              <MenuItem onClick={onClose} key="settings">
                                  <ManageAccountsIcon
                                      size="large"
                                      edge="start"
                                      color="inherit"
                                      aria-label="menu"
                                      sx={{ mr: 2 }}
                                  />
                                  Mes paramètres
                              </MenuItem>
                          </Link>,
                          <Link
                              to={'/orders/' + userData?._id}
                              key="link-orders"
                          >
                              <MenuItem onClick={onClose} key="orders">
                                  <LocalShippingIcon
                                      size="large"
                                      edge="start"
                                      color="inherit"
                                      aria-label="menu"
                                      sx={{ mr: 2 }}
                                  />
                                  Mes commandes
                              </MenuItem>
                          </Link>,
                      ]
                    : [
                          <Link to="/auth" key="link-auth">
                              <MenuItem onClick={onClose} key="connection">
                                  <LoginIcon
                                      size="large"
                                      edge="start"
                                      color="inherit"
                                      aria-label="menu"
                                      sx={{ mr: 2 }}
                                  />
                                  Se connecter
                              </MenuItem>
                          </Link>,
                          <Link to="/registration" key="link-registration">
                              <MenuItem onClick={onClose} key="registration">
                                  <PersonAddAltIcon
                                      size="large"
                                      edge="start"
                                      color="inherit"
                                      aria-label="menu"
                                      sx={{ mr: 2 }}
                                  />
                                  S'inscrire
                              </MenuItem>
                          </Link>,
                      ]}
                <MenuItem onClick={onClose} key="GCU">
                    <DescriptionIcon
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                        }}
                    />
                    CGU
                </MenuItem>
                <MenuItem onClick={onClose} key="legal">
                    <BalanceIcon
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                        }}
                    />
                    Mentions légales
                </MenuItem>
                <MenuItem onClick={onClose} key="Contact">
                    <EmailIcon
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                        }}
                    />
                    Contact
                </MenuItem>
                <MenuItem onClick={onClose} key="information">
                    <InfoIcon
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                        }}
                    />
                    À propos d'ÀIRNEIS
                </MenuItem>
                {isAuth ? (
                    <MenuItem
                        onClick={() => {
                            logout();
                            onClose();
                        }}
                        key="disconnect"
                    >
                        <LogoutIcon
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                            }}
                        />
                        Se déconnecter
                    </MenuItem>
                ) : (
                    ''
                )}
            </Menu>
        </div>
    );
}
