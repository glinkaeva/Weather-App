import base from "../../../styles/base";

import PartOfDayItem from "./partOfDayItem";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper"
import 'swiper/css';

export default function PartOfDayContainer(props) {
    const weatherData = props.weather;
    SwiperCore.use([Autoplay]);
    return(
        <Swiper
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{ disableOnInteraction: false }}

            breakpoints={{
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    autoplay: {
                        delay: 5000,
                    },
                },
                560: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },
                1080: {
                    slidesPerView: 4,
                    autoplay: false,
                }
            }}
        >
            <SwiperSlide>
                <PartOfDayItem 
                    dayPartColor={base.colors.blue}
                    dayPart='Night'
                    conditionIcon={weatherData.forecast.forecastday[props.forecastDay].hour[3].condition.icon}
                    conditionText={weatherData.forecast.forecastday[props.forecastDay].hour[3].condition.text}
                    temperature={weatherData.forecast.forecastday[props.forecastDay].hour[3].temp_c}
                    feelsLike={weatherData.forecast.forecastday[props.forecastDay].hour[3].feelslike_c}
                    wind={weatherData.forecast.forecastday[props.forecastDay].hour[3].wind_mph}
                    pressure={weatherData.forecast.forecastday[props.forecastDay].hour[3].pressure_mb}
                    humidity={weatherData.forecast.forecastday[props.forecastDay].hour[3].humidity}
                    precip={weatherData.forecast.forecastday[props.forecastDay].hour[3].precip_mm}
                />
            </SwiperSlide>

            <SwiperSlide>
                <PartOfDayItem 
                    dayPartColor={base.colors.green}
                    dayPart='Morning'
                    conditionIcon={weatherData.forecast.forecastday[props.forecastDay].hour[9].condition.icon}
                    conditionText={weatherData.forecast.forecastday[props.forecastDay].hour[9].condition.text}
                    temperature={weatherData.forecast.forecastday[props.forecastDay].hour[9].temp_c}
                    feelsLike={weatherData.forecast.forecastday[props.forecastDay].hour[9].feelslike_c}
                    wind={weatherData.forecast.forecastday[props.forecastDay].hour[9].wind_mph}
                    pressure={weatherData.forecast.forecastday[props.forecastDay].hour[9].pressure_mb}
                    humidity={weatherData.forecast.forecastday[props.forecastDay].hour[9].humidity}
                    precip={weatherData.forecast.forecastday[props.forecastDay].hour[9].precip_mm}
                />
            </SwiperSlide>

            <SwiperSlide>
                <PartOfDayItem 
                    dayPartColor={base.colors.yellow}
                    dayPart='Day'
                    conditionIcon={weatherData.forecast.forecastday[props.forecastDay].hour[16].condition.icon}
                    conditionText={weatherData.forecast.forecastday[props.forecastDay].hour[16].condition.text}
                    temperature={weatherData.forecast.forecastday[props.forecastDay].hour[16].temp_c}
                    feelsLike={weatherData.forecast.forecastday[props.forecastDay].hour[16].feelslike_c}
                    wind={weatherData.forecast.forecastday[props.forecastDay].hour[16].wind_mph}
                    pressure={weatherData.forecast.forecastday[props.forecastDay].hour[16].pressure_mb}
                    humidity={weatherData.forecast.forecastday[props.forecastDay].hour[16].humidity}
                    precip={weatherData.forecast.forecastday[props.forecastDay].hour[16].precip_mm}
                />
            </SwiperSlide>

            <SwiperSlide>
                <PartOfDayItem 
                    dayPartColor={base.colors.lightblue}
                    dayPart='Evening'
                    conditionIcon={weatherData.forecast.forecastday[props.forecastDay].hour[21].condition.icon}
                    conditionText={weatherData.forecast.forecastday[props.forecastDay].hour[21].condition.text}
                    temperature={weatherData.forecast.forecastday[props.forecastDay].hour[21].temp_c}
                    feelsLike={weatherData.forecast.forecastday[props.forecastDay].hour[21].feelslike_c}
                    wind={weatherData.forecast.forecastday[props.forecastDay].hour[21].wind_mph}
                    pressure={weatherData.forecast.forecastday[props.forecastDay].hour[21].pressure_mb}
                    humidity={weatherData.forecast.forecastday[props.forecastDay].hour[21].humidity}
                    precip={weatherData.forecast.forecastday[props.forecastDay].hour[21].precip_mm}
                />
            </SwiperSlide>
        </Swiper>
    )
}