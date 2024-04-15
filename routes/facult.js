const express=require('express');
const facultcontroller=require('../controller/facult');
const router=express.Router();
const users=require('../MOCK_DATA.json');
router.use(express.json());


router.get('/',(req,res)=>{
    //res.end('<h1>this is get repeat</h1>')
    facultcontroller.getData(req,res);
})
router.post('/facult/create',(req,res)=>{//run using postman
   // res.end('<h1>this is post req</h1>')
    facultcontroller.createData(req,res);
})
router.put('/facult/update/:id',(req,res)=>{
    //res.end('<h1>this is put req</h1>')
    facultcontroller.updateData(req,res);
})
router.delete('/facult/delete/:id',(req,res)=>{
    //res.end('<h1>this is delete req</h1>')
    facultcontroller.deleteData(req,res);
})
router.get("/getById/:id", (req, res) => {
    //   let id = req.params.id;
    //   const user = users.find((user) => user.id === parseInt(id));
    //   res.json(user);
    facultController.getById(req, res);
  });
module.exports=router;