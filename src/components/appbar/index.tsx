import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link } from "react-router-dom";
import { APP_PATH } from "../../constant/app.path";
import CutekidderlogoSQ from "/src/image/logo/CutekidderlogoSQ.png";
const ResponsiveAppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [categoriesOpen, setCategoriesOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickCategoriesMenu = () => {
    setCategoriesOpen(!categoriesOpen);
  };
  return (
    <AppBar variant="outlined" position="static" className="p-0 bg-orange-500">
      <Toolbar className="px-4">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <div className="items-center h-16">
          <img src={CutekidderlogoSQ} className="w-full h-full" />
        </div>
        <Drawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          sx={{ width: 400 }}
        >
          <List className="w-10">
            <Link to="/">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <ListItemButton onClick={handleClick} sx={{ pl: 4 }}>
              <ListItemText primary="Collection" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <List component="div" disablePadding>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to="/let-one-self-on">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Let oneself on" />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </List>
            {/* <ListItemButton onClick={handleClickCategoriesMenu} sx={{ pl: 4 }}>
              <ListItemText primary="Categories" />
              {categoriesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <List component="div" disablePadding>
              <Collapse in={categoriesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Link to={APP_PATH.PRODUCT.path}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="Top" />
                    </ListItemButton>
                  </Link>
                  <Link to={APP_PATH.ALL_PRODUCT.path}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary="All product" />
                    </ListItemButton>
                  </Link>
                </List>
              </Collapse>
            </List> */}
            <Link to="/official-store">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="Official Store" />
              </ListItem>
            </Link>
            <Link to="/about-us">
              <ListItem button sx={{ pl: 4 }}>
                <ListItemText primary="About Us" />
              </ListItem>
            </Link>
            <Link to="/contract-us">
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="Contact Us" />
              </ListItemButton>
            </Link>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
