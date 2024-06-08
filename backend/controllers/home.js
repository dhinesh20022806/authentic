'use strict';

exports.getUserName = async (req, res) => {

    res.status(200).json({
        status: 'success',
        data:"you'r valid user"
    })
    
    
}

