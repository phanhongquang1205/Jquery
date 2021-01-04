const users = [
    {id: '1', name: 'Hieu'},
    {id: '2', name: 'Quang'},
    {id: '3', name: 'Thanh'},
    {id: '4', name: 'Minh'}
]

module.exports.getUsers = (req, res) => {
    res.render('users', {users})
}
module.exports.getUsersById = (req, res) => {
    const {name, id } = req.params
    res.send(`<h3 style="color: red;">User With and id: ${id}</h3>`)
  }
  