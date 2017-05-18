import { connect } from 'react-redux';
import { changeUrl, loadFormulasIfNeeded } from '../actions';
import { withRouter } from 'react-router-dom';
import Formulalist from '../components/Formulalist';

const mapStateToProps = state => {
  let props = {
    btnPath: '/lab',
    btnClasses: 'button-action button-main'
  };

  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    btnAction: (path, existingPath) => {
      dispatch(changeUrl(path, existingPath));
    },
    loadItems: () => {
      dispatch(loadFormulasIfNeeded());
    }
  };
};

const LabStatus = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Formulalist)
);

export default LabStatus;
