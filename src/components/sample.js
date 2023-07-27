import React, { useEffect, useState } from 'react';


const Tempapp = () =>
{ 

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () =>{
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f56f24967aaf51182d1d4df628297c6d`
                const response = await fetch(url);
                
                const resJson = await response.json();
                setCity(resJson.main);
        };
        fetchApi();
    },[search] )
    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    value={search}
                    className="inputField"
                    onChange={(event)=>{
                            setSearch(event.target.value)
                    }
                    }
                    />
                    
                </div>
            

            {
               !city ? (
                <p> No data found</p>
               )  : (
                <div>
                    <div className='info'>
                        <h2  className='location'>
                        <i className="fa-solid fa-street-view">{search}</i>
                        </h2>
                        <h1 className='temp'>
                             {city.temp} °C
                        </h1>
                        <h3 className='tempmin_max'> Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>

                     </div>

                    <div className='wave-one'></div>
                    <div className='wave-two'></div>
                    <div className='wave-three'></div>
                </div>
                
               )
            }
            </div>
        </>
    )
}
export default Tempapp;