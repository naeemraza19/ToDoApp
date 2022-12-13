import Toast from 'react-native-toast-message';
import errors from '../errors';
import firestore from '@react-native-firebase/firestore';
import {
  addCurrentTask,
  loaderStart,
  loaderStop,
  logOut,
  saveTask,
} from '../../redux/actions';
import NavService from '../../config/NavService';
import {useSelector} from 'react-redux';

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
