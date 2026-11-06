const student = [
    {id: 1, name: " จันทร์โอชา"},
    {id: 2, name: "ทนงทวย"},
    {id: 3, name: "คงควรคอย"}
];
const gradeTable = { 1: ['A', 'B'], 2: ['C','D'], 3: ['A', 'B'] };

async function getStudent(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const studentData = student.find(s => s.id === id);
            if (studentData) {
                resolve(studentData);
            } else {
                reject(new Error("ไม่พบข้อมูลนักเรียน"));
            }
        }, 1000);
    });    
}

async function getGrade(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const grades = gradeTable[id];
            if (grades) {
                resolve(grades);

            } else {
                reject(new Error("ไม่พบเกรดสำหรับนักเรียนนี้"));
            }
        }, 500);
    });
}

async function showStudent(id){
    try {
        const studentData = await getStudent(id);
        console.log(`ข้อมูลนักเรียน: ${studentData.name}`);
        const grades = await getGrade(id);
        console.log(`เกรดของนักเรียน: ${grades.join(', ')}`);
    } catch (error) {
        console.error(error.message);
    }
}

showStudent(1);