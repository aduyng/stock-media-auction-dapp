export default state => ({
  isLeftSidebarOpened: state.leftSidebar.isOpened,
  commit: process.env.commit,
  buildNumber: process.env.buildNumber,
  version: process.env.version,
});
