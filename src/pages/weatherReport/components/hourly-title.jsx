import CONFIG from "/config.json"

function HourlyTitle({weatherData}) {

  if (!weatherData) {
    return
  }
  
  const number =  weatherData.location.localtime.split(" ");
  const numberPurt = number[0]
  const monthNumberPats = numberPurt.split("-")

  return (
    <div className="flex justify-between mt-8">
      <p className="text-2xl font-black text-shadow">Today</p>
      <p className="text-shadow font-medium">{CONFIG.months[monthNumberPats[1]] + ", " + monthNumberPats[2]}</p>
    </div>
  );
}

export default HourlyTitle