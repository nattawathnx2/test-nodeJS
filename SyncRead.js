const fs = require('fs');
const data = fs.readFileSync('data.txt', 'utf8');
try {
    console.log(data);
    console.log("อ่านไฟล์เสร็จสิ้น!"); 
} catch(err) {
    console.log("เกิดข้อผิดพลาด:", err);
}