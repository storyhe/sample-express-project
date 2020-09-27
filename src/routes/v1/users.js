let router = require('express').Router()
const userController = require('../../controller/user')
const db = require('../../db/models')

router.get('/me', userController.vaildUser, async(req, res) => {
  res.json({'success': true, 'message': ':D'})
})

router.get('/put', async(req, res) => {
  let data = await db.Users.create({
    name: 'hello :)'
  })
  res.status(201).json(data)
})

router.get('/get', async(req, res) => {
  let member = await db.Users.findAll()
  if (member === null || member.length === 0) {
    res.send('empty...')
  }
  else {
    res.status(201).json(member)
  }
})

module.exports = router