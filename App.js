/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, View,

} from 'react-native';

import Animation from "./src/animation_circle"

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}></View>
        <Animation />
      </SafeAreaView>
    </>
  );
};



export default App;
