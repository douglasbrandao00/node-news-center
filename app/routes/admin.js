module.exports = (application) => {
  application.get('/admin', (req, res) => {
    return application.app.controllers.admin.formAddNews(application, req, res);
  });

  application.post('/admin/save', (req, res) => {
    return application.app.controllers.admin.saveNews(application, req, res);
  });
};
