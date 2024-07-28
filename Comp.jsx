import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Comp = ({username,email,password}) => {
    return (
       <>
<Text style={styls.showText}>Name: {username}</Text>
<Text>Email: {email}</Text>
<Text>Password: {password}</Text>

       </>

    );
  };


  const styls=StyleSheet.create({
showText:{
   color:'red',
   fontSize:20
}
  })
  export default Comp;

