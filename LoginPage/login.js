// alert("connected")
axios.get("http://localhost:3000/users").then((res)=>{
    let userArray = res.data
    console.log(userArray)
}).catch((err)=>{
    console.log(err)
})
document.getElementById("submit").addEventListener('click',(a)=>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    userArray.forEach(element => {
        let x = element.email
        let y = element.password
        if (x == email && y == password){
            console.log(x+y+email+password)
            location.href = "../index.html"
        }
        alert("Incorrect Password")
    });
})