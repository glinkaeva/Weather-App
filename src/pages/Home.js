import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useRef, useState } from 'react';

import styled from 'styled-components'
import base from '../styles/base'

import { fetchData } from '../slices/weatherFetch';
import Wrapper from '../styles/wrapper';

import { motion } from 'framer-motion'

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
    }

    @media(max-width: 560px) {
        font-size: 24px;
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

    outline: none;
    transition: .5s;

    &::placeholder {
        text-transform: initial;
    }

    &:focus {
        animation: focusInput 1s 1;
        
        @keyframes focusInput {
            50% {
                transform: scale(1.03);
            }
            100% {
                transform: scale(1);
            }
        }
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

    transition: 0.5s;
    &:hover {
        transform: scale(1.03);
    }

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
    const linkRef = useRef('null')

    return (
        <motion.div 
            inital={{transform: 'translateX(0px)'}}
            animate={{transform: 'translateX(0px)'}}
            exit={{transform: 'translateX(100%)'}}

            style={{width: '100%', position: 'absolute'}}
        >
            <Wrapper>
                <Text>Hello! Welcome to the <span style={{color: '#4314FF'}}>weather app</span>.</Text>
                <Text>Start typing your city in the input field to find out the weather!</Text>
                <InputCont>
                    <Input 
                        placeholder='Start typing your city' 
                        onChange={(e) => {
                            e.target.value = e.target.value.replace(/[.,;=+{}/\\[\]'"&%$#@!&*^|їіА-яа-я0-9]/g, '')
                            setCity(e.target.value)
                        }}
                        onKeyUp={(e) => {
                            if(e.keyCode === 13){
                                linkRef.current.click()
                            }
                        }}
                        value={city}
                    />
                    <Button>
                        <Link ref={linkRef} onClick={() => {dispatch(fetchData(city)); localStorage.setItem('saveCity', city)} } key='/current-forecast' to="/current-forecast" style={{display: 'block', width: '100%'}}>
                            Let&apos;s go
                        </Link>
                    </Button>
                </InputCont>
            </Wrapper>
        </motion.div>
    )
}
