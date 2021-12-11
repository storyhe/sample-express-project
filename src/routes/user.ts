import express from 'express'
import context from '../context'

const router = express.Router()

router.get('/me', context.controller.User.vaildUser, async(req, res) => {
  if (req.session.view) {
    req.session.view++
  } else { req.session.view = 1 }
  res.success({'success': true, 'message': ':D', 'view': req.session.view}, 'success')
})

router.get('/put', async(req, res) => {
  // let data = await db.Users.create({
  //   name: 'hello :)'
  // })
  // res.status(201).json(data)
  return res.status(201)
})

router.get('/get/:userid', async(req, res) => {
  const user = await context.model.User.getuser(1)
  res.success(user, 'success')
})

router.get('/stock/:userid', async(req, res) => {
  throw new Error("Hello error!")
  const userid = req.params.userid;
  const user = await context.model.Stock.getuser(userid)
  res.success(user, 'success')
})

module.exports = router