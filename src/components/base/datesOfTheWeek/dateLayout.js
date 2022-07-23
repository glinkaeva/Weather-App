import styled from "styled-components"
import base from "../../../styles/base"

const Wrapper = styled.div`
    max-width: fit-content;
    padding: 10px 15px;
    background: ${base.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    cursor: pointer;
    margin: 10px 0px;
`

const Time = styled.p`
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #579AFF;
`

export default function DateLayout(props) {
    return (
        <Wrapper>
            <Time>{props.time}</Time>
        </Wrapper>
    )
}
