const posts = [
    {post: 'Post one information'},
    {post: 'Post two information'},
    {post: 'Post three information'},
    {post: 'Post four information'},
    {post: 'Post five information'}
]
const posts =[]


module.exports.getPosts = (req, res) => {
    res.render('post', {posts})
}
module.exports.postPost = ( req,res) =>{
    const {id} = req.params
    res.send(`<h3 style="color: red;">Post id: ${id}</h3>`)
}
module.exports.indexPost = (req,res) =>{
    const {id} = req.params

    const {id,data} = req.params
    console.log(id);
    if(+id-1 >= posts.length){
        let o = {post: `${data}`};
        posts.push(o)
        res.send(`Completed add post`)}
    else {res.send(`Post is exist`)}
}
module.exports.indexPost = (req,res) =>{
    const {id} = req.params
    if(id-1 >= posts.length) throw res.send("Don't have post")
    res.send(`${posts[id-1].post}`)
}
module.exports.updatePost = (req,res) =>{
    const {data, id} =req.params
    posts[id-1].post = data
    res.send(`${posts[id-1].post}`)
}
module.exports.deletePost = (req,res) =>{
    const {id} = req.params
    posts.splice(id -1,1)
}
    posts[id-1].post = "Deleted"
    res.send(`${posts[id-1].post}`)
}


