const asyncHandler = require('express-async-handler');
const { projects } = require('../data');
const {constants} = require('../constants');

const setProject = asyncHandler(async  (req, res,next) => {
    const projectId = parseInt(req.params.projectId);
    req.project = projects.find(project => project.id === projectId);

    if(req.project == null){
        res.status(constants.NOT_FOUND).json({message: 'No Project with that ID'});
    }
    next();
});

module.exports = setProject;