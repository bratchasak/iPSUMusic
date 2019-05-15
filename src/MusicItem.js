import React from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Text,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Icon
} from 'native-base';

const MusicItem = ({ musicName, musicImageUri, artistName, ...props }) => (
  <ListItem thumbnail {...props} style={styles.item}>
    <Left>
      <Thumbnail square source={{ uri: musicImageUri }} />
    </Left>
    <Body>
      <Text>{musicName}</Text>
      <Text note>{artistName}</Text>
    </Body>
    <Right>
      <Icon type="SimpleLineIcons" name="arrow-right" />
    </Right>
  </ListItem>
)
export default MusicItem;

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#FFFFFF'
	}
})