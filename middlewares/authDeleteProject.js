const AsyncHandler = require("express-async-handler");
const { constants } = require("../constants");
const { canDeleteProject } = require("../permissions/project");


const authDeleteProject = AsyncHandler(async (req,res,next)=>{
    if (!canDeleteProject(req.user, req.project)) {
        res.status(constants.FORBIDDEN);
        return res.send("Not Allowed")
    }
    next();
});

module.exports = authDeleteProject;