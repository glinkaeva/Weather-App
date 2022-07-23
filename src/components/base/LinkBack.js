import styled from "styled-components"
import base from "../../styles/base"
import { Link } from "react-router-dom";

const LinkCont = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

    @media(max-width: 559px) {
        display: block;
    }
    
    .link {
        display: block;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;

        text-decoration-line: underline;

        color: ${base.colors.grey};

        @media(max-width: 660px) {
            font-size: 16px;
        }
        @media(max-width: 559px) {
            margin-bottom: 10px;
        }
    }
`

export default function LinkBack() {
    return (
        <LinkCont>
            <Link className="link" to="/">
                Back to search page
            </Link>
        </LinkCont>
)
}
