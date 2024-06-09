'use strict';

const { verifyTokens } = require("./jwt");

exports.authMiddleWare = (req, res, next) => {
    if (!req.headers.authorization) next('no auth')
    
    const userToken = req.headers.authorization;

   try {
       const validToken = verifyTokens(userToken);
       req.token = validToken;
       
   } catch (error) {
       res.status(400).json({
           status: 'failure',
           data:'invalid token'
       })
    
   }
    
}