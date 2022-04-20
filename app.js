const express = require('express')
const {get} = require('express/lib/response')


const app = express() 


app.use(express.static('public'))


app.get('/', (req, res, next)=>{
    res.send('<h1> Bienvenidos a Mi pagina </h1>')
})




// otra ruta que es donde mandamos el html 

app.get('/about', (req ,res , next)=>{
    res.sendFile(__dirname + '/views/about.html') //<== para mandar un archivo html 
})

app.get('/homepage', (req ,res , next)=>{
    res.sendFile(__dirname + '/views/homepage.html') //<== para mandar un archivo html 
})

app.get('/works', (req ,res , next)=>{
    res.sendFile(__dirname + '/views/works.html') //<== para mandar un archivo html 
})



//correr servidor 

app.listen(3000, ()=>{
    console.log('estoy corriendo en el puerto 3000')
})

