const express = require('express');
const router = express.Router();
const { projects } = require('../data')
const setProject = require('../middlewares/setProject');
const { authUser } = require('../middlewares/basicAuth');
const authGetProject = require('../middlewares/authGetProject');
const { scopedProject } = require('../permissions/project');
const authDeleteProject = require('../middlewares/authDeleteProject');

router.get('/', authUser, (req, res) => {
    res.json(scopedProject(req.user, projects));
});

router.get('/:projectId', setProject, authUser, authGetProject, (req, res) => {
    res.json(req.project);
});

router.delete('/:projectId',setProject, authUser, authDeleteProject, (req,res)=>{
    res.send('Deleted Project');
})
module.exports = router;