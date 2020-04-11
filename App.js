/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';

import AsyncStorageTest from './examples/AsyncStorageTest';

type Props = {};
type State = {restarting: boolean, currentTest: Object};

export default class App extends Component<Props, State> {
  state = {
    restarting: false,
  };



  render() {
    const {restarting, currentTest} = this.state;
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.testPickerContainer}>
          <Button
            testID="testType_getSetClear"
            title="Init record"
            onPress={() => AsyncStorageTest.initDbData()}
          />
          <Button
              testID="testType_getSetClear"
              title="Append to DB"
              onPress={() => AsyncStorageTest.appendToDbData()}
          />
          <Button
            testID="testType_mergeItem"
            title="Read DB"
            onPress={() => AsyncStorageTest.getDbData()}
          />
        </View>

        <View style={{marginTop:30}}>
          <Text style={styles.instructions}>
            1) click "Init record";
          </Text >
          <Text style={styles.instructions}>
            2) click "Append to DB";
          </Text>
          <Text style={styles.instructions}>
            3) click "Read DB" repeatly;
          </Text>
          <Text style={[styles.msg, {textAlign: 'center'} ]}>
            You will see memory raise when click "Read DB".
          </Text>
        </View>

        <View style={{marginTop:30, backgroundColor:'#c9c9c9'}}>
          <Text style={styles.msg}>
            After init, will get a record of about 37KB ~
          </Text>
          <Text style={styles.msg}>
            Every 'Append to DB' click, will increase about 1.1MB data to record ~
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 8,
  },
  exampleContainer: {
    padding: 16,
    backgroundColor: '#FFF',
    borderColor: '#EEE',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
  },
  exampleTitle: {
    fontSize: 18,
  },
  exampleDescription: {
    color: '#333333',
    marginBottom: 16,
  },
  exampleInnerContainer: {
    borderColor: '#EEE',
    borderTopWidth: 1,
    paddingTop: 10,
    flex: 1,
  },
  restartButton: {
    padding: 6,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  closeKeyboardView: {
    width: 5,
    height: 5,
  },
  testPickerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  instructions: {
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
    marginBottom: 5,
  },
  msg: {
    textAlign: 'center',
    color: '#f3472d',
    fontSize: 14,
    marginBottom: 5,
  },
});
