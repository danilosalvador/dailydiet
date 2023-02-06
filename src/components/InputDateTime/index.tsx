import { RefObject, useState } from 'react';
import { Platform, TextInput, TextInputProps } from 'react-native';

import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { formatDate, formatTime } from '@utils/format';

import { Container } from './styles';

type Props = TextInputProps & {
    title: string;
    mode?: 'date' | 'time';
    inputRef?: RefObject<TextInput>;
    onChangeValue?: (value?: Date) => void;
}

export function InputDateTime({ title, mode = 'date', inputRef, onChangeValue, ...rest }: Props) {
    const [dateTime, setDateTime] = useState<Date>();
    const [show, setShow] = useState(false);

    function handleChangeDateTime(event: DateTimePickerEvent, value?: Date) {
        setDateTime(value);
        if (Platform.OS === 'android') {
            setShow(false);
        }
        if (!!onChangeValue) {
            onChangeValue(value);
        }
    }

    function handleFocus() {
        setShow(true);
    }

    function handleLostFocus() {
        setShow(false);
    }

    return (
        <>
            <Container
                title={title}
                inputRef={inputRef}
                onFocus={handleFocus}
                onBlur={handleLostFocus}
                value={mode === 'date' ? formatDate(dateTime) : formatTime(dateTime)}
                {...rest}
            />
            {show && (
                <DateTimePicker
                    value={dateTime ?? new Date()}
                    mode={mode}
                    is24Hour={true}
                    onChange={handleChangeDateTime}
                />
            )}
        </>
    );
}
