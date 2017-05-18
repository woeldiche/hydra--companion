import { connect } from 'react-redux';
import { saveFormulaNotify } from '../actions';
import { withRouter } from 'react-router-dom';
import LabNetworkFeedback from '../components/LabNetworkFeedback';

const mapStateToProps = state => {
  return state.networkActions.spellBook;
};

const mapDispatchToProps = dispatch => {
  return {
    handleRequestClose: () => {
      dispatch(saveFormulaNotify());
    }
  };
};

const LabStatus = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LabNetworkFeedback)
);

export default LabStatus;
