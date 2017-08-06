//Only need one function from Redux
const createStore =require('redux').createStore

//The initial state of our Store 
const initialState = {
    count : 0
}

//Passed into createStore and later called by the stroe 
const reducer =(state = initialState , action) => {
    switch (action.type) {
        case 'ADD' :
        return {
            count : state.count +1
        }

        case 'SUB':
        return {
            count: state.count -1
        }

        case 'DEL' :
        return {
            count: state.count -state.count
        }

        //Always have a default that returns the state passed in
        default: //will be initialState when the stroe is created
        return state
    }
}

//We need a stroe and it needs the reducer 
const store = createStore(reducer)

//This is our subscription function 
const showCount = () => {
    const state =store.getState()
    console.log(state.count)
}

//Our subscription 
store.subscribe(showCount)

//Make some thing happen
store.dispatch({type: 'ADD'})
store.dispatch({type: 'ADD'})
store.dispatch({type: 'DEL'})
store.dispatch({type: 'ADD'})
store.dispatch({type: 'SUB'})
store.dispatch({type: 'SUB'})
store.dispatch({type: 'ADD'})

