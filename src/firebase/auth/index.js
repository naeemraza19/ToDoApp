import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import NavService from '../../config/NavService';
import * as EmailValidator from 'email-validator';
var passwordValidator = require('password-validator');
import errors from '../errors';
import firestore from '@react-native-firebase/firestore';
import {loaderStart, loaderStop, saveUser} from '../../redux/actions';

// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
  .is()
  .min(6)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits();

const showError = message => {
  return Toast.show({
    type: 'error',
    text1: message,
  });
};
const showSuccess = message => {
  return Toast.show({
    type: 'success',
    text1: message,
  });
};

export const registerUser = (email, password, confirmPassword) => {
  return dispatch => {
    if (!email || !password || !confirmPassword) {
      return showError('Please enter Email and Password');
    }
    if (!EmailValidator.validate(email)) {
      return showError('Please enter a valid Email');
    }
    if (!schema.validate(password)) {
      return showError(
        'Password should have number , uppercase , lowercase and atleast 6 characters',
      );
    }
    if (password !== confirmPassword) {
      return showError('Please enter same Passwords');
    }
    dispatch(loaderStart());
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log('sd', user);
        firestore()
          .collection('user')
          .doc(user.user.uid)
          .set({email})
          .then(() => {
            dispatch(loaderStop());
            dispatch(saveUser({email}));
            showSuccess('Account created successfully');
            NavService.reset(0, [{name: 'AppStack'}]);
          });
      })
      .catch(e => {
        dispatch(loaderStop());
        console.error(e);
        showError(errors[`${e.code}`]);
      });
  };
};

export const login = (email, password) => {
  return dispatch => {
    if (!email || !password) {
      return showError('please enter email and password');
    }
    if (!EmailValidator.validate(email)) {
      return showError('Please enter a valid Email');
    }
    if (!schema.validate(password)) {
      return showError(
        'Password should have number , uppercase , lowercase and atleast 6 characters',
      );
    }
    dispatch(loaderStart());
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user.user, 'user');
        dispatch(saveUser({email}));
        dispatch(loaderStop());
        showSuccess('user login');
        NavService.reset(0, [{name: 'AppStack'}]);
      })
      .catch(e => {
        dispatch(loaderStop());
        console.error(e);
        showError(errors[`${e.code}`]);
      });
  };
};
