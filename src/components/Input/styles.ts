import styled, { css } from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`;

export const TextInputField = styled.TextInput`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.BODY.M}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        border-color: ${theme.COLORS.GRAY_500};
        border-width: 1px;
        border-radius: 6px;
    `};
`;
