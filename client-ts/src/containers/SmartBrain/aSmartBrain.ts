import {
  ON_ROUTE_CHANGE,
  USER_SIGNIN,
  SET_REGISTER_PARAM,
  SET_IMAGE_URL,
  SET_RECOG_BOX
} from "constans";

export const setRoute = (route: string) => {
  return {
    type: ON_ROUTE_CHANGE,
    payload: route
  };
};

export const onSignIn = (boolean: boolean, user: any) => {
  return {
    type: USER_SIGNIN,
    payload: {
      boolean: boolean,
      user: user
    }
  };
};

export const setRegisterParam = (paramName: any, paramValue: any) => {
  return {
    type: SET_REGISTER_PARAM,
    payload: {
      name: paramName,
      value: paramValue
    }
  };
};

export const setImageURL = (value: string) => {
  return {
    type: SET_IMAGE_URL,
    payload: value
  };
};

export const setRecogBox = (box: any) => {
  return {
    type: SET_RECOG_BOX,
    payload: box
  };
};
