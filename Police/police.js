axios.get("http://localhost:3000/traffic").then((res)=>{
    let hospitalArray = res.data
    hospitalArray.forEach(element => {
        //console.log(element.date)
        let date = element.date
        let time = element.time
        let place = element.place
        let level = element.level
        document.querySelector("body").innerHTML += `<div class = "container">
        <h3>Date: ${date}</h3>
        <h3>Time: ${time}</h3>
        <h3>Place: ${place}</h3>
        <h3>Level: ${level}</h3>
    </div>`

    });

    console.log(hospitalArray)
}).catch((err)=>{
    console.log(err)
})