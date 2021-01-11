const posts = [
    {post: 'Thường xuyên rửa tay đúng cách bằng xà phòng dưới vòi nước sạch, hoặc bằng dung dịch sát khuẩn có cồn (ít nhất 60% cồn).'},
    {post: 'Đeo khẩu trang nơi công cộng, trên phương tiện giao thông công cộng và đến cơ sở y tế.'},
    {post: 'Tránh đưa tay lên mắt, mũi, miệng. Che miệng và mũi khi ho hoặc hắt hơi bằng khăn giấy, khăn vải, khuỷu tay áo.'},
    {post: 'Tăng cường vận động, rèn luyện thể lực, dinh dưỡng hợp lý xây dựng lối sống lành mạnh.'},
    {post: 'Vệ sinh thông thoáng nhà cửa, lau rửa các bề mặt hay tiếp xúc.'},
    {post: 'Nếu bạn có dấu hiệu sốt, ho, hắt hơi, và khó thở, hãy tự cách ly tại nhà, đeo khẩu trang và gọi cho cơ sở y tế gần nhất để được tư vấn, khám và điều trị.'},
    {post: 'Tự cách ly, theo dõi sức khỏe, khai báo y tế đầy đủ nếu trở về từ vùng dịch.'},
    {post: 'Thực hiện khai báo y tế trực tuyến tại <span style="color: rgb(17, 131, 228);">https://tokhaiyte.vn</span> hoặc tải ứng dụng NCOVI từ địa chỉ <span style="color: rgb(17, 131, 228);">https://ncovi.vn</span> và thường xuyên cập nhật tình trạng sức khoẻ của bản thân.'},
    {post: 'Cài đặt ứng dụng Bluezone để được cảnh báo nguy cơ lây nhiễm COVID-19, giúp bảo vệ bản thân và gia đình: <span style="color: rgb(17, 131, 228);">https://www.bluezone.gov.vn/.</span>'}
]



module.exports.getPosts = (req, res) => {
    res.render('post', {posts})
}
module.exports.postPost = ( req,res) =>{
    const {id} = req.params
    res.send(`<h3 style="color: red;">Post id: ${id}</h3>`)
}
module.exports.indexPost = (req,res) =>{
    const {id} = req.params
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