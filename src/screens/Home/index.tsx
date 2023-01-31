import { HeaderHome } from '@components/HeaderHome';

import { ButtonAdd, Container, Percent, Subtitle } from './styles';

export function Home() {
    return (
        <Container>
            <HeaderHome />
            <Percent
                type="ABOVE"
             value={90.8}/>
             <Subtitle>
                Refeições
             </Subtitle>
             <ButtonAdd
                title='Nova Refeição'
                type='PRIMARY'
                icon='add'
             />
        </Container>
    );
}
