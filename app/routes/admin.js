module.exports = (application) => {
  application.get('/admin', (req, res) => {
    return res.render('admin/form_add_news');
  });

  application.post('/admin/save', (req, res) => {
		const connection = application.config.dbConnection();
		let newsModel = new application.app.models.NoticiasDAO;

		newsModel.saveNews(req.body, connection, function(error, result){
			res.redirect('/news');
		});
  });
};
