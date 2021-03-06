import styled from "styled-components"
import Wrapper from "../../styles/wrapper"

const ModalWrapper = styled(Wrapper)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ModalWindow = styled.div`
    width: 75%;
    background: rgba(255, 255, 255, 0.95);
    border: 5px solid lightgrey;
    border-radius: 40px;
    padding: 40px;

    @media(max-width: 1600px) {
        width: 85%;
    }

    @media(max-width: 1440px) {
        width: 95%;
    }

    @media(max-width: 559px) {
        padding: 30px;
    }

    @media(max-width: 480px) {
        width: 98%;
    }
`
export default function ModalBox({children}) {
    return (
        <ModalWrapper>
            <ModalWindow>
                {children}
            </ModalWindow>
        </ModalWrapper>
    )
}
