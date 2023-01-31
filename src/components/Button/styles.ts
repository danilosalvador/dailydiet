import { Text, TouchableOpacity } from 'react-native';

import styled, { css } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    ${({ theme, type }) => css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};
        border-color: ${theme.COLORS.GRAY_200};
    `}
    
    flex-direction: row;

    align-items: center;
    justify-content: center;

    padding: 15px;
    border-width: 1px;
    border-radius: 6px;
`;

export const Title = styled(Text)<Props>`
    ${({ theme, type}) => css`
        color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.BODY.S}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-left: 6px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    color: type === 'PRIMARY' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_200,
    size: 18,
}))``;