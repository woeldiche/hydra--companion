import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putConfig, getConfig, loadCaster } from '../actions';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loader from '../components/Loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LabPage from '../components/LabPage';
import SettingsPage from '../components/SettingsPage';
import UserForm from './UserForm';
import SpellBookPage from '../components/SpellBookPage';
import ConfigModal from '../components/ConfigModal';
import '../styles/App.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const mapStateToProps = state => {
  const { user, isUserValid } = state.config;
  const { didSave, isSaving } = state.networkActions.config;
  const showModal = user === '' || !isUserValid || !didSave ? true : false;

  const props = {
    didFetch: state.networkActions.config.didFetch,
    showModal: showModal,
    allowModalClose: isUserValid && !isSaving,
    didSave: didSave
  };

  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    handleModalClose: () => {
      dispatch(putConfig());
    },
    loadConfig: () => {
      dispatch(getConfig());
      dispatch(loadCaster());
    }
  };
};

class AppComponent extends Component {
  componentDidMount() {
    this.props.loadConfig();
  }

  render() {
    const {
      didFetch,
      showModal,
      allowModalClose,
      handleModalClose
    } = this.props;

    return (
      <MuiThemeProvider>
        <Router>
          <div className="page">
            {!didFetch
              ? <Loader />
              : <div className="page">
                  <ConfigModal
                    showModal={showModal}
                    allowClose={allowModalClose}
                    handleClose={handleModalClose}
                  >
                    <UserForm />
                  </ConfigModal>

                  <Route path="/lab" component={LabPage} />
                  <Route exact path="/" component={SpellBookPage} />
                  <Route path="/settings" component={SettingsPage} />
                </div>}
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
