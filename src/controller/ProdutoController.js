const { update } = require("../model/produto");
const Produto = require("../model/produto");


module.exports = {
    async index(req, res) {
        const produto = await Produto.findAll();
        return res.json(produto)
    },

    async finByid(req, res) {
        const { id } = req.param;
        const produto = await Produto.findAll({
            where: {
                id: id
            }
        });
        return res.json(produto)
    },
    async store (req, res) {
        const { nome, preco } = req.body;
        const produto = await Produto.create({
           nome, preco
        });
        return res.json(produto)
    },
    async delete (req, res) {
        const { id } = req.param;
        const produto = await Produto.params({
           where:{
            id: id
           }
        });
        return res.json(produto)
    },
    async update (req, res) {
        const { id, nome, preco } = req.body;
        const produto = await Produto.update({
           nome, preco
        });
        return res.json(produto)
    }
}