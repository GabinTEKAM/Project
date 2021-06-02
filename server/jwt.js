const { sign, verify } = require("jsonwebtoken");

exports.createToken = (user) => {
    const accessToken = sign({ id: user.id },
        "gabino")
return accessToken
}

exports.validateTokens =(req, res, next)=>{
    const accessToken = req.cookies["access-token"]
    console.log(`accessToken`, accessToken)
    if (!accessToken)
        return res.status(400).json({error:" user not authenticated "})
    try {
        const validToken = verify(accessToken, "gabino")
        console.log(`validToken`, validToken)
        if (validToken){
            req.authenticated= true
            return next()
        }
    } catch (error) {
        return res.status(400).json({err})
    }
    }