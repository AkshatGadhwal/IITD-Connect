
const jwt = require("jsonwebtoken");

const authenticate = (req,res,next) => {
    const token = req.cookies['token'];

    if(!token){
        return res.status(401).send("not authorised")
    }

    // const token = req.cookies['token']
    // const token = token1+token2;

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req._id = user["_id"];
        next()
    })
}



module.exports = authenticate
