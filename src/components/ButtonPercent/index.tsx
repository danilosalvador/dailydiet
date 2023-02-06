import { TouchableOpacityProps, View } from 'react-native';

import { formatPercent } from '@utils/format';

import { 
    PercentButonTypeStyleProps, 
    Container, 
    Content, 
    Space,
    PercentValue, 
    ArrowAbove, 
    ArrowBelow, 
    Description, 
} from './styles';

type Props = TouchableOpacityProps & {
    type?: PercentButonTypeStyleProps;
    value: number;
}

export function ButtonPercent({ type = 'ABOVE', value, ...rest }: Props) {
    return (
        <Container
            type={type}
            {...rest}
        >
            <Content>
                <Space/>
                <PercentValue>
                    {formatPercent(value/100)}
                </PercentValue>
                {type === 'ABOVE' && <ArrowAbove />}
                {type === 'BELOW' && <ArrowBelow />}
            </Content>
            <Description>
                das refeições dentro da dieta
            </Description>
        </Container>
    );
}
