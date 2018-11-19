import {
  USER_SIGNIN,
  ON_ROUTE_CHANGE,
  SET_REGISTER_PARAM,
  SET_IMAGE_URL,
  SET_RECOG_BOX,
} from 'constans';

// SmartBrain
const initialSigninStatus = {
  isSignedIn: true,
  signedInUser: {},
  signinEmail: '',
  signinPassword: '',
  signinRememberMe: '',
  route: ''
};

export const signinStatus = (state: any = initialSigninStatus, action: any = {}) => {
  switch (action.type) {
    case ON_ROUTE_CHANGE:
      return Object.assign({}, state, { route: action.payload });
    case USER_SIGNIN:
      return Object.assign({}, state, {
        isSignedIn: action.payload.boolean,
        signinUser: action.payload.user,
      });
    default:
      return state;
  }
};

const initialRegisterUser = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  isRegistered: false,
};

export const RegisterUser = (state: any = initialRegisterUser, action: any = {}) => {
  switch (action.type) {
    case SET_REGISTER_PARAM:
      for (const key of Object.keys(state)) {
        if (key === action.payload.name) {
          state[key] = action.payload.value;
        }
      }
      break;
    default: 
      break;
  }
};

const initialImageDetection = {
  inputURL: '',
  box: []
};

export const imageDetection = (state: any = initialImageDetection, action: any = {}) => {
  switch (action.type) {
    case SET_IMAGE_URL:
      return Object.assign({}, state, { inputURL: action.payload });
    case SET_RECOG_BOX:
      return Object.assign({}, state, { box: action.payload });
    default:
      return state;
  }
};
