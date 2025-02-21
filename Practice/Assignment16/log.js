let message="hi";
function getMessage(){
    return message;
}
function setMessage(msg){
    message=msg;
}
module.exports={message,getMessage,setMessage};