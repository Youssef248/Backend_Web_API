const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/create',(req,res,next)=>{
    let employee = req.body;
    query = "insert into employee (name,age,email) values(?,?,?)";
    connection.query(query,[employee.name,employee.age,employee.email],(err,results)=>{
        if(!err){
            return res.status(200).json({message: "Employee added to database successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.get('/read',(req,res,next)=>{
    var query = "select * from employee";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.patch('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let employee = req.body;
    var query = "update employee set name=?,age=?,email=? where id=?";
    connection.query(query,[employee.name,employee.age,employee.email,id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Employee id does not exist"});
            }
            return res.status(200).json({message:"Employee updated successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id;
    var query="delete from employee where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Employee id does not exist"});
            }
            return res.status(200).json({message:"Employee deleted successfully"});
        }else{
            return res.status(500).json(err);
        }
    });
});

module.exports = router;