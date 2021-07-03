import * as type from '../constants';

const initialState = {userName: 'pradeep'};

export default function OnBoarding(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case type.VALIDATE_USER_SUCCESS:
      return {
        ...state,
        verified: true,
        stepNo: 1
      };
    case type.VALIDATE_USER_FAILURE:
      return {
        ...state,
        verified: false,
        stepNo: 2
      };
    default:
      return state;
  }
}

export const getUserInfo = state => state;
