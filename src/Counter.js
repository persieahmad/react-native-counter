import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around',
  },
  font: {
    fontSize: 20,
  },
});

class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={styles.font}>Increase</Text>
          </TouchableOpacity>
          <Text style={styles.font}>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={styles.font}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
