var express =require ('express')
var app = express ()
var port =3000

app.get('*', function(request, response){
    response.send('Hello world my name is Ali')
})

app.listen(port, function(){
    console.log('The server is running,' + 'please open your browser at your local host port')
})