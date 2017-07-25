const { createElement } = React
//const { render } = ReactDOM

// const style = {
// 	backgroundColor : 'red',
// 	color: 'white',
// 	fontFamily: 'verdana'
// }
// const title = createElement(
// 	'h1',
// 	{id: 'title', className: 'header', style: style},
// 	'Hello World'
// )

render(
	<h1 id ='title' className = 'header' style = {{backgroundColor: 'orange', color: 'black' , fontFamily: 'verdana'}}>
	Hollow World Ali</h1>,
	document.getElementById('react-container')
) // JSX