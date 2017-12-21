module.exports = (application) => {
  application.get('/admin', (req, res) => {
    return res.render('admin/form_add_news');
  });

  application.post('/admin/save', (req, res) => {
    req.assert('titulo'       , 'titulo é obrigatorio').notEmpty();
    req.assert('resumo'       , 'resumo é obrigatorio').notEmpty().len(10, 100);
    req.assert('autor'        , 'autor é obrigatorio').notEmpty();
    req.assert('data_noticia' , 'data_noticia é obrigatorio').notEmpty();

		const connection = application.config.dbConnection();
		let newsModel = new application.app.models.NoticiasDAO;

		newsModel.saveNews(req.body, connection, function(error, result){
			res.redirect('/news');
		});
  });
};
