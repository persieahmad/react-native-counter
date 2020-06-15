import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStore} from 'redux';
import Counter from './src/Counter';
import {Provider} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return {counter: state.counter + 1};
    case 'DECREASE_COUNTER':
      return {counter: state.counter - 1};
  }
  return state;
};

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Counter />
        </Provider>
      </View>
    );
  }
}

export default App;
