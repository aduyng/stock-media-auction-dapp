import { connect } from 'react-redux';
import mapStateToProps from './selectors/mapStateToProps';
import mapDispatchToProps from './selectors/mapDispatchToProps';
import LeftSidebar from './LeftSidebar';

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);
