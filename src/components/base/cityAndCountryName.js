import styled from "styled-components"
import { useSelector } from "react-redux"
import base from "../../styles/base"

const CityName = styled.p`
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;

    color: ${base.colors.darkGreen};
    margin-bottom: 20px;

    @media(max-width: 660px) {
        font-size: 32px;
        margin-bottom: 10px;
    }
    @media(max-width: 480px) {
        font-size: 26px;
        line-height: 32px;
    }
`
const Country = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: ${base.colors.grey};
    margin-bottom: 40px;

    @media(max-width: 660px) {
        font-size: 16px;
    }

    @media(max-width: 559px) {
        margin-bottom: 20px;
    }
`

export default function CityAndCountryName() {

    const weatherData = useSelector((state) => state.weather.weatherData)

    return (
        <>
            <CityName> {weatherData.location.name} </CityName>
            <Country> {weatherData.location.country}, {weatherData.location.region} </Country>
        </>
    )
}
