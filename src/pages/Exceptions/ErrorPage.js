import styled from "styled-components";
import base from "../../styles/base";

import { useSelector } from "react-redux"
import errorImage from '../../images/error-image.webp'
import LinkBack from "../../components/base/LinkBack";

const Wrapper = styled.div`
    width: 100%;
`

const ErrorHeadline = styled.p`
    font-weight: 500;
    font-size: 48px;
    line-height: 1.5;
    margin-bottom: 40px;

    color: ${base.colors.darkOrange};

    @media (max-width: 960px) {
        font-size: 42px;
    }
    @media (max-width: 768px) {
        font-size: 36px;
    }

    @media (max-width: 660px) {
        font-size: 28px;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        font-size: 23px;
    }
`

const ErrorText = styled.p`
    font-weight: 500;
    font-size: 26px;
    line-height: 1.5;
    margin-bottom: 40px;

    @media (max-width: 960px) {
        font-size: 22px;
        margin-bottom: 15%;
    }

    @media (max-width: 660px) {
        font-size: 18px;
    }
`

const ErrorImage = styled.img`
    width: 70%;
    margin: 0 auto;
    margin-bottom: 40px;

    @media (max-width: 1080px) {
        width: 80%;
    }
    @media (max-width: 960px) {
        width: 90%;
    }

    @media (max-width: 580px) {
        width: 100%;
    }
`

export default function ErrorPage() {
    const error = useSelector((state) => state.weather.error)
    return(
        <Wrapper>
            <ErrorHeadline>
                Sorry, but something wrong :(
            </ErrorHeadline>
            <ErrorText>
                Error: {error}
            </ErrorText>
            <ErrorImage src={errorImage} alt="error image"/>
            <LinkBack />
        </Wrapper>
    )
}