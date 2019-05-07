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
	}	

	static navigationOptions = {
    title: 'Music List'
  };

	componentDidMount() {
		this.fetchData();
	}

	async fetchData() {
		await fetch('http://localhost:3000/results')
      .then(response => response.json())
      .then(jsonData => {
        const data = _.orderBy(jsonData, ['name'], ['asc'])
        this.setState({ 
					isReady: true,
					data: data
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
                  <MusicItem 
										key={index}
										musicName={value.name}
										musicImageURI={value.artworkUrl100}
										artistName={value.artistName}
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