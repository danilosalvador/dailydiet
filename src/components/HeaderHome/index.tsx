import { Container, Logo, User } from "./styles";

import imgLogo from '@assets/logo.png';

export function HeaderHome() {
    return (
        <Container>
            <Logo source={imgLogo}/>
            <User />
        </Container>
    );
}