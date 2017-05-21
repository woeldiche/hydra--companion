import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateConfig } from '../actions/';
import Subheader from 'material-ui/Subheader';

const mapStateToProps = state => {
  const userErrorText = state.config.isUserValid
    ? ''
    : 'Submit a valid e-mail address.';
  return Object.assign({}, state.config, state.networkActions.config, {
    userErrorText: userErrorText
  });
};

const mapDispatchToProps = dispatch => {
  return {
    onValueChange: param => (event, index, value) => {
      dispatch(updateConfig(param, !!value ? value : event.target.value));
    }
  };
};

const FormComponent = ({
  user,
  isSaving,
  didSave,
  onValueChange,
  onSave,
  userErrorText
}) => (
  <div>
    <Subheader style={{ marginTop: '16px' }}>
      {isSaving &&
        <span style={{ paddingLeft: '48px', color: '#ccc' }}>Saving...</span>}
      {didSave &&
        <span style={{ paddingLeft: '48px', color: '#ccc' }}>
          Saved.
        </span>}
    </Subheader>
    <TextField
      name="user"
      value={user}
      onChange={onValueChange('user')}
      className="form-input"
      floatingLabelText="E-mail"
      fullWidth={true}
      errorText={userErrorText}
    />
  </div>
);

const UserForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FormComponent)
);

export default UserForm;
