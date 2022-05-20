const database = require('../models');

class PessoaController{
    static async pegaTodasAsPessoas(req, res){
        try{
            const todasASpessoas = await database.Pessoas.findAll()
            return res.status(200)
                      .json(todasASpessoas) 
        }catch(error){
            return res.status(500).json(error.menssage)
        }
    }

    static async pegaUmaPessoa(req, res){
        const { id } = req.params
        try{
            const umaPessoa = await database.Pessoas.findOne( { 
                where: { 
                    id: Number(id) 
                }
            })
            return res.status(200)
                      .json(umaPessoa)
        }catch(error){
            return res.status(500).json(error.menssage)
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200)
                      .send({sucess: {message: 'Criado um novo registro com sucesso!'}})
                      .json(novaPessoaCriada)
        } catch(error){
            return res.status(500).json(error.menssage) 
        }
    }

    static async atualizaPessoa(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try{
            const pessoaAtualizada = await database.Pessoas.update(novasInfos, {where: {id: Number(id)}})
            return res.status(200)
                      .send({success: {message: 'Cadastro alterado com sucesso!'}})
                      .json(pessoaAtualizada)
        } catch(error){
            return res.status(500)
            .json(error.menssage) 
        }
    }

    static async apagaPessoa(req, res){
        const { id } = req.params
        try{
            const deletePessoa = await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200)
                      .json({mensagem: `id ${id} deletado!`})
        }catch(error){
            return res.status(500)
            .json(error.menssage) 
        }
    }
}

module.exports = PessoaController