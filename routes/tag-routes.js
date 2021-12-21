const router = require('express').Router()
const { Tag, Product, ProductTag } = require('../../models')

// The `/api/tags` endpoint

router.get('/tags', async function(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({ include: [Product] })
  res.json(tags)
})


router.get('/tags/:id', async function ({ params: { id } }, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tags = await Tag.findOne({ where: { id }, include: [Product] })
    res.json(tags)
})

router.post('/tags', async function (req, res) => {
  // create a new tag
  const tags = await Category.create(req.body)
  res.status(200).json(tags)
})

router.put('/tags/:id', async function (req, res) => {
  // update a tag's name by its `id` value
  const Tags = await Tag.update(req.body, { where: { id })
})

router.delete('/tags/:id', async function (req, res) => {
  // delete on tag by its `id` value
  const categories = await Category.destroy({ where: { id } })
  res.status(200).json(categories)
})

module.exports = router
