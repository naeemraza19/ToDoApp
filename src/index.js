import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Settings} from 'react-native';
import IntroPage from './screens/IntroPage';
import WelcomePage from './screens/WelcomePage';
import LogInPage from './screens/LogInPage';
import CreateAccountPage from './screens/CreateAccountPage';
import HomePage from './screens/HomePage';
import TabBar from './Components/TabBar';
import Categories from './screens/Categories';

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
      <Tab.Screen name="ProfileStack" component={HomeStack} />
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
      {/* <Stack.Screen name="Menu" component={Menu} /> */}
      {/* <Stack.Screen name="PlaceOrderPage" component={PlaceOrderPage} /> */}
      {/* <Stack.Screen name="OrderPage" component={OrderPage} /> */}
    </Stack.Navigator>
  );
}

// function ProfileStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       initialRouteName="ProfilePage">
//       <Stack.Screen name="ProfilePage" component={ProfilePage} />
//       <Stack.Screen name="Setting" component={Setting} />
//     </Stack.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="AuthStack">
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
