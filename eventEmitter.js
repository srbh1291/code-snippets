function EventEmitter(){}

EventEmitter.prototype.messageLogged = function(){
    console.log(`Message logged`)
}

const emitter = new EventEmitter()

emitter.messageLogged()
