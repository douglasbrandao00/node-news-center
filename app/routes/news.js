module.exports = function(application) {

	application.get('/news', function(req, res){
		return application.app.controllers.news.newsControllers(application, req, res);
	});

};
