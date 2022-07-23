import { useSelector } from "react-redux"

// import styled from "styled-components"
// import base from "../styles/base"

import CityAndCountryName from "../components/base/cityAndCountryName"
import ModalBox from "../components/common/ModalBox"
// import DateLayout from "../components/base/datesOfTheWeek/dateLayout"
import DateSlider from "../components/base/datesOfTheWeek/DateSlider"


export default function Forecast7() {
    const isLoading = useSelector((state) => state.weather.isLoading)
    const weatherData = useSelector((state) => state.weather.weatherData)

    return(
        <ModalBox>
            { (isLoading) && <p>Данные загружаются</p> }
            {
                (weatherData) ?
                <>
                    <div>
                        <CityAndCountryName />
                    </div>
                    <DateSlider />
                </>
                : console.log('Something wrong') //TODO: добавить компонент для отрисовки ошибки данных
            }
        </ModalBox>
    )
}