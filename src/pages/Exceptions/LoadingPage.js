import styled from "styled-components";
import { SyncLoader } from "react-spinners";
import base from "../../styles/base";

const Wrapper = styled.div`
    width: 100%;
    min-height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function LoadingPage() {
    return (
        <Wrapper>
            <SyncLoader color={base.colors.green}/>
        </Wrapper>
    )
}
