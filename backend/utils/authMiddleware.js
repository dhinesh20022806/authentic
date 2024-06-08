'use strict';

const { verifyTokens } = require("./jwt");

exports.authMiddleWare = (req, res, next) => {
    if (!req.headers.authorization) next('no auth')
    
    const userToken = req.headers.authorization;

    verifyTokens(userToken);
    
}