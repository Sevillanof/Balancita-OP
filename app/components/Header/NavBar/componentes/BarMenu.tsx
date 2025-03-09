import { useState } from 'react';
import "./BarMenu.css"
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Switch,
    FormControlLabel,
    FormGroup,
    MenuItem,
    Menu
} from '@mui/material';
import { Menu as MenuOpen, AccountCircle } from '@mui/icons-material';


export default function BarMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="container-bar"position="static">
        <Toolbar className='container-items'>
          <IconButton
            className="icon-button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleMenu}
          >
           {isOpen ? <MenuOpen /> : "///"}

          </IconButton>
          <Typography className="title"variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Balancita⚖️
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                🥸
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}