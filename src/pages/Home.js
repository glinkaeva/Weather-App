import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useRef, useState } from 'react';

import styled from 'styled-components'
import base from '../styles/base'

import { fetchData } from '../slices/weatherFetch';
import Wrapper from '../components/common/wrapper';

const Text = styled.p`
    color: ${base.colors.white};
    font-family: ${base.fonts.searchPage};
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 2;
    text-align: center;

    @media(max-width: 960px) {
        font-size: 32px;
    }

    @media(max-width: 768px) {
        font-size: 28px;
        line-height: 1.5;
    }

    @media(max-width: 560px) {
        font-size: 24px;
    }

    @media(max-width: 480px) {
        font-size: 20px;
    }

    @media(max-width: 385px) {
        font-size: 18px;
    }

    @media(max-width: 340px) {
        font-size: 16px;
    }
`

const InputCont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 15%;

    @media(max-width: 768px) {
        display: block;
        margin-top: 10%;
    }
`

const Input = styled.input`
    width: 100%;
    height: 60px;
    padding: 20px;
    margin-right: 40px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: ${base.colors.grey};
    background: rgba(255, 255, 255, 0.95);
    border: 3px solid ${base.colors.grey};
    border-radius: 40px;
    text-transform: capitalize;

    &::placeholder {
        text-transform: initial;
    }

    @media(max-width: 768px) {
        margin-bottom: 20px;
    }

    @media(max-width: 560px) {
        font-size: 16px;
    }
`

const Button = styled.button`
    min-width: 20%;
    height: 60px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 44px;
    color: ${base.colors.black};
    font-family: ${base.fonts.searchPage};
    text-transform: capitalize;

    background: rgba(255, 255, 255, 0.95);
    border: 3px solid ${base.colors.grey};
    border-radius: 40px;
    cursor: pointer;

    @media(max-width: 768px) {
        font-size: 20px;
        padding: 0px 20px;
    }

    @media(max-width: 560px) {
        font-size: 18px;
    }

    @media(max-width: 480px) {
        font-size: 16px;
    }
`

export default function Home() {
    const dispatch = useDispatch()

    const [city, setCity] = useState('')
    const buttonRef = useRef('null')

    // const history = unstable_HistoryRouter();
    // const currentForecastPage = () => {
    //     history.push('/current-forecast')
    // }

    return (
        <Wrapper>
            <Text>Hello! Welcome to the <span style={{color: '#4314FF'}}>weather app</span>.</Text>
            <Text>Start typing your city in the input field to find out the weather!</Text>
            <InputCont>
                <Input 
                    placeholder='Start typing your city' 
                    onChange={(e) => {
                        setCity(e.target.value)
                    }}
                    // TODO: придумать как обработать нажатие кнопки ENTER с переходом на страницу
                    // onKeyUp={(e) => {
                    //     if(e.keyCode === 13){
                    //         buttonRef.current.focus().onClick()
                    //     }
                    // }}
                    value={city}
                />
                <Button ref={buttonRef} onClick={() => dispatch(fetchData(city))} to="/current-forecast">
                    <Link key='/current-forecast' to="/current-forecast">
                        Let&apos;s go
                    </Link>
                </Button>
            </InputCont>
        </Wrapper>
    )
}
