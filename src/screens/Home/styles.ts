import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PercentButton } from '@components/PercentButton';
import { Button } from '@components/Button';

export const Container = styled(SafeAreaView)`
    padding-left: 20px;
    padding-right: 20px;
`;

export const Percent = styled(PercentButton)`
    margin-top: 32px;
    margin-bottom: 40px;
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.BODY.M}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;

export const ButtonAdd = styled(Button)`
    margin-top: 10px;
`;