

class Request {
    constructor() {
        this.url = '';
        this.method = '';
        this.payload = '';
    }
}

class RequestBuilder {
    constructor() {
        this.request = new Request();
    }
    forUrl(url) {
        this.request.url = url;
        return this;
    }
    useMethod(method) {
        this.request.method = method;
        return this;
    }
    payload(payload) {
        this.request.payload = payload;
        return this;
    }
    build () {
        return this.request;
    }
}

export default RequestBuilderl;


// 

class Address {
    constructor(zip, street){
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, /*age, phone, address*/) {
        this.name = name;
        /*this.age = age;
        this.phone = phone;
        this.address = address;*/
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }

    setAge(age){
        this.age = age;
        return this
    }
    setPhone(phone) {
        this.user.phone = phone
        return this
    }
    setAddress(address){
        this.user.address = address
        return this
    }
    build() {
        return this.user;
    }
}

let user = new UserBuilder('Souman').setAge(10).setPhone('1234444').build()
console.log(user)

// JS builder


class User {
    constructor(name, {age, phone='123456', address } = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let user1 = new User('Bob', {age: 10, address: new Address("12", "Main")})