// const posts =
// `1. Thường xuyên rửa tay đúng cách bằng xà phòng dưới vòi nước sạch, hoặc bằng dung dịch sát khuẩn có cồn (ít nhất 60% cồn).<br>
// 2. Đeo khẩu trang nơi công cộng, trên phương tiện giao thông công cộng và đến cơ sở y tế.<br>
// 3. Tránh đưa tay lên mắt, mũi, miệng. Che miệng và mũi khi ho hoặc hắt hơi bằng khăn giấy, khăn vải, khuỷu tay áo.<br>
// 4. Tăng cường vận động, rèn luyện thể lực, dinh dưỡng hợp lý xây dựng lối sống lành mạnh.<br>
// 5. Vệ sinh thông thoáng nhà cửa, lau rửa các bề mặt hay tiếp xúc.<br>
// 6. Nếu bạn có dấu hiệu sốt, ho, hắt hơi, và khó thở, hãy tự cách ly tại nhà, đeo khẩu trang và gọi cho cơ sở y tế gần nhất để được tư vấn, khám và điều trị.<br>
// 7. Tự cách ly, theo dõi sức khỏe, khai báo y tế đầy đủ nếu trở về từ vùng dịch.<br>
// 8. Thực hiện khai báo y tế trực tuyến tại <span style="color: rgb(17, 131, 228);">https://tokhaiyte.vn</span> hoặc tải ứng dụng NCOVI từ địa chỉ <span style="color: rgb(17, 131, 228);">https://ncovi.vn</span> và thường xuyên cập nhật tình trạng sức khoẻ của bản thân.<br>
// 9. Cài đặt ứng dụng Bluezone để được cảnh báo nguy cơ lây nhiễm COVID-19, giúp bảo vệ bản thân và gia đình: <span style="color: rgb(17, 131, 228);">https://www.bluezone.gov.vn/.</span>`

module.exports.readFile = (req, res) =>{
        const fs = require('fs');
      
        fs.readFile("/client/jquery-post.html", (err, data) => {
          if (err) throw err;
          res.writeHead(200, {"Content-type": "text/html"})
          res.write(data)
          res.end()
        });
      }
// module.exports.postPost = (req, res) => {
//         const title = req.body.title
// }
