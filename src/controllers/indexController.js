const platos = require("../data/platos.json");

const controller = {
    index: function(req, res, next) {
        res.render('index', {platos});
      },
    detalle:  (req, res)=>{
      const {id} = req.params;
      const plato = platos.find(plato=>plato.id===parseInt(id))
      res.render("detalleMenu", {plato});
      
  }

}

module.exports = controller;