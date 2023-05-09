import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./StyledComponents";
import { MobileMenuButton } from "./MobileMenu/MobileMenuButton";
import { RenderMobileMenu } from "./MobileMenu/RenderMobileMenu";
import { MobileMenuDrawer } from "./MobileMenu/MobileMenuDrawer"
import { MenuItems } from "./Menu/MenuItems";
import { RenderMenu } from "./Menu/RenderMenu";

export default function Navbar({biggerThanMobile}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuId = "primary-search-account-menu";

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* Mobile Drawer button */}
            {!biggerThanMobile && <MobileMenuDrawer />}
          {/* End Mobile Drawer button */}

          {/* Navber Title */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Facebook Clone
            </Typography>
          {/* End Navber Title */}

          {/* Search */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          {/* Search */}

          <Box sx={{ flexGrow: 1 }} />
          {/* Menu items */}
          <MenuItems
            menuId={menuId}
            handleProfileMenuOpen={handleProfileMenuOpen}
          />
          {/* End Menu items */}

          {/* Mobile menu button */}
          <MobileMenuButton
            mobileMenuId={mobileMenuId}
            handleMobileMenuOpen={handleMobileMenuOpen}
          />
          {/* End Mobile menu button */}
        </Toolbar>
      </AppBar>
      <RenderMobileMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
        mobileMenuId={mobileMenuId}
      />
      <RenderMenu
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </Box>
  );
}
