module.exports.newsControllers = (application, req, res) => {
		const connection = application.config.dbConnection();
		let newsModel = new application.app.models.NoticiasDAO;

		newsModel.getNews(connection, function(error, result){
			res.render("news/news", {news : result});
		});
};
