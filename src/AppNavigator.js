import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'

import MusicList from './MusicList'
import MusicDetail from './MusicDetail'

const AppNavigator = createStackNavigator({
    List: MusicList,
    Detail: MusicDetail
}, {
    initialRouteName: 'List'
})
export default createAppContainer(AppNavigator)