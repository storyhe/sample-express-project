class UserController {
  constructor() {
        
  }

  async vaildUser(req, res, next) {
    await next()
    // if (req.headers.authorization) {
    //   let token = req.headers.authorization.split('Bearer ')[1]
              
    //   if (token) {
    //     let userdata = await sessionGet('token:' + token)
                
    //     if (userdata) {
    //       req.user = userdata
    //       await next()
    //     }
    //     else {
    //       await res.status(410)
    //         .json({'success': false, 'message': '로그인이 필요합니다'})
    
    //     }
    //   }
    // }
    // else {
    //   res.status(401)
    //     .json({'success': false, 'message': '로그인이 필요합니다'})
    // }
    
  }

}


module.exports = UserController