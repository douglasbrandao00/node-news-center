module.exports = (application) => {
  application.get('/admin', (req, res) => {
    return res.render('admin/form_add_news');
  });
  
  application.post('/admin/save', (req, res) => {
		const connection = application.config.dbConnection();
		const noticiasModel = application.app.models.newsModel;

		noticiasModel.saveNews(req.body, connection, function(error, result){
			res.redirect('/news');
		});
  });
};
