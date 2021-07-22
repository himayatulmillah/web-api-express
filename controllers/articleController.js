const { Articles } = require('../models')

module.exports = {
    index: (req, res) => {
        Articles.findAll({
        }).then(article => {
            res.status(200).json(article)
        })
    },
    create: (req, res) => {
        const {title, body, approved} = req.body
        Articles.create({
            title,
            body,
            approved
        }).then(article => {
            res.status(201).json(article)
        }).catch(err => {
            res.status(422).json("Can't create article")
        })
    },
    detail: (req, res) => {
        const articleId = req.params.id;
        Articles.findOne({ 
            where: { id: articleId }
        }).then(article => {
            res.status(200).json(article)
        })
    },
    update: (req, res) => {
        const articleId = req.params.id
        const {title, body, approved} = req.body
        const query = { where: { id: articleId } }
        Articles.update({ 
            title: title,
            body: body,
            approved: approved
        }, query).then(article => {
            res.status(201).json(`Article id:${articleId} has been updated`)
        }).catch(err => {
            res.status(422).json("Can't update article")
        })
    },
    delete: (req, res) => {
        const articleId = req.params.id
        Articles.destroy({
            where: { id: articleId } 
        }).then(article => {
            res.status(201).json("Article has been deleted")
        }).catch(err => {
            res.status(422).json("Can't delete article")
        })
    },
}