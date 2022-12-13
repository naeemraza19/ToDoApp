import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CustomButton from '../Components/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import CustomTextInput from '../Components/CustomTextInput';
import {useDispatch} from 'react-redux';
import {logOut} from '../redux/actions';
import NavService from '../config/NavService';

const {width, height} = Dimensions.get('window');

const ProfilePage = props => {
  const changeProfileImage = () => {
    console.log('hiiii');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight(),
        backgroundColor: '#000',
        flex: 1,
      }}>
      <Modal
        isVisible={isVisible}
        onRequestClose={() => {
          setIsVisible(false);
        }}>
        <View
          style={{backgroundColor: '#363636', padding: 20, borderRadius: 5}}>
          <Text style={{marginBottom: 10, color: '#fff', textAlign: 'center'}}>
            Add Account Name
          </Text>
          <View style={{borderWidth: 0.5, borderColor: '#fff'}}></View>
          <CustomTextInput
            label={'Add your Name'}
            placeholder={'Add Your Name'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsVisible(false);
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#8875FF'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#8875FF',
                paddingVertical: 10,
                borderRadius: 5,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        isVisible={isVisible2}
        onRequestClose={() => {
          setIsVisible(false);
        }}>
        <View
          style={{backgroundColor: '#363636', padding: 20, borderRadius: 5}}>
          <Text style={{marginBottom: 10, color: '#fff', textAlign: 'center'}}>
            Change Account Password
          </Text>
          <View style={{borderWidth: 0.5, borderColor: '#fff'}}></View>
          <CustomTextInput
            label={'Enter Your Old Password'}
            placeholder={'Enter Your Old Password'}
          />
          <CustomTextInput
            label={'Enter New Password'}
            placeholder={'Enter New Password'}
          />
          <CustomTextInput
            label={'Confirm New Password'}
            placeholder={'Confirm New Password'}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsVisible2(false);
              }}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#8875FF'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#8875FF',
                paddingVertical: 10,
                borderRadius: 5,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#fff'}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 18}}>Profile</Text>
        <Image
          style={{
            height: 80,
            width: 80,
            borderRadius: 50,
            marginVertical: 20,
          }}
          source={require('../assets/image-person.jpeg')}
        />
        <Text style={{color: '#fff', fontSize: 18}}>Angelina</Text>
      </View>
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <CustomButton
          containerStyle={{
            width: (width - 60) / 2,
            backgroundColor: '#363636',
            borderColor: '#363636',
            marginHorizontal: 20,
          }}
          title={'10 Task Left'}
        />
        <CustomButton
          containerStyle={{
            width: (width - 60) / 2,
            backgroundColor: '#363636',
            borderColor: '#363636',
            marginRight: 20,
          }}
          title={'5 Task Done'}
        />
      </View>
      <View style={{marginHorizontal: 20}}>
        <TouchableOpacity
          onPress={() => {
            setIsVisible(true);
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                tintColor: '#fff',
                height: 25,
                width: 25,
                resizeMode: 'contain',
                marginRight: 10,
              }}
              source={require('../assets/Profile.png')}
            />
            <Text style={{color: '#fff'}}>Add Name</Text>
          </View>
          <Image
            style={{
              tintColor: '#fff',
              height: 25,
              width: 25,
              resizeMode: 'contain',
            }}
            source={require('../assets/arrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsVisible2(true);
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                tintColor: '#fff',
                height: 25,
                width: 25,
                resizeMode: 'contain',
                marginRight: 10,
              }}
              source={require('../assets/key.png')}
            />
            <Text style={{color: '#fff'}}>Change Account Password</Text>
          </View>
          <Image
            style={{
              tintColor: '#fff',
              height: 25,
              width: 25,
              resizeMode: 'contain',
            }}
            source={require('../assets/arrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={changeProfileImage}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                tintColor: '#fff',
                height: 25,
                width: 25,
                resizeMode: 'contain',
                marginRight: 10,
              }}
              source={require('../assets/camera.png')}
            />
            <Text style={{color: '#fff'}}>Change Profile Image</Text>
          </View>
          <Image
            style={{
              tintColor: '#fff',
              height: 25,
              width: 25,
              resizeMode: 'contain',
            }}
            source={require('../assets/arrow.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          NavService.reset(0, [{name: 'AuthStack'}]);
          setTimeout(() => {
            dispatch(logOut());
          }, 2000);
        }}
        style={{margin: 20, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={{
            tintColor: 'red',
            height: 25,
            width: 25,
            resizeMode: 'contain',
            marginRight: 10,
          }}
          source={require('../assets/logout.png')}
        />
        <Text style={{color: 'red'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;
