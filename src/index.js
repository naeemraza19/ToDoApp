import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavService from './config/NavService';
import {Image, Settings} from 'react-native';
import IntroPage from './screens/IntroPage';
import WelcomePage from './screens/WelcomePage';
import LogInPage from './screens/LogInPage';
import CreateAccountPage from './screens/CreateAccountPage';
import HomePage from './screens/HomePage';
import TabBar from './Components/TabBar';
import Categories from './screens/Categories';
import {useSelector} from 'react-redux';
import ProfilePage from './screens/ProfilePage';
import TaskPage from './screens/TaskPage';
import CurrentTask from './screens/CurrentTask';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="IntroPage">
      <Stack.Screen name="IntroPage" component={IntroPage} />
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
      <Stack.Screen name="LogInPage" component={LogInPage} />
      <Stack.Screen name="CreateAccountPage" component={CreateAccountPage} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomeStack"
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Add" component={() => {}} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="TaskPage" component={TaskPage} />
      <Stack.Screen name="CurrentTask" component={CurrentTask} />
      {/* <Stack.Screen name="OrderPage" component={OrderPage} /> */}
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="ProfilePage">
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      {/* <Stack.Screen name="Setting" component={Setting} /> */}
    </Stack.Navigator>
  );
}

function App() {
  const [initialRoute, setInitialRoute] = useState('AuthStack');
  const [ready, setReady] = useState(false);
  const user = useSelector(state => state.user.userData);
  useEffect(() => {
    setTimeout(() => {
      console.log(user, 'user');
      if (user != null) {
        setInitialRoute('AppStack');
      }
      setReady(true);
    }, 2000);
  }, []);
  if (!ready) return null;
  return (
    <NavigationContainer ref={ref => NavService.setTopLevelNavigator(ref)}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={initialRoute}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
