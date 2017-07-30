import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDt6CGw_cRrHbeN_1T7VK5N_131Nlm8oBA'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: []}
        YTSearch({key: API_KEY, term:'surfboards'}, (videos)=> {
     this.setState({videos})
})
    }
    render (){
        return (
        <div> 
        <SearchBar />
        <videoList videos={this.state.videos}/>
    </div>
    )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))


