import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

import { ArrowUpRight, ArrowDownRight } from 'phosphor-react-native';

export type PercentButonTypeStyleProps = 'ABOVE' | 'BELOW';

type Props = {
    type: PercentButonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    ${({ theme, type }) => css`
        background-color: ${type === 'ABOVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
        border-color: ${type === 'ABOVE' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
    `};
    align-items: center;
    justify-content: center;
    padding: 12px 12px 20px;
    border-radius: 8px;
    border-width: 0.8px;
`;

export const Content = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const PercentValue = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.TITLE.G}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-top: 16px;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.BODY.S}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;

export const Space = styled.View`
    width: 32px;
`;

export const ArrowAbove = styled(ArrowUpRight).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_DARK,
    size: 32,
}))``;

export const ArrowBelow = styled(ArrowDownRight).attrs(({ theme }) => ({
    color: theme.COLORS.RED_DARK,
    size: 32,
}))``;
