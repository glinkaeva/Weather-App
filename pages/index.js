import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'
import base from '../styles/base'

import { useDispatch } from 'react-redux/es/exports'
import { setCity } from '../slice/citySlice'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5%;
  position: relative;
  overflow: hidden;
`

const Text = styled.p`
  color: ${base.colors.white};
  font-family: ${base.fonts.searchPage};
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 71px;
  text-align: center;
`

const InputCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 15%;
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
`

const BackgroundSvg = styled.svg`
  width: 100%;
  min-height: 425px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export default function Home() {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <BackgroundSvg viewBox="0 0 1280 425" xmlns="http://www.w3.org/2000/svg">
        <path d="M72.5946 419.595C59.5723 419.823 44.8216 419.615 32.9871 418.196C26.7542 417.449 18.1617 415.985 13.4437 415.152C11.1632 414.749 8.98898 413.899 7.02813 412.667C2.65448 409.919 0 405.116 0 399.951V0H1280V382.709C1280 388.198 1277.4 393.363 1273 396.639C1271.35 397.87 1269.49 398.796 1267.51 399.375L1221.02 412.962L1178.04 419.766L1155.3 422.383L1148.69 423.144C1137.97 424.377 1127.14 424.423 1116.41 423.28C1107.53 422.335 1098.76 420.581 1090.21 418.04L1084.43 416.324C1074.54 413.389 1064.89 409.737 1055.53 405.399L1052.47 403.979C1040.57 398.461 1029.13 392.016 1018.24 384.702L1008.11 377.894L999.656 373.364C977.428 361.449 953.526 352.965 928.76 348.201L917.142 345.967L892.306 344.466C874.263 343.376 856.155 344.246 838.3 347.061L831.086 348.198C822.82 349.501 814.638 351.26 806.471 353.077C798.677 354.81 788.593 356.798 780.695 357.482C776.272 357.864 770.955 357.975 765.937 357.959C754.458 357.922 743.054 356.378 731.787 354.178L689.731 345.967L676.893 342.223C659.183 337.058 642.099 329.949 625.952 321.025L614.26 314.563L594.617 302.875C578.454 293.258 561.152 285.698 543.115 280.37C522.346 274.236 500.803 271.121 479.148 271.121H476.389C462.702 271.121 449.038 272.268 435.542 274.551L412.492 278.451C398.09 280.887 383.929 284.581 370.172 289.489L351.764 296.058C332.905 302.787 314.923 311.758 298.205 322.777L251.902 353.294L216.415 372.66L199.608 381.832C187.178 388.616 174.194 394.331 160.796 398.916L134.645 407.865C114.603 414.724 93.7754 419.224 72.5946 419.595Z" fill={`${base.colors.green}`}/>
      </BackgroundSvg>
      <Text>Hello! Welcome to the <span style={{color: '#4314FF'}}>weather app</span>.</Text>
      <Text>Start typing your city in the input field to find out the weather!</Text>
      <InputCont>
        <Input 
          placeholder='Start typing your city' 
          onChange={(e) => {
            dispatch(setCity(e.target.value))
          }}
        />
        <Button>
          <Link href="/weather">
            <a>Let&apos;s go</a>
          </Link>
        </Button>
      </InputCont>
    </Wrapper>
  )
}
