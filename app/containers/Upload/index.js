import { connect } from 'react-redux';
import mapStateToProps from './selectors/mapStateToProps';
import mapDispatchToProps from './selectors/mapDispatchToProps';
import Component from './Upload';

export default connect(mapStateToProps, mapDispatchToProps)(Component);
