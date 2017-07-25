const { render } = ReactDOM

render(
	<h1 id='title'
		className='header'
		style={{backgroundColor: 'orange', color: 'black', fontFamily: 'verdana'}}>
	Hello World	Ali
	</h1>,
	document.getElementById('react-container')
)