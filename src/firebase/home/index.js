import Toast from 'react-native-toast-message';
import errors from '../errors';
import firestore from '@react-native-firebase/firestore';
import {
  addCurrentTask,
  loaderStart,
  loaderStop,
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

export function addTask(uid, title, description, category, priority, date) {
  return dispatch => {
    if (!title || !description || !category || !priority) {
      return showError(
        'Please Enter title and description also set Category and Priority',
      );
    }
    dispatch(loaderStart());
    firestore()
      .collection('tasks')
      .doc()
      .set({uid, title, description, category, priority, date})
      .then(() => {
        dispatch(
          addCurrentTask({uid, title, description, category, priority, date}),
        );
        dispatch(loaderStop());
        NavService.navigate('HomeStack');
        showSuccess('Task added successfully');
      })
      .catch(e => {
        dispatch(loaderStop());
        console.error(e);
        showError(errors[`${e.code}`]);
      });
  };
}

export function getTask(uid, setResponse) {
  return dispatch => {
    dispatch(loaderStart());
    firestore()
      .collection('tasks')
      .where('uid', '==', uid)
      .get()
      .then(data => {
        // console.log('data.docs', data.docs.id);
        const res = data.docs.map(item => {
          console.log(item.id, 'id');
          return {...item.data(), id: item.id};
        });
        setResponse(res);
        dispatch(saveTask(res));
        dispatch(loaderStop());
        if (res?.length) {
          showSuccess('Task received successfully');
        }
      })
      .catch(e => {
        dispatch(loaderStop());
        console.error(e);
        showError(errors[`${e.code}`]);
      });
  };
}

export function deleteTask(id) {
  console.log(id, 'hjghj');
  firestore()
    .collection('tasks')
    .doc(id)
    .delete()
    .then(() => {
      showSuccess('Item deleted');
    });
}
