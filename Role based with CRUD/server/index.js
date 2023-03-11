const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const mycon = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileupload());
app.use(express.urlencoded({extended:true}));

let c = mycon.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "Bala1997@",
    database : "mugunthan"
});

c.connect(function(error){
    if(error){console.log(error);}
    else{
        console.log('Database Connected');
    }
});

app.post('/Signup',(request,response)=>{

   let {name,mobile,email,pin,role} = request.body;
   
   let sql = 'insert into rolebased(username,password,name,mobile,email,pin,role,status) values (?,?,?,?,?,?,?,?)';

   c.query(sql,[email,pin,name,mobile,email,pin,role,0],(error,result)=>{
    if(error){
        let s = {"status":"error"}
        response.send(s);
    }
    else{
        let s = {"status":"success"};
        response.send(s);
    }
   })
})

app.post("/Signin",(request,response)=>{
    let {username,password} = request.body;

    let sql = 'select * from rolebased where username=?';

    c.query(sql,[username],(error,result)=>{
        if(error){
            let s = {"status":"syntax_error"};
            response.send(s);
        }
        else if(result.length > 0){
            let username1 = result[0].username;
            let password1 = result[0].password;
            let role = result[0].role;
            let id = result[0].id;

            if(username1 === username && password1 === password){
                let s = {"status":"success","id":id,"role":role};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid_details"};
                response.send(s);
            }
        }
        else{
            let s = {"status":"error"}
            response.send(s);
        }
    })
})


// role students to view details

app.get('/student_role',(request,response)=>{
    let sql = 'select * from rolebased where role = "STUDENT"' ;
    c.query(sql,(error,result)=>{
        if (error){

            response.send(error);
        }
        else{
            
            response.send(result);
        }
    })
})
// Role staff to view details

app.get('/staff_role',(request,response)=>{
    let sql = 'select * from rolebased where role = "STAFF" OR  role = "STUDENT"' ;
    c.query(sql,(error,result)=>{
        if (error){

            response.send(error);
        }
        else{
            
            response.send(result);
        }
    })
})

// Role admin to view details

app.get('/admin_role',(request,response)=>{
    let sql = 'select * from rolebased' ;
    c.query(sql,(error,result)=>{
        if (error){

            response.send(error);
        }
        else{
            
            response.send(result);
        }
    })
})

// to delete from admin dashboard

app.post('/delete_adminrole',(request,response)=>{
    let id= request.body.id;
    let sql = 'delete from rolebased where id=?';
    c.query(sql,[id],(error,result)=>{
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

//to update from admin side

app.get('/update/:id',(request,response)=>{
    let {id} = request.params;
    let sql = 'select * from rolebased where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})


app.put('/updatedata/:id',(request,response)=>{
    let {id} = request.params;
    let {name,mobile,email,pin,role} = request.body;
    console.log(email)
    let sql = 'update rolebased set name=?,mobile=?,email=?,pin=?,role=? where id=?';
    c.query(sql,[name,mobile,email,pin,role,id],(error,result)=>{
        console.log(email)
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


app.listen(3002,()=>{
    console.log("server running  3002");
})