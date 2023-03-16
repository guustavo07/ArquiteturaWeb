module.exports.index = function (application, req, res) {
  var bancoModel = new application.src.models.banco()

  bancoModel.getBanco(function (err, result) {
    res.render('banco/index', { banco: result })
  })
}
