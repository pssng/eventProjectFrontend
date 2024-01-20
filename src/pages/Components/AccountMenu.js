import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';
import { ListItemButton,ListItem ,ListItemText} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PaletteIcon from "@mui/icons-material/Palette";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import HistoryIcon from "@mui/icons-material/History";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";


const ITEM_HEIGHT = 48;

export default function LongMenu({currentSection,setCurrentSection,listOptions}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{float:'right'}}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}

      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
           {listOptions.map((item) => (
            <ListItem
              key={item.text}
              disablePadding
              onClick={() => setCurrentSection(item.text)}
            >
              <ListItemButton>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>))}
        <Divider />
   
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}