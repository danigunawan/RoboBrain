import {
  ON_ROUTE_CHANGE,
  USER_SIGNIN,
  SET_REGISTER_PARAM,
  SET_IMAGE_URL,
  SET_RECOG_BOX
} from "constans";

// SmartBrain
export const setRoute = route => {
  return {
    type: ON_ROUTE_CHANGE,
    payload: route
  };
};

export const onSignIn = (boolean, user) => {
  return {
    type: USER_SIGNIN,
    payload: {
      boolean: boolean,
      user: user
    }
  };
};

export const setRegisterParam = (paramName, paramValue) => {
  return {
    type: SET_REGISTER_PARAM,
    payload: {
      name: paramName,
      value: paramValue
    }
  };
};

export const setImageURL = value => {
  return {
    type: SET_IMAGE_URL,
    payload: value
  };
};

export const setRecogBox = box => {
  console.log('box a', box);
  return {
    type: SET_RECOG_BOX,
    payload: box
  };
};
