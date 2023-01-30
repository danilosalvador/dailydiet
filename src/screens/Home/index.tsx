import { HeaderHome } from '@components/HeaderHome';

import { Container, Percent } from './styles';

export function Home() {
    return (
        <Container>
            <HeaderHome />
            <Percent
                type="ABOVE"
             value={90.8}/>
        </Container>
    );
}
