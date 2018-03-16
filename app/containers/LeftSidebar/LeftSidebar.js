import React from 'react';
import { func, bool } from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

const LeftSidebar = ({ toggleLeftSidebar, isLeftSidebarOpened }) => (
  <Drawer
    docked={false}
    width={200}
    open={isLeftSidebarOpened}
    onRequestChange={toggleLeftSidebar}
  >
    <MenuItem onClick={toggleLeftSidebar}>Menu Item</MenuItem>
  </Drawer>
);

LeftSidebar.propTypes = {
  toggleLeftSidebar: func.isRequired,
  isLeftSidebarOpened: bool.isRequired,
};

export default LeftSidebar;
