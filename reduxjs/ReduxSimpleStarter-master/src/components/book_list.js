import React, {Component} from 'react'

export default class BookList extends Component {
    render(){
        return (
            <ul className='list-griop col-sm-4'>
                {this.renderList()}
                </ul>
            
        )

    }
}