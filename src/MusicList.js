import React from 'react';
import {
	Content,
	List,
	Spinner
} from 'native-base';
import MusicItem from './MusicItem';
import _ from 'lodash';

const initialStates = {
	isReady: false,
	data: []
}

export default class MusicList extends React.Component {
	constructor(props) {
		super(props);

		this.state = initialStates;
		this._handlePressItem = this._handlePressItem.bind(this)
  }	
  
  static navigationOptions = {
    title: 'All Music'
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
  
  _handlePressItem(id) {
    const uri = 'https://itunes.apple.com/lookup?id='+id

    fetch(uri)
      .then(resp => resp.json())
      .then(respJson => {
        if (respJson.resultCount > 0) {
          const result = respJson.results[0]

          const data = {
            musicName: result.collectionName,
            musicImageUri: result.artworkUrl100,
            artistName: result.artistName,
            genreName: result.primaryGenreName
          }
          this.props.navigation.navigate('Detail', data)
        }
      })
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
									<MusicItem 
										key={index}
										musicName={value.name}
										musicImageURI={value.artworkUrl100}
                    artistName={value.artistName}
                    onPress={() => this._handlePressItem(value.id)}
									/>
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