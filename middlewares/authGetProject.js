const AsyncHandler = require("express-async-handler");
const { canViewProject } = require("../permissions/project");
const { constants } = require("../constants");



const authGetProject = AsyncHandler(async (req,res,next)=>{
    if (!canViewProject(req.user, req.project)) {
        res.status(constants.FORBIDDEN);
        return res.send("Not Allowed")
    }
    next();
});

module.exports = authGetProject;