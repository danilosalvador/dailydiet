import styled, { css } from 'styled-components/native';

import { CaretLeft } from 'phosphor-react-native';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(View)`
    flex-direction: row;

    align-items: center;
    justify-content: center;

    padding-left: 10px;
    padding-right: 10px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.TITLE.S}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    text-align: center;
    flex: 1;
    margin-right: 32px;
`;

export const BackButton = styled(TouchableOpacity)``;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    size: 32,
    color: theme.COLORS.GRAY_200,
}))``;