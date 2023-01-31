import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton, BackIcon, Container, Title } from "./styles";

type Props = {
    title: string;
}

export function Header({ title }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <BackButton onPress={handleGoBack}>
                <BackIcon />
            </BackButton>
            <Title>
                {title}
            </Title>
        </Container>
    );
}
