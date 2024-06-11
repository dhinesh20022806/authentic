'use strict';

const { verifyTokens } = require("./jwt");

exports.authMiddleWare = (req, res, next) => {
    if (!req.headers.authorization) next('no auth')
    
    const authFragment = req.headers.authorization.split(" ");
    const userToken = authFragment[1]
    console.log(userToken, 'working');

   try {
       const validToken = verifyTokens(userToken);
       req.token = validToken;
       next();
       console.log(validToken);
       
   } catch (error) {
       console.log(error);
       res.status(400).json({
           
           status: 'failure',
           data:'invalid token'
       })
    
   }
    
}