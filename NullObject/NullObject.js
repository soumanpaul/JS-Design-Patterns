// The Null Object design pattern is a behavioral design pattern that provides a way to handle null or 
// undefined values in a more controlled manner. It aims to eliminate the need for explicit null checks and 
// gracefully handle cases where an object or reference is expected but is null.

// This pattern can be useful in scenarios where you want to provide a default or no-op implementation for a particular
// behavior, allowing the client code to proceed without the need for null checks and reducing the risk of null reference errors.


// Abstruct class or Interface

class AbstructLogger {
    log(){
        throw new Error(`Method 'log' must be implemented `)
    }
}

// concrete Implementation
class ConsoleLogger extends AbstructLogger {
    log(message) {
        console.log(`[Console] ${message}`);
    }
}

// Null object Implementation
class NullLogger extends AbstructLogger {
    log(message) {
        // Null logger does nothing
    }
}

const logger = getConfiguredLogger()

logger.log("This will be loged!")


// Helper function to get a configured logger
function getConfiguredLogger() {
    const logLevel = getConfiguredLogLevel();

    if(logLevel === 'console'){
        return new ConsoleLogger();
    }
    return new NullLogger();
}

// Helper function to get configured log level
function getConfiguredLogLevel(){
    return 'console';
}


// ***************

class User {
    constructor(id, name){
        this.id = id
        this.name = name
    }

    hasAccess() {
        return this.name === 'Bob'
    }
}

class NullUser {
    constructor(){
        this.id = -1
        this.name = 'Guest'
    }

    hasAccess() {
        return false
    }
}

const users = [
    new User(1, 'Bob'),
    new User(2, 'Jhon')
]

function getUser(id) {
    const user =  users.find(user => user.id === id)

    if(user == null)
        return new NullUser()
    return user    
}

function printUser(id) {
    const user = getUser(id)

    /*
        We need to explicitly tell the console.log to print 'Guest' if the user does not have a name
        
        This is problematic since we need to remember to always put this every time we use thre users name

        It is also bad because if we want to print `Unknown User` instead, we would need to change every place
        that we put `Gust` which will most likely to be all over the application.

    */

    // let name = 'Guest'
    // if(user != null && user.name != null) name = user.name
    // console.log('Hello ' + name)
    console.log("Hello" + user.name)


    // if(user != null && user.hasAccess != null && user.hasAccess()) {
    if(user.hasAccess()) {
        console.log('You have access')
    }else {
        console.log('You are not allowed here')
    }

}