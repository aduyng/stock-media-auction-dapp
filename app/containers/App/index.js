import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStateToProps from './selectors/mapStateToProps';
import mapDispatchToProps from './selectors/mapDispatchToProps';
import App from './App';

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
