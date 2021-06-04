class NewsController {
    //[GET]/news
    index(req, res) {
        res.render('news');
    }

    //[GET]/news/:detail
    show(req, res) {
        res.send('new Detail');
    }
}
module.exports = new NewsController();
