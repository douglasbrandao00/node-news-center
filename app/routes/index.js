module.exports = (app) => {
  return app.get('/', (req, res) => {
    return res.render('home/index');
  });
};
