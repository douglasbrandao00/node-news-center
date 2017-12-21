module.exports = function(application) {

	application.get('/news', function(req, res){

		const connection = application.config.dbConnection();
		let newsModel = new application.app.models.NoticiasDAO;

		newsModel.getNews(connection, function(error, result){
			res.render("news/news", {news : result});
		});
	});

};
