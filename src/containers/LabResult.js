import { connect } from 'react-redux';
import { storeToDB } from '../actions';
import { withRouter } from 'react-router-dom';
import LabFooter from '../components/LabFooter';

const calcDiff = state => {
  let sum = 0;

  for (let prop in state) {
    if (state[prop].hasOwnProperty('diff')) {
      const value = !!state[prop].diff ? state[prop].diff : 0;
      sum += value;
    }
  }

  return sum;
};

const mapStateToProps = state => {
  const difficulty = calcDiff(state.spellLab);
  const stat = 4;
  const cost = Math.round(difficulty / 5) >= 1 ? Math.round(difficulty / 5) : 1;

  let props = {
    diff: difficulty,
    cost: cost,
    dc: Math.floor(difficulty / 5 + stat + 10),
    allowSave: state.spellLab.allowSave
  };

  return props;
};

const mapDispatchToProps = dispatch => {
  return {
    onClickSave: () => {
      dispatch(storeToDB());
    }
  };
};

const LabResult = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LabFooter)
);

export default LabResult;
