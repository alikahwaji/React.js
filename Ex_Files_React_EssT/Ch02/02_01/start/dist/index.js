const title = React.createElement( //creatElement is a function
    'h1', { id: 'title', className: 'header' },
    'Helllo World'
)

reactDOM.render(
    title,
    document.getElementById('react-container')
)