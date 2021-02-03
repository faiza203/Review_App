import React from 'react';
import { StyleSheet } from 'react-native';
import GetLocation from './components/location'
export default function App() {
  const location = ()=> {
    console.log("Your location is Manawala");
  }
  return ( 
    <GetLocation location={location} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
