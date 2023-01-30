import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PercentButton } from '@components/PercentButton';

export const Container = styled(SafeAreaView)`
    padding-left: 20px;
    padding-right: 20px;
`;

export const Percent = styled(PercentButton)`
    margin-top: 32px;
`;
