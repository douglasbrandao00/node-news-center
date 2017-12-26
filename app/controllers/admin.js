module.exports.formAddNews = (application, req, res) => {
    return res.render('admin/form_add_news', {validacao: {}});
};

module.exports.saveNews = (application, req, res) => {
  req.assert('titulo'       , 'titulo é obrigatorio').notEmpty();
  req.assert('resumo'       , 'resumo é obrigatorio').notEmpty().len(10, 100);
  req.assert('autor'        , 'autor é obrigatorio').notEmpty();
  req.assert('data_noticia' , 'data_noticia é obrigatorio').notEmpty();

  var erros = req.validationErrors();

      if(erros){
          return res.render('admin/form_add_news', {validacao: erros});
      }
  const connection = application.config.dbConnection();
  let newsModel = new application.app.models.NoticiasDAO;

  newsModel.saveNews(req.body, connection, function(error, result){
    res.redirect('/news');
  });
};
