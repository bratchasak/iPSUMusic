import React from 'react';
import { 
	StyleSheet
} from 'react-native';
import {
	Content,
	List,
	ListItem,
	Left,
	Body,
	Right,
	Text,
	Thumbnail,
	Spinner,
	Icon
} from 'native-base';
import _ from 'lodash';

const initialStates = {
	isReady: false,
	data: []
}

export default class MusicList extends React.Component {
	constructor(props) {
		super(props);

		this.state = initialStates;
	}	

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
    const uri = 'https://rss.itunes.apple.com/api/v1/th/apple-music/coming-soon/all/25/explicit.json'
    
		fetch(uri)
      .then(resp => resp.json())
      .then(respJson => {
        const data = _.orderBy(respJson.feed.results, ['name'], ['asc'])
        
        this.setState({ 
          data,
					isReady: true
				})
       })
      .catch((error) => {
        console.error(error)
      });
	}

	render() {
		const { data, isReady } = this.state;

		return (
      <Content>
        {
          !isReady ? (            
            <Spinner color="red" />
          ) : (
            <List>
            {
              data.map((value, index) => {
                return (
                  <ListItem key={index} thumbnail style={styles.item}>
                    <Left>
                      <Thumbnail square source={{ uri: value.artworkUrl100 }} />
                    </Left>
                    <Body>
                      <Text>{value.name}</Text>
                      <Text note>{value.artistName}</Text>
                    </Body>
                    <Right>
                      <Icon type="SimpleLineIcons" name="arrow-right" />
                    </Right>
                  </ListItem>
                )
              })
            }						
            </List>
          )
        }					
      </Content>
		)
	}
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#FFFFFF'
	}
})