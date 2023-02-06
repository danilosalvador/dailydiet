import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export type ButtonSelectedTypeStyleProps = 'SELECTED' | 'UNSELECTED';
export type ButtonSelectedIndicativeTypeStyleProps = 'INSIDE' | 'OUTSIDE';

type Props = {
    type?: ButtonSelectedTypeStyleProps,
    indicative: ButtonSelectedIndicativeTypeStyleProps,
}

export const Container = styled(TouchableOpacity)<Props>`
    ${({ theme, type, indicative }) => indicative === 'INSIDE' && css`
        background-color: ${type === 'SELECTED' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.GRAY_600};
        border-color: ${type === 'SELECTED' ? theme.COLORS.GREEN_DARK : theme.COLORS.GRAY_600};
        border-width: 1px;
    `};
    ${({ theme, type, indicative }) => indicative === 'OUTSIDE' && css`
        background-color: ${type === 'SELECTED' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600};
        border-color: ${type === 'SELECTED' ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_600};
        border-width: 1px;
    `};
    border-radius: 6px;
    padding: 18px;

    flex-direction: row;

    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, indicative }) => ({
    color: indicative === 'INSIDE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 15,
}))`
    margin-right: 5px;
`;
