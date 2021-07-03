import React from 'react';
import APIKey from './../../redux/constants/APIKey';
import { useDispatch, useSelector } from 'react-redux';
import { validateUser } from '../../redux/actions/OnBoardingAction';
import { getUserInfo } from '../../redux/reducer/OnBoardingReducer';

const OnBoarding = () => {
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(validateUser());
  }

  console.log("userInfo", userInfo);
  console.log("APIKey", APIKey.getApiKey());

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Next</button>
      </form>
    </>
  )
}

export default OnBoarding;
