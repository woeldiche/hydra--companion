import React from 'react';
import { connect } from 'react-redux';
import {
  loadFormulasIfNeeded,
  viewFormula,
  toggleDrawer
} from '../actions/spellbook';
import { changeUrl } from '../actions/misc';
import { withRouter } from 'react-router-dom';
import Formulalist from '../components/Formulalist';
import LinkButton from '../components/LinkButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router-dom';
import Section from '../components/Section.js';

const mapStateToProps = state => {
  let props = {
    btnPath: '/lab',
    btnClasses: 'button-action button-main',
    casterSet: !!state.caster._id,
    caster: state.caster._id
  };

  return Object.assign(
    {},
    state.spellBook,
    state.networkActions.spellBook,
    state.caster,
    props
  );
};

const mapDispatchToProps = dispatch => {
  return {
    btnAction: (path, existingPath) => {
      dispatch(changeUrl(path, existingPath));
    },
    loadItems: (caster, didInvalidate) => {
      if (didInvalidate) {
        dispatch(loadFormulasIfNeeded(caster));
      }
    },
    showFormula: id => event => {
      dispatch(viewFormula(id));
    },
    onDrawerChange: open => {
      dispatch(toggleDrawer(open));
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
    {casterSet
      ? <Formulalist {...props} />
      : <Section title="Notice">
          <div
            style={{
              paddingLeft: 16,
              paddingRight: 16
            }}
          >
            <p>
              Define a
              {' '}
              <Link to="/settings">spellcaster</Link>
              {' '}
              to be able to save spells.
              {' '}
            </p>
            <p>
              Explore spells and formulas in the
              {' '}
              <Link to="/lab">Spell Lab</Link> or by clicking the '+' button.
            </p>
          </div>
        </Section>}

    <LinkButton newPath={btnPath} classes={btnClasses} onUrlChange={btnAction}>
      <ContentAdd />
    </LinkButton>
  </div>
);

const LabStatus = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SpellBookWrapper)
);

export default LabStatus;
