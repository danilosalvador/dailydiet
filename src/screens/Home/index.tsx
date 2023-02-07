import { HeaderHome } from '@components/HeaderHome';
import { useNavigation } from '@react-navigation/native';

import { ButtonAdd, Container, Percent, Subtitle } from './styles';

export function Home() {

    const navigation = useNavigation();

    function handleOpenNewRegister() {
        navigation.navigate('register', { id: undefined });
    }

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
                onPress={handleOpenNewRegister}
             />
        </Container>
    );
}
