import React from 'react';
import { connect } from 'react-redux';
import { changeUrl, loadFormulasIfNeeded } from '../actions';
import { withRouter } from 'react-router-dom';
import Formulalist from '../components/Formulalist';
import LinkButton from '../components/LinkButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const mapStateToProps = state => {
  let props = {
    btnPath: '/lab',
    btnClasses: 'button-action button-main',
    casterSet: !!state.caster._id
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

const SpellBookWrapper = ({
  casterSet,
  btnAction,
  btnPath,
  btnClasses,
  ...props
}) => (
  <div className="fill-area flexbox-item-grow">
    {true ? <Formulalist /> : <div>Notice</div>}

    <LinkButton newPath={btnPath} classes={btnClasses} onUrlChange={btnAction}>
      <ContentAdd />
    </LinkButton>
  </div>
);

const LabStatus = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SpellBookWrapper)
);

export default LabStatus;
