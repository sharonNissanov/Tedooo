import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import Box from '@mui/material/Box';
    
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import {HomeOutlined, ChatBubbleOutlineRounded, NotificationsOutlined} from '@mui/icons-material';
import userImg from"../../images/user.png";
import './MenuStyle.css'
import SearchAppBar from './Search'

export default function MenuComponent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
        <div style={{ background:"white"}}> 
        <Container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '1% 0'}}>
            <Box><SearchAppBar/></Box>   
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <MenuItem  className='item-selected' sx={{color:"#47C1AD"}} onClick={handleClose}> <HomeOutlined/> Home </MenuItem>
        <MenuItem sx={{color:"#A1A4A3"}} onClick={handleClose}> <ChatBubbleOutlineRounded /> Messaging </MenuItem>
        <MenuItem sx={{color:"#A1A4A3 "}} onClick={handleClose}> <NotificationsOutlined /> Notification </MenuItem>

            <Tooltip title="Account settings">
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <Avatar src={userImg} sx={{ width: 32, height: 32 }}></Avatar>
            </IconButton>
            </Tooltip>
        </Box>
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
            elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
                },
                '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
                },
            },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem onClick={handleClose}>
            <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <Settings fontSize="small" />
            </ListItemIcon>
            Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <Logout fontSize="small" />
            </ListItemIcon>
            Logout
            </MenuItem>
        </Menu>

      </Container>
      </div>
    </React.Fragment>
  );
}