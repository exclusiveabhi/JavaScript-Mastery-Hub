//Objective: Understand the concept of Object Oriented Programming in JavaScript

//Object literals

const userObject = {
userName: "Abhishek",
loginTime: "10:00 AM",
signedIn: true,
getUserDetails :function(){
    // console.log(`User Name: ${this.userName} Login Time: ${this.loginTime} Signed In: ${this.signedIn}`);
    // console.log(this)
}

}

// console.log(userObject.getUserDetails())
console.log(this)

// console.log(userObject.userName)




//second object
const userObject2 = {
    userName: "Abhishek2",
    loginTime: "11:00 AM",
    signedIn: false,
    getUserDetails :function(){
        // console.log(`User Name: ${this.userName} Login Time: ${this.loginTime} Signed In: ${this.signedIn}`);
        // console.log(this)
    }
    
    }



//

function user(username,logincount,isloggedin){
this.myUsername = username;
}