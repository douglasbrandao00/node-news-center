function NoticiasDAO(){
};

NoticiasDAO.prototype.getNews = (connection, callback) => {
  return connection.query('select * from noticias', callback);
};

NoticiasDAO.prototype.saveNews = (news, connection, callback) => {
  return connection.query('insert into noticias set ?', news, callback);
};


module.exports = function () {
  return NoticiasDAO;
}
