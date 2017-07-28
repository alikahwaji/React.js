import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDt6CGw_cRrHbeN_1T7VK5N_131Nlm8oBA'

const App =  () => {
    return (<div> 
        <SearchBar />
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.container'))


