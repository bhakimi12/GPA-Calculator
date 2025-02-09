function calculateGPA(arr) {
    let total = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
        total += 100;
    } else if (arr[i] === "B") {
        total += 80;
    } else if (arr[i] === "C") {
        total += 70;
    } else{
        console.log("Invalid grade detected.");
        return;
    }
}

let averageGPA = total / arr.length;
let finalGrade = "";

if (averageGPA >= 85 ) {
    finalGrade = "A";
} else if (averageGPA >= 75){
    finalGrade = "B";
} else if (averageGPA >= 65) {
    finalGrade = "C"
}

document.write(`Your GPA is ${finalGrade}`);
console.log(`Your GPA is ${finalGrade}`);

}

calculateGPA(["A", "B", "C"]);





