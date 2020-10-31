const cityname=document.getElementById("cityname");
const submitbtn=document.getElementById('submitbtn');
const city_name=document.getElementById("city_name");
const temp_status=document.getElementById("temp_status");
const temp_real_val=document.getElementById("temp_real_val");
const datahide=document.querySelector(".middle_layer");

const getinfo=async(event)=>{
    event.preventDefault()
    let cityval=cityname.value;
    // console.log(cityval);
    if(cityval==="")
    {
        city_name.innerText="Please write name before you search";
        datahide.classList.add("data_hide")

    }
    else
    { 
        try
        {
            let url=`api.openweathermap.org/data/2.5/weather?q=${cityval}&unit=metircs&appid=718057f0734a3dddfb9261dd4d088aaa`;
            const response=await fetch(url);
            // console.log(response);
            const data =await response.json();
            // console.log(data)
            const arrdata=[data];
            city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
            temp_real_val.innerText=arrdata[0].main.temp;
            temp_status.innerText=arrdata[0].weather[0].main;

            datahide.classList.remove("data_hide")

        }
        catch{
            city_name.innerText=`plz enter the city name properly`;
            datahide.classList.add("data_hide")

        }
    }
}   
submitbtn.addEventListener('click',getinfo)