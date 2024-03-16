const {ROLE, projects} = require('../data');
const { authUser } = require('../middlewares/basicAuth');

function canViewProject(user,project){
    return (
        user.role === ROLE.ADMIN || 
        project.userId === user.id
    )
}

function scopedProject(user,project){
    if (user.role === ROLE.ADMIN) return projects;
    return projects.filter(project => project.userId === user.id)
}

function canDeleteProject(user,project){
    return project.userId === user.id;
}

module.exports = {
    canViewProject,
    scopedProject,
    canDeleteProject
};