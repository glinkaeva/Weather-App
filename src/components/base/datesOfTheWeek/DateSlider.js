import { useSelector } from "react-redux"
import { useState } from "react";

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper"

import DateLayout from "./dateLayout";
import PartOfDayContainer from '../partOfDayWeather/partOfDayContainer'


export default function DateSlider() {
    const isLoading = useSelector((state) => state.weather.isLoading)
    const weatherData = useSelector((state) => state.weather.weatherData)

    const [handlerDate, setHandlerDate] = useState(0)

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
                },
                768: {
                    slidesPerView: 2,
                },
                1080: {
                    slidesPerView: 3,
                },
                1440: {
                    slidesPerView: 4,
                }
            }}
        >
            { (isLoading) && <p>Is Loading...</p> }
            {
                (weatherData) ?
                <>
                    {weatherData.forecast.forecastday.map(({date, date_epoch}) => (
                        <SwiperSlide key={date_epoch} onClick={() => {setHandlerDate(weatherData.forecast.forecastday.findIndex(el => el.date === date))}}>
                            <DateLayout 
                                time={date}
                            />
                        </SwiperSlide>
                    ))}
                    <PartOfDayContainer 
                        weather={weatherData}
                        forecastDay={handlerDate}
                    />
                </>
                : console.log('Something wrong') //TODO: добавить компонент для отрисовки ошибки данных
            }
        </Swiper>
    )
}
