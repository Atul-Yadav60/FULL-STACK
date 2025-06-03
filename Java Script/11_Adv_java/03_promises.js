function fetchData(){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            let success = true;
            if(success){
                resolve("Data fetched successfully")
            }
            else{
                reject("Error featching data")
            }
        },3000)

    })
    // promise created using new keywords

}

fetchData()
   .then((data)=> console.log(data))
   .catch((data)=>console.error(error))