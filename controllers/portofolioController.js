const { Portofolio } = require('../models')

module.exports = {
    index: (req, res) => {
        Portofolio.findAll({
        }).then(portofolio => {
            res.status(200).json(portofolio)
        })
    },
    create: (req, res) => {
        const {title, description, tags, repository, image} = req.body
        Portofolio.create({
            title,
            description,
            tags,
            repository,
            image
        }).then(portofolio => {
            res.status(201).json(portofolio)
        }).catch(err => {
            res.status(422).json("Can't create portofolio")
        })
    },
    detail: (req, res) => {
        const portofolioId = req.params.id;
        Portofolio.findOne({ 
            where: { id: portofolioId }
        }).then(portofolio => {
            res.status(200).json(portofolio)
        })
    },
    update: (req, res) => {
        const portofolioId = req.params.id
        const {title, description, tags, repository, image} = req.body
        const query = { where: { id: portofolioId } }
        Portofolio.update({ 
            title: title,
            description: description,
            tags: tags,
            repository: repository,
            image: image
        }, query).then(portofolio => {
            res.status(201).json(`Portofolio id:${portofolioId} has been updated`)
        }).catch(err => {
            res.status(422).json("Can't update portofolio")
        })
    },
    delete: (req, res) => {
        const portofolioId = req.params.id
        Portofolio.destroy({
            where: { id: portofolioId } 
        }).then(portofolio => {
            res.status(201).json("Portofolio has been deleted")
        }).catch(err => {
            res.status(422).json("Can't delete portofolio")
        })
    },
}