import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyCfN--LKrgypPYXWtgAlYjLL5RuL7Jl6fE'



class App extends Component {
    constructor(props) {
    super(props)

    this.state = {videos : []}
    YTSearch ({key: API_KEY, term: 'football'}, (videos) => {
    this.setState({videos})
})
    }

    render() {
        return (
    <div>
        <h3>Ali Kahwaji</h3>
        <p>Project Sports</p>
        <SearchBar />
        <VideoList  videos={this.state.videos}/>
    </div>
    )
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));

