document.getElementById("report").addEventListener('click',(e)=>{
    let start = document.getElementById("start").value
    let end = document.getElementById("end").value
    axios.get("http://localhost:3000/daily").then((res)=>{
        console.log(res.data)
        let train = res.data
        // let bus =res.data[1]
        // let metro =res.data[2]
        for(var i =0;i < train.length; i++){

        }
    }).catch((err)=>{
        
    })
})