import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styled, { css } from 'styled-components/native';

import { Input } from '@components/Input'
import { InputDateTime } from '@components/InputDateTime';
import { ButtonSelected } from '@components/ButtonSelected';
import { Button } from '@components/Button';

export type RegisterTypeStyleProps = 'ABOVE' | 'BELOW';

type Props = {
    type?: RegisterTypeStyleProps;
}

export const Container = styled(View)<Props>`
    ${({ theme, type }) => css`
        background-color: ${!type ? theme.COLORS.GRAY_400 : type === 'ABOVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    `}
    flex: 1;
`;

export const Content = styled(SafeAreaView)`
    flex: 1;
`;

export const Form = styled.View`
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_700}
    `}
    flex: 1;
    margin-top: 20px;
    padding: 30px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const ContentField = styled.View`
    margin-bottom: 15px;
`

export const ContentLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const InputField = styled(Input)`
    padding: 15px;
`;

export const InputDateTimeField = styled(InputDateTime)`
    padding: 15px;
`;

export const InsideTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const InsideButton = styled(ButtonSelected)``;

export const SaveButton = styled(Button)`
    margin-top: 15px;
`
