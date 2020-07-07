import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import { connect, changeRoom } from './store'

export class Buttons extends React.Component {

  clickHandler(roomSelection) {
    changeRoom(roomSelection);
  }

  createRoomButtons(adjacentRooms) {
    let rooms = adjacentRooms;
    let buttons = []

    rooms.map(room => (
      buttons.push(
        <VrButton key={`${room}-button`} onClick={() => this.clickHandler(room)}>
          <Text style={{backgroundColor: 'green'}}>{room}</Text>
        </VrButton>
      )
    ));

    return buttons;
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text>Room Selection</Text>
          <Text>{ this.props.room }</Text>
          { this.createRoomButtons(this.props.adjacentRooms) }
        </View>
      </View>
    );
  }
};

export default class HouseInfoPanel extends React.Component {

  render() {
    return (
      <View style={styles.panel}>
        <View>
          <Text>Room Selection</Text>
          <Text>{ this.props.room }</Text>
        </View>
      </View>
    );
  }
};

const ConnectedButtons = connect(Buttons);
const ConnectedHouseInfoPanel = connect(HouseInfoPanel);

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection:'row', 
    justifyContent: 'space-between',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  }
});

AppRegistry.registerComponent('ConnectedButtons', () => ConnectedButtons);
AppRegistry.registerComponent('ConnectedHouseInfoPanel', () => ConnectedHouseInfoPanel);
