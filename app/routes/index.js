module.exports = (application) => {
  return application.get('/', (req, res) => {
    return application.app.controllers.home.home(application, req, res);
  });
};
