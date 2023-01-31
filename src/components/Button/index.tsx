import { TouchableOpacityProps } from "react-native";

import { MaterialIcons } from '@expo/vector-icons';

import { ButtonTypeStyleProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    icon?: keyof typeof MaterialIcons.glyphMap;
}

export function Button({ title, type = 'PRIMARY', icon, ...rest }: Props) {
    return (
        <Container 
            type={type}
            {...rest}>
            { !!icon && (
            <Icon 
                type={type}
                name={icon}/>
            )}
            <Title type={type}>
                {title}
            </Title>
        </Container>
    );
}
