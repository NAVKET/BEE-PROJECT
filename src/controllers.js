const { response } = require("express");
const {todo} = require("./models");

//Reading

const gettodo = async(request,response)=>{
    var _id = request.query.id;
    if(_id){
        var Todos = await todo.findById(_id);
    }
    else{
        var Todos = await todo.find();
    }
    return response.json({status:"task"});
}

const addtodo = async(request,response)=>{
    console.log(request)
    await todo.create(request.body)
    return response.json({status:"added"})
}

const deletetodo = async(request,response) =>{
    var _id = request.query.id;
    var data = request.body;
    console.log(request.body)
    await todo.findByIdAndDelete(_id,data);
    return response.json({status:"deleted"})
}

const updatetodo = async(request,response) =>{
    var _id = request.query.id;
    var newdata = request.body;
    console.log(id,newdata);
    await todo.findByIdAndUpdate(_id,newData);
    const opts = {new:true, upsert: true};
    return response.json({status:"updated"})
}

module.exports={gettodo,addtodo,deletetodo,updatetodo}