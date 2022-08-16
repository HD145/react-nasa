import React, { useState } from 'react'

export const Index = () => {

    const [date, setDate] = useState("")
    const [image, setImage] = useState("https://media.istockphoto.com/photos/meteor-impact-on-earth-fired-asteroid-in-collision-with-planet-3d-picture-id1367810652?b=1&k=20&m=1367810652&s=170667a&w=0&h=HQxeQzdQ5Pvh-mV5eMOZ7xfA4pIuLh2Vwm2URrl_XZE=")

    const show=async(e)=>{
        e.preventDefault();
        console.log(date)

        let url=`https://api.nasa.gov/planetary/apod?api_key=5oS4O9ZHUD0YlKGy2vr7acCo093PYFIFnnw7lgO5&date=${date}`

        const res= await fetch(url);
        const data=await res.json();
        console.log(data)
        setImage(data.hdurl)

    }

    const handleInput=(e)=>{
        const finaldate=e.target.value;
        setDate(finaldate)
    }
 
  return (
   
    <div className='container-fluid' style={{"height":"100vh", "backgroundImage":`url("${(image)}")`, "background-repeat": "no-repeat","background-size":"cover" }}>
        <div className='container'>
        <div id="date-picker-example" class="container" inline="true" style={{"width":"26rem","text-align":"center","position":"relative","top":"14rem"}}>
                <h3 style={{"color":"white"}}>Astronomy Picture Of The Day</h3>
                <h4 style={{"color":"white"}}>Select Date</h4>
                <input placeholder="Select date" type="date" id="example" class="form-control" value={date} onChange={handleInput} />
                <button type='submit' onClick={show} className='btn btn-primary mt-3'>Click</button>
        </div>
        </div>
        <a href={image} download="w3logo" target="_blank" style={{"position":"absolute","bottom":"0"}}>Download Picture</a>
    </div>
     
   
  )
}
