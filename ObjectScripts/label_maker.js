function printContact(userInfo){
    console.log(userInfo.name+"\n"+userInfo.address+"\n"+userInfo.city+", "+userInfo.state+" "+userInfo.zip)
}


let userInfo = {
    name: "Ian Auston",
    address: "132 Funny Street",
    city: "Kingston",
    state: "New York",
    zip: "12401"
};



printContact(userInfo);
