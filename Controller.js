const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');
const db = require('./models');


const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
let usuarios=models.Usuarios;
/*
app.get('/create',async (req,res)=>{
    let create=await usuarios.create({ 
        name: "Joao", 
        password: "123",
        createAt: new Date(),
        updateAt: new Date(),
    });
    res.send('Usuário criado com sucesso!');
});

app.get('/read',async (req,res)=>{
    let read = await user.findAll(options={
        raw: true   
    });
    console.log(read);
});

app.get('/update',async (req,res)=>{
    let update = await user.findByPk(1).then((response)=>{
        response.name='Luan';
        response.password='Luan';
        response.save();
    })
});

app.get('/delete',async (req,res)=>{
    user.destroy({
        where: {id:3}
        })
    });
*/

app.post('/login',async (req,res)=>{
    let response = await usuarios.findOne({
        where:{email:req.body.email, password:req.body.password}
    });
    if(response === null){
        res.send(JSON.stringify(value= 'error'));
    }else{
        res.send(response);
    }
});



app.post('/create',async (req,res)=>{
    let response = await usuarios.create({
    email: req.body.email,
    password: req.body.password,
    namepet: req.body.namepet,
    phone: req.body.phone,
    racapet: req.body.racapet,
    generpet: req.body.generpet,
    agepet: req.body.agepet,
    interessepet: req.body.interessepet,
    descpet: req.body.descpet,
    createAt: new Date(),
    updateAt: new Date(),
    });
    if(response === null){
        res.send(JSON.stringify(value= 'error'));
    }else{
        res.send('Usuário criado com sucesso!');
    }
});



/*app.use(express.json());
app.use(cors());
app.get('/create', async (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const namepet = req.body.namepet;
    const phone = req.body.phone;
    const racapet = req.body.racapet;
    const generpet = req.body.generpet;
    const agepet = req.body.agepet;
    const interessepet = req.body.interessepet;
    const descpet = req.body.descpet;

    db.query("SELECT * FROM usuarios WHERE email = ?", {email}, 
    (err, res) => {
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            db.query("INSERT INTO usuarios (email,password,namepet,phone,racapet,generpet,agepet,interessepet,descpet) VALUES (?,?,?,?,?,?,?,?,?)",
            [email,password,namepet,phone,racapet,generpet,agepet,interessepet,descpet], (err, result) =>{
                if(err){
                    res.send(err);
                }
                res.send({msg: "Cadastrado com sucesso!"});
            });
        }else{
            res.send({msg: "Usuário já existe"});
        }
    });

});*/

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor rodando...')
});