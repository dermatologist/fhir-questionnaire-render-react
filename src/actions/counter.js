import {createAction} from 'redux-actions'
import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../constants/ActionTypes'

export const increment = createAction(INCREMENT_COUNTER);

export const decrement = createAction(DECREMENT_COUNTER);

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const {counter} = getState();

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}
