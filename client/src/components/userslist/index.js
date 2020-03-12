import { setShowFilter } from '../../actions'
import AllUsers from './allusers'
import { connect } from 'react-redux';

/**
 * Map outer state object to inner props project in UI components
**/
const mapStateToProps = (state, ownProps) => {
  return {
    showFilter: state.showFilter
  }
};


/**
 * Map parameters in UI components to 'store.dispatch'
 **/
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setShowFilter: () => {
      dispatch(setShowFilter(ownProps.filter))
    }
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers)
