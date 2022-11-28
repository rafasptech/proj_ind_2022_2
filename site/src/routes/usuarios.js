var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
router.post("/inserir", function (req, res) {
    usuarioController.inserir(req, res);
})
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/cadastrarItens", function (req, res) {
    usuarioController.cad(req, res);
});

router.get("/pegarMercadoria", function (req, res) {
    usuarioController.pegarMercadoria(req, res);
});

module.exports = router;