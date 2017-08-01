import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCfN--LKrgypPYXWtgAlYjLL5RuL7Jl6fE'

const App =  () => {
    return (
    <div>
        <h3>Ali Kahwaji</h3>
        <p>Project Sports</p>
        <SearchBar />
    </div>
    )
}


ReactDOM.render(<App />, document.querySelector('.container'));

