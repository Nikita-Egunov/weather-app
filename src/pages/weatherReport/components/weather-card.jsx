function WeatherCard({temperature, iconUrl, iconAlt, time, isColumn, isCurrent}) {
    return(
        <div className={`p-2.5 flex gap-y-3 ${isColumn ? "flex-col-reverse" : "justify-between"} ${isCurrent && "rounded-2xl border border-white bg-[rgba(255,255,255,0.2)]"}`}>
            <p className="text-shadow">{time}</p>
            <img src={iconUrl} alt={iconAlt} className={isColumn ? "" : "w-7 aspect-square"}/>
            <p className="text-shadow">{temperature}°C</p>
        </div>
    )
}

export default WeatherCard