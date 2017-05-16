import { connect } from 'react-redux';
import { saveFormulaNotify } from '../actions';
import LabNetworkFeedback from '../components/LabNetworkFeedback';

const mapStateToProps = state => {
  return state.networkActions;
};

const mapDispatchToProps = dispatch => {
  return {
    handleRequestClose: () => {
      dispatch(saveFormulaNotify());
    }
  };
};

const LabStatus = connect(mapStateToProps, mapDispatchToProps)(
  LabNetworkFeedback
);

export default LabStatus;
