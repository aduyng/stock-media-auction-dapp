import React from 'react';
import { func, bool, string, number, oneOfType } from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import { grey500 } from 'material-ui/styles/colors';

const LeftSidebar = ({
  toggleLeftSidebar, isLeftSidebarOpened, version, buildNumber, commit,
}) => (
  <Drawer
    docked={false}
    width={200}
    open={isLeftSidebarOpened}
    onRequestChange={toggleLeftSidebar}
  >
    <MenuItem onClick={toggleLeftSidebar}>Menu Item</MenuItem>
    <div
      className="footer"
      style={{
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
        width: '100%',
      }}
    >
      <code
        style={{
          color: grey500,
        }}
      >
        {version}.{buildNumber}, #{commit}
      </code>
    </div>
  </Drawer>
);

LeftSidebar.propTypes = {
  toggleLeftSidebar: func.isRequired,
  isLeftSidebarOpened: bool.isRequired,
  version: string.isRequired,
  buildNumber: oneOfType([string, number]).isRequired,
  commit: oneOfType([string, number]).isRequired,
};

export default LeftSidebar;
