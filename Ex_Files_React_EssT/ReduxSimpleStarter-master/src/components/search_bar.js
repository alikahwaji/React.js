import React , {Component} from 'react'


class SearchBar extends Component {
    constructor(props){
    super(props)

    this.state = {term: ' '}


    } 

    render() {
        return (
            <div>
         <h4>Please enter your keyword</h4>
         
         <input  
         value = {this.state.term}
         onChange= {(event) => this.setState({term: event.target.value})}  />
         Value of the input : {this.state.term}
         </div>
        )
    }

    onInputChange(event) {
        
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