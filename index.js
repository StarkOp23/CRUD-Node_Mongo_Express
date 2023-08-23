const express = require('express');
require('dotenv').config();
let app = express();

//! Used to accept json data from the body.
app.use(express.json())

//! Require teacher.routes.js
const teacherRoutes = require('./routes/teacher.routes')


//! Connection Require
require('./adapter/connectionDB');


app.use('/api/teacher', teacherRoutes)


//! Page Not Found
app.use('*', (req, res, next) => [
    res.status(404).send({ message: 'Page not found' })
])


app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})