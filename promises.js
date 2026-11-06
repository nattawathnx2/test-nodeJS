const checkWeather = new Promise((resolve, reject) => {
    const weather = "sunny";
    setTimeout(() => {
        if (weather === "sunny") {
            resolve("วันนี้แดดจัด!");
        } else {
            reject("วันนี้ไม่มีแดด");
        }
    }, 3000);
});

const ReadFile = new Promise((resolve, reject) => {
    const fs = require('fs');
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
    });
});


// checkWeather
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("ตรวจสอบสภาพอากาศเสร็จสิ้น");
//     });

// ReadFile
//     .then((data) => {
//         console.log("เนื้อหาของไฟล์: ",data);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("อ่านไฟล์เสร็จสิ้น");
//     });

async function planTrip() {
    try {
        const weatherResult = await checkWeather;
        console.log(weatherResult);
        const fileData = await ReadFile;
        console.log("เนื้อหาของไฟล์: ", fileData);
    } catch(error) {
        console.error(error);
    }
}

planTrip();