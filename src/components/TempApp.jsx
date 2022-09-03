import React,{useState,useEffect} from 'react'
import "./TempApp.css"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
function TempApp() {
    
    const [city,setCity]=useState(null)
    const [search,setSearch]=useState("Pune")
    // const apiKey=
    // console.log(apiKey)
    
    useEffect(()=>{
        const fetchApi=async()=>{
            const URL=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}`
            const res=await fetch(URL)
            const resJson=await res.json()
            setCity(resJson.main)
            //setSearch(resJson)
        }
        fetchApi()
    },[search])
   function handleChange(e){
    setSearch(e.target.value)
   }

 
    return (
        <>

            <div className="box">
                <div className="boxWrapper">
                    <div className="inputData">
                        <SearchIcon className='inputDataIcon' />
                        <input type="text" value={search} onChange={handleChange} className="inputDataInput" placeholder='Type any city eg. London'></input>
                    </div>
                    {!city?(<>
                        <p className='noData'>No data found!</p>
                    </>):
                    
                    <div className="info">
                        <div className="infoLocation">
                            <LocationOnIcon className='infoLocationIcon' />
                            <h2 className="infoLocationText"> {search}</h2>
                        </div>
                        <div className="infoTemp">
                            <div className="infoTempTop">
                                <h1 className='infoTempTopCurr'>{parseInt(city.temp-273.15)}°C</h1>
                            </div>
                            <div className="infoTempBottom">
                                <span className='infoTempBottomMin'>Min: {parseInt(city.temp_min-273.15)}°C | </span>
                                <span className='infoTempBottomMax'>Max:{parseInt(city.temp_max-273.15)}°C </span>

                            </div>
                        </div>


                    </div>
                    }
                    

                </div>
            </div>
        </>
    )
}

export default TempApp