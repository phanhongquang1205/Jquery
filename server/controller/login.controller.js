const users = [
    { pass: '11111111', name: 'hieu' },
    { pass: '11111111', name: 'quang' },
    { pass: '11111111', name: 'thanh' },
    { pass: '11111111', name: 'minh' }
]



module.exports.loginForm = (req, res) => {
    res.render('login')
}
module.exports.loginData = (req, res) => {
    let userName = req.body.username
    let passWord = req.body.password
    for (let i of users)
        if (userName == i.name) {
            if (passWord == i.pass) {
                // res.send('login successful')
                res.redirect('/users')
            }
            else { res.send('password is wrong') }
        }
        else{res.send('username is wrong')}
}
