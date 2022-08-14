function bmiCalc(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

var bmi = console.log(bmiCalc(65, 1.8))