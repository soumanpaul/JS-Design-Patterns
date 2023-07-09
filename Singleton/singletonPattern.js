export  class Person {
    constructor(){
        if(typeof Person.instance == 'object'){
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}
