// class Calculator {
//     constructor() {
//         this.value = 0;
//     }
   
//     add(valueToAdd) {
//         this.value = this.value + valueToAdd
//     }
//     subtract(valueToSubtract){
//         this.value = this.value - valueToSubtract
//     }
//     multiply(valueToMultiply){
//         this.value = this.value * valueToMultiply
//     }
//     divide(valueToDivide){
//         this.value = this.value / valueToDivide
//     }
// }

// const calculator = new Calculator()
// calculator.add(10)
// console.log(calculator.value)
// calculator.divide(2)
// console.log(calculator.value)

//  Command pattern


class Calculator {
    constructor() {
        this.value = 0;
        this.history = [];
    } 
    executeCommand (command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }
    undo() {
        const command = this.history.pop()
        this.value = command.undo(this.value)
    }
}


class AddCommand {
    constructor(valueToSubtract){
        this.valueToSubtract = valueToSubtract
    }
    execute (currentValue) {
        return currentValue - this.valueToSubtract
    }
    undo(currentValue) {
        return currentValue + this.valueToSubtract
    }
}

class MultiplyCommand {
    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply;
    }
    execute(currentValue) {
        return currentValue * this.valueToMultiply;
    }
    undo(currentValue) {
        return currentValue / this.valueToMultiply;
    }
}

class DivideCommand {
    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide;
    }
    execute(currentValue) {
        return currentValue / this.valueToDivide;
    }
    undo(currentValue) {
        return currentValue * this.valueToDivide;
    }
}


class AddAndMultiplyCommand {
    constructor(valueToAdd, valueToMultiply){
        this.addCommand = new AddCommand(valueToAdd)
        this.multiplyCommand = new MultiplyCommand(valueToMultiply)
    }
    execute(currentValue) {
        const newValue = this.addCommand.execute(currentValue)
        return this.multiplyCommand.execute(newValue)
    }
    undo(currentValue) {
        const newValue = this.addCommand.undo(currentValue)
        return this.multiplyCommand.undo(newValue)
    }
}

const calculator =  new Calculator()
calculator.executeCommand(new AddAndMultiplyCommand(10,2))
calculator.undo()

