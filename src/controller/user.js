const {promisify} = require('util');
const sessionClient = require('./redisClient').session

class UserController {
  constructor() {
        
  }

  static async vaildUser(req, res, next) {
    if (req.headers.authorization) {
      let token = req.headers.authorization.split('Bearer ')[1]
              
      if (token) {
        const getUserData = promisify(sessionClient.get)
          .bind(sessionClient);

        let userdata = await getUserData('token:' + token)
                
        if (userdata) {
          req.user = userdata
          await next()
        }
        else {
          await res.status(410)
            .json({'success': false, 'message': '로그인이 필요합니다'})
    
        }
      }
    }
    else {
      res.status(401)
        .json({'success': false, 'message': '로그인이 필요합니다'})
    }
    
  }

}

module.exports = UserController