import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, Image } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { Button } from 'native-base';
import Logo from './src/icons/Logo.png';

import Home from './src/views/home'

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ height: 30, aspectRatio: 5.0 }}
      source={Logo}
    />
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerStyle: {height: 70},
          headerRight: () => (
            <Grid>
              <Col>
                <Button bordered danger style={styles.signIn} onPress={() => alert('Redirects to Login')}>
                  <Text style={styles.signInText}>Sign In</Text>
                </Button>
              </Col>
              <Col>
                <Button danger style={styles.signUp} onPress={() => alert('Redirects to Register')}> 
                  <Text style={styles.signUpText}>Sign Up</Text>
                </Button>
              </Col>
            </Grid>
          ),
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  signIn: {
    marginLeft: 10,
    marginTop: 15,
    height: 40,
    color: "#FF6185",
  },
  signUp: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    height: 40,
    color: "#FFFFFF",
  },
  signInText: {
    marginLeft: 10,
    marginRight: 10,
    color: "#FF6185",
  },
  signUpText: {
    marginLeft: 10,
    marginRight: 10,
    color: "#FFFFFF",
  },
})

export default App;