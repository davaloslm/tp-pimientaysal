const platos = require("../data/platos.json");

const controller = {
    index: function(req, res, next) {
        res.render('index', {platos});
      },

}

module.exports = controller;