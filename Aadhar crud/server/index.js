const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bodyparser = require('body-parser');
const data = require('mysql');
const {request, response}=require('express');

const add = express();
add.use(cors());
add.use(fileupload());
add.use(bodyparser.json());
add.use(express.json());
add.use(bodyparser.urlencoded({extended:true}));
add.use(express.static('public'));

let c= data.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Bala1997@",
    database : "radical"
})

c.connect(function(error){
    if(error){
        console.log("error");
    }
    else{
        console.log("database connected");
    }
})

add.post('/add',(request,response)=>{
    let {firstname,lastname,mobile,email,gender,dob,aadhaar,address}=request.body;
    let sql = 'insert into studentsdb(firstname,lastname,mobile,email,gender,dob,aadhaar,address) values(?,?,?,?,?,?,?,?)';
    c.query(sql,[firstname,lastname,mobile,email,gender,dob,aadhaar,address],(error,result)=>{
        if (error){
            let b={"status":"error"};
            console.log(error);
            response.send(b);
        }
        else{
            let b={"status":"success"};
            response.send(b);
        }
    })
})

add.get('/studentsdb',(request,response)=>{
    let sql = 'select * from studentsdb';
    c.query(sql,(error,result)=>{
        if (error){

            response.send(error);
        }
        else{
            
            response.send(result);
        }
    })
})

add.post('/delete',(request,response)=>{
    let sno= request.body.sno;
    let sql = 'delete from studentsdb where sno=?';
    c.query(sql,[sno],(error,result)=>{
        if (error){
            let s = {"status": "error"};
            response.send(s);
        }
        else{
            let s= {"status":"success"};
            response.send(s);
        }
    })
})

add.get('/update/:sno',(request,response)=>{
    let {sno} = request.params;
    let sql = 'select * from studentsdb where sno=?';
    c.query(sql,[sno],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

add.put('/updatedata/:sno',(request,response)=>{
    let {sno} = request.params;
    let {firstname,lastname,mobile,email,gender,dob,aadhaar,address} = request.body;
    let sql = 'update studentsdb set firstname=?,lastname=?,mobile=?,email=?,gender=?,dob=?,aadhaar=?,address=? where sno=?';
    c.query(sql,[firstname,lastname,mobile,email,gender,dob,aadhaar,address,sno],(error,result)=>{
        if(error){
            let b = {"status":"error"};
            response.send(b);
        }
        else{
            let b = {"status":"success"};
            response.send(b);
        }
    })
})

add.listen(3012,()=>{
    console.log("server running  3012");
})
