
const handleRegister = (req, res, db, bcrypt)=>{
    const { name, email, password } = req.body;
    // Hash the password
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            console.log('error in hashing the password');
            res.status(400);
        }

        db('users')
        .returning('*')
        .insert({
            name: name,
            email: email,
            password: hash,
            joined: new Date()
        })
        .then(user=>{
            res.json(user);
        })
        .catch(err=> {
            if(err.code==='23505') {
                console.log('code === 23505');
                return res.status(400).json('email existed, please choose different email');
            }
            else {
                console.log('code !== 23505');
                return res.status(400).json('unable to register');
            }
        })
    });
}

module.exports={
    handleRegister: handleRegister
}