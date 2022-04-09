const express = require('express')
const app = express()
const port = 3000


app.get("/suma/:num1/:num2",  (req, res) =>{
  let num1= Number(req.params.num1)
  let num2= Number(req.params.num2)
  let resultado= num1 + num2
  res.status(200).json({result: resultado})
})

app.get('/resta/:num1/:num2',(req,res)=>{
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    let resultado = num1 - num2;
    if (num1 <= 0  || num2 <= 0) 
    {
        res.status(400).json({ msg:'No se devuelven números negativos'});
    }
    else {
        res.status(200).json({msg: resultado});
    }
    
});

app.get("/nombre", (req, res) =>{
  let nombre= req.query.nombre
  res.status(200).json({msg: `Daniela`})
})

app.get("/apellido", (req, res) =>{
    let apellido= req.query.apellido
    res.status(200).json({msg: `Abrego`})
  })

  
app.listen(port, () => {
  console.log(`Example app http://localhost:${port}`)
})