import { connect } from 'react-redux';
import { updateConfig, storeConfig } from '../actions';
import { withRouter } from 'react-router-dom';
import LabFooter from '../components/ConfigModal';

const mapStateToProps = state => {
  return {
    showModal: state.config.showModal,
    allowClose: state.config.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () => {
      dispatch(storeConfig());
    },
    onUpdateConfig: () => {
      dispatch(updateConfig());
    }
  };
};

const LabResult = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LabFooter)
);

export default LabResult;
