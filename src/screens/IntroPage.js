import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import React, {useState} from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const {width, height} = Dimensions.get('screen');

const IntroPage = props => {
  const [index, setIndex] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 20,
      }}>
      <Text style={{color: '#fff'}}>Skip</Text>
      <Image
        style={{
          width: width - 30,
          height: 300,
          resizeMode: 'contain',
        }}
        source={
          index === 0
            ? require('../assets/intro-image1.png')
            : index === 1
            ? require('../assets/intro-image2.png')
            : require('../assets/intro-image3.png')
        }
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 30,
        }}>
        <Image
          style={{
            height: 5,
            width: 40,
            resizeMode: 'contain',
            tintColor: index === 0 ? '#fff' : null,
          }}
          source={require('../assets/dash.png')}
        />
        <Image
          style={{
            height: 5,
            width: 40,
            resizeMode: 'contain',
            tintColor: index === 1 ? '#fff' : null,
          }}
          source={require('../assets/dash.png')}
        />
        <Image
          style={{
            height: 5,
            width: 40,
            resizeMode: 'contain',
            tintColor: index === 2 ? '#fff' : null,
          }}
          source={require('../assets/dash.png')}
        />
      </View>
      <View>
        {index === 0 ? (
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 30,
              fontWeight: '500',
            }}>
            Manage your tasks
          </Text>
        ) : index === 1 ? (
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 30,
              fontWeight: '500',
            }}>
            Create daily routine
          </Text>
        ) : (
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 30,
              fontWeight: '500',
            }}>
            Organize your tasks
          </Text>
        )}
      </View>
      <View>
        {index === 0 ? (
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              paddingVertical: 30,
              fontSize: 17,
            }}>
            You can easily manage all of your daily tasks in DoMe for free
          </Text>
        ) : index === 1 ? (
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              paddingVertical: 30,
              fontSize: 17,
            }}>
            In Uptodo you can create your personalized routine to stay
            productive
          </Text>
        ) : (
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              paddingVertical: 30,
              fontSize: 17,
            }}>
            You can organize your daily tasks by adding your tasks into separate
            categories
          </Text>
        )}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 50,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            // disabled={index <= 0 ? true : false}
            onPress={() => {
              LayoutAnimation.linear();
              setIndex(index - 1);
            }}>
            <View>
              {index === 1 ? (
                <Text style={{color: '#fff'}}>Back</Text>
              ) : index === 2 ? (
                <Text style={{color: '#fff'}}>Back</Text>
              ) : null}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={index >= 2 ? true : false}
            onPress={() => {
              LayoutAnimation.linear();
              setIndex(index + 1);
            }}
            style={{
              backgroundColor: '#8875FF',
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}>
            <View>
              {index === 0 ? (
                <Text style={{color: '#fff'}}>Next</Text>
              ) : index === 1 ? (
                <Text style={{color: '#fff'}}>Next</Text>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('WelcomePage');
                  }}>
                  <Text style={{color: '#fff'}}>Continue</Text>
                </TouchableOpacity>
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default IntroPage;
