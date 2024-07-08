const User = require("../Model/User.Model");
const bcrypt = require("bcryptjs")
const jwt = require('../Utils/jwtToken');

const { Messages, StatusMessages, StatusEnum } = require("../Utils/Constant");
const { errorHandler } = require("../Utils/error");
module.exports ={
    Register:async (req,res,next)=>{
        try{
            const data = await User.findOne({email:req.body.email})
            if(data){
                res.status(StatusEnum.ALREADY_EXIST).json({
                    status: StatusEnum.ALREADY_EXIST,
                    data: StatusMessages.ALREADY_EXIST,
                    message: Messages.Email_Already_Registered
                  });
                return;
            }else{
                // const salt = await bcrypt.genSalt(10)
                // const hashpassword =await bcrypt.hash(req.body.password,salt)
                // const user =new User({
                //     ...req.body,
                //     password:hashpassword
                // })
                const results = await User(req.body).save()
                res.status(StatusEnum.SUCCESS).json({
                    status: StatusEnum.SUCCESS,
                    data: results,
                    message: StatusMessages.SUCCESS,
                  });
                return;
            }

        }catch(error){
            res.status(StatusEnum.INTERNAL_SERVER_ERROR).json(errorHandler(error));
            next(error)
        }
    },
    Login:async (req,res,next)=>{
        try{
            
            let data = await User.findOne({email:req.body.email,password:req.body.password})
            if(!data){
                res.status(StatusEnum.NOT_FOUND).json({
                    status: StatusEnum.NOT_FOUND,
                    data: StatusMessages.NOT_FOUND,
                    message: Messages.User_Not_Found
                  });
                return;
            }else{
                let token = jwt.generateToken(
                    { email: req.body.email, password: req.body.password },
                    jwt.secretKey() // Token expiry time
                );                
                const results ={data,token}
                
                res.status(StatusEnum.SUCCESS).json({
                    status: StatusEnum.SUCCESS,
                    data: results,
                    message: StatusMessages.SUCCESS,
                  });
                return;               
            }
        }catch(error){
            res.status(StatusEnum.INTERNAL_SERVER_ERROR).json(errorHandler(error));
            next(error)
        }
    }
}
