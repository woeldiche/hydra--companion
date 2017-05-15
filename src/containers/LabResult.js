import { connect } from 'react-redux'
import { saveFormula } from '../actions';
import LabFooter from '../components/LabFooter';

const calcDiff = (state) => {
  let sum = 0;

  for (let prop in state) {
    if (state[prop].hasOwnProperty('diff')) {
      const value = (!!state[prop].diff ? state[prop].diff : 0);
      sum += value;
    }
  }

  return sum;
}

const allowSave = (state) => {
  // Check for a name, longer than 3 chars

  // Check for a school, effect, delivery, time, duration

  // if delivery allows range, check for range
  // if delivery allows area, check for area

  // if effect allows damage, check for damage

  return false;
}

const mapStateToProps = (state) => {
  const difficulty = calcDiff(state.spellLab);
  const stat = 4;
  const cost = Math.round(difficulty / 5) >= 1 ? Math.round(difficulty / 5) : 1;

  let props = {
    diff: difficulty,
    cost: cost,
    dc: Math.floor(difficulty/5 + stat + 10),
    allowSave: allowSave(state.spellLab)
  };

  return props;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSave: (param, value) => (event) => {
      dispatch(saveFormula(param, event.target.value))
    }
  }
}

const LabResult = connect(
  mapStateToProps,
  mapDispatchToProps
)(LabFooter)

export default LabResult;
