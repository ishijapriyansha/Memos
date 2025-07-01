const jwt = require('jsonwebtoken');
const JWT_SECRET="ishija$1"

const fetchUser=(req,res,next)=>{
    const token1=req.header('token');
    if(!token1){
        return res.status(401).send({error: "Authenticate using a valid token"})}
try{
        const data=jwt.verify(token1,JWT_SECRET);
        req.user=data.user;
        next();
    }
    catch(error){
        return res.status(401).send({error:"Access denied"})
       
    }

}
module.exports=fetchUser;