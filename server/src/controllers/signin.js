

const handleSignin = (req,res,db,bcrypt)=>{
    const {email, password}=req.body;

    db.select('*').from('users').where({ email: email })
        .then(user=> {
            if(bcrypt.compareSync(password, user[0].password)){
                return res.json(user[0]);
            } else return res.status(400).json('Wrong username or password');
        })
        .catch(err=> {
            console.log('error ', err);
            res.status(400).json('Wrong username or password');
        })
}

module.exports={
    handleSignin: handleSignin
}