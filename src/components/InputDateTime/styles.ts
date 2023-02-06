import { Input } from '@components/Input';
import styled, { css } from 'styled-components/native';

export const Container = styled(Input)`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.BODY.M}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        border-color: ${theme.COLORS.GRAY_500};
    `}
`;