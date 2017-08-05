import React , {Component} from 'react'


class SearchBar extends Component {
    constructor(props){
    super(props)

    this.state = {term: ' '}


    } 

    render() {
        return (
            <div className='search-bar'>
         <h4>Please enter your keyword</h4>
         
         <input  
         value = {this.state.term}
         onChange= {event => this.onInputChange(event.target.value)}  />
        
         </div>
        )
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
        
    }


}

// const SearchBar = () => {
//     return (
//         <div>
//     <h4>Please enter your keyword</h4>
//     <input />
//     </div>
//     )
// }

export default SearchBar

 //Value of the input : {this.state.term}