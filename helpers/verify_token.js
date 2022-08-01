const JWT = require('jsonwebtoken');
const { promises } = require('nodemailer/lib/xoauth2');

class verifyToken {
    static verifyToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]

        if (token == null) return res.sendStatus(401);

        JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.payload = payload;
            next();
        });
    }

    static verifyRefreshToken(refreshToken) {
        return new Promise((resolve, reject) => {
            JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
                if (err){
                    return reject
                } 
                const userId = payload.aud
                resolve(userId)
            })
        })
    }
}
module.exports = verifyToken