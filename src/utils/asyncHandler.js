// const asyncHandler =()=>{}

export { asyncHandler }

const asyncHandler = (fn) => async (err,req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        console.log('error in async handler',error);
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
}


