import styled from 'styled-components/native';

import { UserCircle } from 'phosphor-react-native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const User = styled(UserCircle).attrs(({ theme }) => ({
    size: 44,
    weight: 'fill',
    color: theme.COLORS.GRAY_100,
}))``;
