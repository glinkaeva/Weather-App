import styled from "styled-components"
import base from "../../../styles/base"

// images
import wind from '../../../images/wind.svg'
import pressure from '../../../images/pressure.svg'
import humidity from '../../../images/humidity.svg'
import precip from '../../../images/precipitation.svg'

const DayItem = styled.div`
    background: ${base.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 30px 25px;
    margin-bottom: 10px;
`

const TemperatureCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    img {
        width: 80px;
        background: beige;
        border-radius: 20px;

        @media(max-width: 1280px) {
            width: 60px;
        }

        @media(max-width: 860px) {
            width: 45px;
        }
    }
`

const ItemTitle = styled.p`
    font-weight: 500;
    font-size: 22px;
    line-height: 23px;
    text-align: center;
    margin-bottom: 20px;

    color: ${props => props.color};
`

const Temperature = styled.p`
    font-weight: 500;
    font-size: 42px;
    line-height: 36px;

    color: #FF5C00;

    @media(max-width: 1280px) {
        font-size: 38px;
    }

    @media(max-width: 860px) {
        font-size: 34px;
    }
`

const FeelsLike = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    color: ${base.colors.grey};
    margin-bottom: 20px;
`

const AdditionalInformation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-bottom: 10px;

    &:last-child { margin-bottom: 0px; }

    img {
        width: 30px;
        margin: 10px 10px 10px 0;
    }

    .informationText {
        font-weight: 500;
        font-size: 22px;
        line-height: 21px;
        color: ${base.colors.black};

        @media(max-width: 860px) {
            font-size: 20px;
        }
    }
`

export default function PartOfDayItem(props) {
    return(
        <DayItem>
            <ItemTitle color={props.dayPartColor}>{props.dayPart}</ItemTitle>
            <TemperatureCont>
                <img src={props.conditionIcon} alt={props.conditionText} />
                <Temperature>{Math.round(props.temperature)}°C</Temperature>
            </TemperatureCont>
            <FeelsLike>feels like {Math.round(props.feelsLike)}°C</FeelsLike>
            <AdditionalInformation title="wind">
                <img src={wind} alt="wind" />
                <p className="informationText">
                    {props.wind} m/s
                </p>
            </AdditionalInformation>
            <AdditionalInformation title="pressure">
                <img src={pressure} alt="pressure" />
                <p className="informationText">
                    {Math.round((props.pressure)*0.750062)} mm
                </p>
            </AdditionalInformation>
            <AdditionalInformation title="humidity">
                <img src={humidity} alt="humidity" />
                <p className="informationText">
                    {props.humidity} %
                </p>
            </AdditionalInformation>
            <AdditionalInformation title="precipitation">
                <img src={precip} alt="precipitation" />
                <p className="informationText">
                    {props.precip} mm
                </p>
            </AdditionalInformation>
        </DayItem>
    ) 
}