const newRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
    //action -> dispatcher -> function handler(callback function)
    //    app.get('/news', (req, res) => {
    //      res.render('news');
    //    })
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;