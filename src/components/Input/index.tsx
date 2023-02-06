import { RefObject } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Container, TextInputField, Title } from './styles';

type Props = TextInputProps & {
    title: string;
    inputRef?: RefObject<TextInput>;
}

export function Input({ title, inputRef, ...rest }: Props ) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
            <TextInputField 
                ref={inputRef}
                {...rest} 
            />
        </Container>
    );
}
