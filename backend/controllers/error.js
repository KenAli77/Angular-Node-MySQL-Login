
// middleware for handling errors

exports.get404 = (req,res,next) => {

    const error = new Error('Not found.');
    
    error.statusCode = 404;

    nex(error);

}

exports.get500 = (error,req,res,next) => {

   const data = error.data;
   res.status()
   res.json({
    error:{
        message:error.message,
        data:data
    }
   })

}