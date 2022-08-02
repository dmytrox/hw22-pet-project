class AppService {
    sumTwoNumbers(a, b){
        return a + b;
    }

    minusTwoNumbers(a, b){
        return a - b;
    }

    multiplyTwoNumbers(a, b){
        return a * b;
    }

    devideTwoNumbers(a, b){
        return a / b;
    }
}

module.exports = new AppService();