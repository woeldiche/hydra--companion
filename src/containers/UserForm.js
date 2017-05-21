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
  const userRepeatErrorText = state.config.isUserValid &&
    state.config.user !== state.config.userRepeat
    ? "E-mail addresses don't match."
    : '';
  return Object.assign({}, state.config, state.networkActions.config, {
    userErrorText: userErrorText,
    userRepeatErrorText: userRepeatErrorText
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
  userRepeat,
  isSaving,
  didSave,
  onValueChange,
  onSave,
  userErrorText,
  userRepeatErrorText
}) => (
  <div>
    <TextField
      name="user"
      value={user}
      onChange={onValueChange('user')}
      className="form-input"
      floatingLabelText="E-mail"
      fullWidth={true}
      errorText={userErrorText}
    />
    <TextField
      name="userRepeat"
      value={userRepeat}
      onChange={onValueChange('userRepeat')}
      className="form-input"
      floatingLabelText="Repeat e-mail"
      fullWidth={true}
      errorText={userRepeatErrorText}
    />
    <p>
      Before you can use the app you must create a user by typing in your e-mail address.
    </p><p>
      {' '}
      We are only using your e-mail to uniquely identify you and maybe syncing your data between devices in the future.
    </p>
    <Subheader style={{ paddingLeft: 0 }}>
      {isSaving && <span style={{ color: '#ccc' }}>Saving...</span>}
      {didSave &&
        <span style={{ color: '#ccc' }}>
          Saved!
        </span>}
    </Subheader>
  </div>
);

const UserForm = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(FormComponent)
);

export default UserForm;
