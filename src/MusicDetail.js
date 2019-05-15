import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Image
} from 'react-native'
import {
  Content,
  Text
} from 'native-base'

export default class MusicDetail extends React.Component {

  static navigationOptions = {
    title: 'Detail'
  }

  render() {
    const { navigation } = this.props

    const musicName = navigation.getParam('musicName')
    const musicImageUri = navigation.getParam('musicImageUri')
    const artistName = navigation.getParam('artistName')
    const genreName = navigation.getParam('genreName')

    return (
      <Content>
        <View style={styles.imageSection}>
          <Image source={{ uri: musicImageUri }} style={styles.image} />
        </View>
        <View style={styles.rowSection}>
          <View style={styles.rowTitle}>
            <Text style={styles.title}>{musicName}</Text>
          </View>
          <View style={styles.rowDetail}>
            <Text style={styles.label}>Artist</Text>
            <Text style={styles.value}>{artistName}</Text>
          </View>
          <View style={styles.rowDetail}>
            <Text style={styles.label}>Genre</Text>
            <Text style={styles.value}>{genreName}</Text>
          </View>
        </View>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  imageSection: {
    flex: 1
  },
  rowSection: {
    flex: 1,
    paddingHorizontal: 10
  },
  rowTitle: {
    paddingVertical: 10
  },
  rowDetail: {
    marginBottom: 10
  },
  image: {
    height: Dimensions.get('window').height * 0.35,
    width: undefined
  },
  title: {
    fontSize: 24,
    paddingVertical: 10
  },
  label: {
    color: '#636e72',
    fontSize: 16
  },
  value: {
    fontSize: 16
  }
})