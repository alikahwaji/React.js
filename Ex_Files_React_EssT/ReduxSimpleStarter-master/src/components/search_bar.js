import React , {Component} from 'react'


class SearchBar extends Component {
    render() {
        return (
            <div>
         <h4>Please enter your keyword</h4>
         <input  onChange= {(event) => console.log(event.target.value)}  />
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