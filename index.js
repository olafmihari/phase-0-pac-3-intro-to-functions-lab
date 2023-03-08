const expect = require("expect/lib");
const { default: Expectation } = require("expect/lib/Expectation");

function shout(string) {
     return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
    return string.toUpperCase()
}
function logShout(string) {
    it('takes a string argument and logs it in in all caps using console.log()',function(){
        const spy = expect.spyOn(console, 'log').andCallThrough();

        logShout('hello');

        expect(spy).toHaveBeenCalledWith('HELLO');

        console.log.restore();
    });
};
function logShout(string){
    console.log(string.toUpperCase());
}
function logWhisper(string){
    it('takes a string argument and logs it in all lowercase uding console.log()',function(){
        const spy = expect.spyOn(console, 'log').andCallThrough();

        logWhisper('HELLO');

        expect(spy).toHaveBeenCalledWith('hello');

        console.log.restore();
    })
};
function logWhisper(string){
    console.log(string.toLowerCase());
}
    logWhisper("complete")


function sayHiToHeadphonedRoommate(string){
    if(string ===string.toLowerCase()){
        return"I can't hear you!";

    }else if (string === string.toUpperCase()){
        return "YES INDEED!";

    }else if(string === "Let's have dinner together!"){
        return"I would love to!";
    }
}
console.log(sayHiToHeadphonedRoommate('hello'))
console.log(sayHiToHeadphonedRoommate(Hello))
console.log(sayHiGrandma("Let's have dinner together!"))
console.log(sayHiToHeadphonedRoommate("I would love to!"))