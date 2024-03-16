const { constants } = require("../constants")

function authUser(req,res,next){
    if (req.user==null) {
        res.status(constants.FORBIDDEN);
        res.send("You need to sign in");
    }
    next();
}

function authRole(role){
    return (req,res,next)=>{
        if(req.user.role !== role){
            res.status(constants.FORBIDDEN);
            return res.send('Not Allowed')
        }
        next();
    }
}
module.exports = {
    authUser,
    authRole
}