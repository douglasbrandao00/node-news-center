module.exports = function(application) {

	application.get('/news', function(req, res){

		var connection = application.config.dbConnection();
		var noticiasModel = application.app.models.newsModel;

		noticiasModel.getNews(connection, function(error, result){
			res.render("news/news", {news : result});
		});
	});

};
