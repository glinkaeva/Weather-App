import { useDispatch, useSelector } from "react-redux"

import styled from "styled-components"
import base from "../styles/base"

import { getDayWeek, getFullDate } from "../const/getCurrentDate"
import { fetchData } from '../slices/weatherFetch';

import PartOfDayContainer from '../components/base/partOfDayWeather/PartOfDayContainer'
import CityAndCountryName from "../components/base/CityAndCountryName";
import ModalBox from "../components/common/ModalBox";
import ErrorPage from "./Exceptions/ErrorPage";
import LoadingPage from "./Exceptions/LoadingPage";
import LinkBack from "../components/base/LinkBack"

import { motion } from 'framer-motion'
import { useEffect } from "react"

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;

    @media(max-width: 768px) {
        display: block;
        margin: 0 auto;
    }

    @media(max-width: 480px) {
        margin-bottom: 20px;
    }
`

const TempContainer = styled.div`
    @media(max-width: 559px) {
        width: 100%;
        order: -1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
`

const CityDateCont = styled.div`
    @media(max-width: 559px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    @media(max-width: 480px) {
        display: block;
    }
`

const CurrentDate = styled.p`
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: ${base.colors.darkBlue};

    @media(max-width: 559px) {
        font-size: 18px;
        text-align: right;
    }
    @media(max-width: 480px) {
        text-align: left;
        margin-bottom: 5px;
    }
`

const CurrentTemperature = styled.p`
    font-weight: 400;
    font-size: 70px;
    line-height: 82px;
    color: ${base.colors.darkOrange};

    @media(max-width: 660px) {
        font-size: 68px;
        line-height: 68px;
    }
    @media(max-width: 480px) {
        font-size: 56px;
        line-height: 56px;
    }

    @media(max-width: 385px) {
        font-size: 48px;
        line-height: 48px;
    }

    @media(max-width: 360px) {
        font-size: 40px;
        line-height: 40px;
    }
`

const Sun = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: ${base.colors.black};
    margin-top: 15px;

    @media(max-width: 660px) {
        margin-top: 14px;
    }

    @media(max-width: 559px) {
        margin-top: 0px;
        &+& {
            margin-top: 10px;
        }
    }
    @media(max-width: 385px) {
        font-size: 14px;
    }

    @media(max-width: 360px) {
        &+& {
            margin-top: 5px;
        }
    }
`

export default function CurrentForecast() {
    const isLoading = useSelector((state) => state.weather.isLoading)
    const weatherData = useSelector((state) => state.weather.weatherData)

    const saveCity = localStorage.getItem('saveCity')
    const dispatch = useDispatch()

    useEffect(() => {
        if(saveCity) {
            dispatch(fetchData(saveCity))
        }
    }, [])

    return(
        <motion.div 
            inital={{transform: 'translateX(0px)'}}
            animate={{transform: 'translateX(0px)'}}
            exit={{transform: 'translateX(-100%)'}}
        >
            <ModalBox>
                {
                    (weatherData) ?
                    <>
                        <ModalHeader>
                            <CityDateCont>
                                <div>
                                    <CityAndCountryName />
                                </div>
                                <CurrentDate>{ getDayWeek() }, { getFullDate() }</CurrentDate>
                            </CityDateCont>
                            <TempContainer>
                                <CurrentTemperature> {Math.round(weatherData.current.temp_c)}°C</CurrentTemperature>
                                <div>
                                    <Sun><b>Sunrise:</b> {weatherData.forecast.forecastday[0].astro.sunrise}</Sun>
                                    <Sun><b>Sunset:</b> {weatherData.forecast.forecastday[0].astro.sunset}</Sun>
                                </div>
                            </TempContainer>
                        </ModalHeader>
                        <PartOfDayContainer weather={weatherData} forecastDay={0}/>
                        <LinkBack />
                    </>
                    : (isLoading) ? <LoadingPage /> : <ErrorPage />
                }
            </ModalBox>
        </motion.div>
    )
}