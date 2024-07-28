/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet, ScrollView } from 'react-native';
import Comp from './Comp';

const App = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showComp, setShowComp] = useState(false);

  const handleButtonClick = () => {
    setShowComp(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your name here"
        value={userName}
        onChangeText={(text) => setUserName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Type your email here"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Type your password here"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
     
      <Text onPress={handleButtonClick} />
      {showComp && <Comp username={userName} email={email} password={password} />}
    </View>
  );
};

const styles = StyleSheet.create({
  showtext:{
height:100,
width:100,
backgroundColor:'red',
margin:5,
flex:1,
flexDirection:'row',
padding:5  },
  container: {
 
    padding: 20,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 5,
  },
});

export default App;
