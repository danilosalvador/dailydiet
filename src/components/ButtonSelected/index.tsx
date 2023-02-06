import { TouchableOpacityProps } from "react-native";
import { ButtonSelectedIndicativeTypeStyleProps, ButtonSelectedTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
    type?: ButtonSelectedTypeStyleProps;
    indicative: ButtonSelectedIndicativeTypeStyleProps;
    title: string;
}

export function ButtonSelected({ type, indicative, title, ...rest }: Props) {
    return (
        <Container
            type={type}
            indicative={indicative}
            {...rest}
        >
            <Icon 
                name='circle'
                indicative={indicative}/>
            <Title>
                {title}
            </Title>
        </Container>
    );
}
