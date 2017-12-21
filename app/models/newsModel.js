module.exports = function () {

  this.getNews = (connection, callback) => {
    return connection.query('select * from noticias', callback);
  };
  this.saveNews = (news, connection, callback) => {
    return connection.query('insert into noticias set ?', news, callback);
  };
  return this;
}
