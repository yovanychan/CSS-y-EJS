/*const http = require ('http')
const server = http.createServer((req, res) => {
    res.end('Estoy respondiendo desde el servidor v3')
}) 

const port = 3000;
server.listen(port, () =>{
    console.log('Escucho solicitudes')
})*/

const express = require ('express')
const app = express()
const port = 3000
app.set('view engine','ejs')
app.set('views',__dirname + '/views')



app.use(express.static(__dirname + "/public" ))

app.get('/',(req,res)=>{
    res.render("index",{
        titulo : "Estamos en el Inicio"
    })
})
app.get('/404',(req,res)=>{
    res.render("404",{
        tituloP : "Error",
        titulo : "Página no encontrada, favor de revisar tu URL"
    })
})
app.get('/contactanos',(req,res)=>{
    res.render("contactanos",{
        tituloP : "Biblioteca-ML",
        titulo : "Página de Contáctanos"

    })
})


app.get('/contactanos',(req,res)=>{
    res.send('ESTAMOS EN CONTACTANOS')
})

/*app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + "/public/404.html")
}) */


app.listen(port,()=>{
    console.log('Servidor OK, en el puerto',port)
}) 