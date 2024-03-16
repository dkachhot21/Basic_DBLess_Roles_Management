const express = require('express');
const app = express();
const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv').config();
const projectRouter = require('./routes/projects')
const setUser = require('./middlewares/setUser')
const {authUser, authRole} = require('./middlewares/basicAuth')
const { ROLE } = require('./data')
const PORT = process.env.PORT || 3000;



//Middlewares
app.use(express.json());
app.use(setUser);
app.use('/projects', projectRouter);


//Routes
app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/dashboard', authUser, (req, res) => {
    res.send('Dashboard Page');
});

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
    res.send("Admin Page");
});



//Starting the server
app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
});