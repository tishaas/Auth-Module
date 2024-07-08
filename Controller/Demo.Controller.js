const Demo = require("../Model/Demo.Model");
const { StatusEnum, StatusMessages } = require("../Utils/Constant");
const { errorHandler } = require("../Utils/error");

module.exports ={
    AddDemo:async (req,res,next)=>{
        try{
            const results = await Demo(req.body).save()
            res.status(StatusEnum.SUCCESS).json({
                status: StatusEnum.SUCCESS,
                data: results,
                message: StatusMessages.SUCCESS,
            });

        }catch(error){
            res.status(StatusEnum.INTERNAL_SERVER_ERROR).json(errorHandler(error));
            next(error)
        }
    },
    UpdateDemo:async (req,res,next)=>{
        try{
            const results = await Demo.findByIdAndUpdate(req.query.id,req.body,{new:true})
            res.status(StatusEnum.SUCCESS).json({
                status: StatusEnum.SUCCESS,
                data: results,
                message: StatusMessages.SUCCESS,
            });
            return;
        }catch(error){
            res.status(StatusEnum.INTERNAL_SERVER_ERROR).json(errorHandler(error));
            next(error)
        }
    },
    DeleteDemo:async (req,res,next)=>{
        try{
            const results = await Demo.findByIdAndDelete(req.query.id)
            res.status(StatusEnum.SUCCESS).json({
                status: StatusEnum.SUCCESS,
                data: results,
                message: StatusMessages.SUCCESS,
            });
            return;

        }catch(error){
            res.status(StatusEnum.INTERNAL_SERVER_ERROR).json(errorHandler(error));
            next(error)
        }
    },
    GetDemo:async (req,res,next)=>{
        try{
            //pagination
            let page= req.query.page ||1;
            let limit=req.query.limit || 10;
            let skip = (page-1)*limit;

            if(req.query,id){
                const results = await Demo.findById(req.query.id).skip(skip).limit(limit).lean()
                res.status(StatusEnum.SUCCESS).json({
                    status: StatusEnum.SUCCESS,
                    data: results,
                    message: StatusMessages.SUCCESS,
                });
                return;
            }else{
                const results = await Demo.find().skip(skip).limit(limit).lean()
                const totalItem = await Demo.countDocuments(req.query.id);
               const totalPages = Math.ceil(totalItem / limit)
                res.status(StatusEnum.SUCCESS).json({
                    status: StatusEnum.SUCCESS,
                    data: results,totalPages,
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