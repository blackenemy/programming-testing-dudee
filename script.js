// TESTING #1
function customSort(arr) {
    let freq = {};
    arr.forEach(num => {
        if (!freq[num]) freq[num] = 0;
        freq[num]++;
    });

    return arr.slice().sort((a, b) => {
        if (freq[a] !== freq[b]) {
            return freq[a] - freq[b];
        }
        return a - b;
    });
}

const data = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 7, 9, 10, 41, 8];
document.getElementById("output js 1.1").innerHTML = `ข้อมูลแรกเริ่ม ${data}`;
console.log(customSort(data));
document.getElementById("output js 1.2").innerHTML = `ข้อมูลหลังจากที่เรียงแล้ว ${customSort(data)}`;

// 
// TESTING #2
function getEmployeeInfo(employees, nameToFind) {
    const employee = employees.find(e => e.name === nameToFind);

    if (employee) {
        return `ชื่อ ${employee.name} ตำแหน่ง ${employee.position}`;
    } else {
        return `ขออภัยพนักงานที่ชื่อ ${nameToFind} ทางเราไม่พบพนักงาน`;
    }
}

const staff = [
    { name: "Arm", position: "Front End" },
    { name: "Game", position: "Back End" }
];
const staffInfo = staff.map(member => `ข้อมูลพนักงาน ${member.name} ตำแหน่ง ${member.position}`).join("<br>");

document.getElementById("output js 2").innerHTML = `${staffInfo}`;
console.log(getEmployeeInfo(staff, "Janny"));
console.log(getEmployeeInfo(staff, "Game"));
document.getElementById("output js 2.1").innerHTML = `ใส่ข้อมูล Janny แสดงผล : ${getEmployeeInfo(staff, "Janny")}`;
document.getElementById("output js 2.2").innerHTML = `ใส่ข้อมูล Game แสดงผล : ${getEmployeeInfo(staff, "Game")}`;
