import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { AppError } from '@utils/AppError';
import { formatDate, formatTime } from '@utils/format';

import { Header } from '@components/Header';

import { foodGetByIdAsync } from '@storage/food/foodGetByIdAsync';
import { FoodDTO } from '@dto/FoodDTO';

import { 
    Container, 
    Content, 
    Form, 
    InputField, 
    InputDateTimeField,
    ContentField, 
    ContentLine, 
    InsideButton,
    InsideTitle,
    SaveButton
} from './styles';

type RouteParams = {
    id?: string;
}

export function Register() {
    const [food, setFood] = useState<FoodDTO>({} as FoodDTO);

    const route = useRoute();
    const { id } = route.params as RouteParams;
   
    async function handleSave() {
        try {
            
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Ops...', error.message);
            } else {
                Alert.alert('Epa!', 'Não foi possível salvar a refeição.');
                console.log(error);
            }
        }
    }

    async function loadData() {
        try {
            if (!!id) {
                const item = await foodGetByIdAsync(id);
                setFood(item || {} as FoodDTO);
            }
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Ops...', error.message);
            } else {
                Alert.alert('Epa!', 'Não foi possível carregar a refeição.');
                console.log(error);
            }
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <Container>
            <Content>
                <Header
                    title="Nova Refeição"
                />
                <Form>
                    <ContentField>
                        <InputField 
                            title="Nome"
                            placeholder="Nome da refeição"
                            value={food.name}
                            onChangeText={name => setFood(prevState => ({...prevState, name}))}
                        />
                    </ContentField>
                    <ContentField>
                        <InputField 
                            style={{ height:120 }} 
                            title="Descrição"
                            placeholder="Detalhes da refeição"
                            multiline 
                            value={food.description}
                            onChangeText={description => setFood(prevState => ({...prevState, description}))}
                        />
                    </ContentField>
                    <ContentLine>
                        <ContentField style={{ width: '48%' }}>
                            <InputDateTimeField
                                title="Data"
                                placeholder="Data"
                                mode='date'
                                value={formatDate(food.registerDateTime)}
                                onChangeValue={value => setFood(prevState => ({...prevState, registerDateTime: value || new Date}))}
                            />
                        </ContentField>
                        <ContentField style={{ width: '48%' }}>
                            <InputDateTimeField 
                                title="Hora"
                                placeholder="Hora"
                                mode='time'
                                value={formatTime(food.registerDateTime)}
                                onChangeValue={value => setFood(prevState => ({...prevState, registerDateTime: value || new Date}))}
                            />
                        </ContentField>
                    </ContentLine>
                    <InsideTitle>
                        Está dentro da dieta?
                    </InsideTitle>
                    <ContentLine>
                        <ContentField style={{ width: '48%' }}>
                            <InsideButton 
                                indicative='INSIDE'
                                title="Sim"
                                type={food.type === 'INSIDE' ? 'SELECTED' : 'UNSELECTED'}
                                onPress={() => setFood(prevState => ({...prevState, type: 'INSIDE'}))}
                            />
                        </ContentField>
                        <ContentField style={{ width: '48%' }}>
                            <InsideButton 
                                indicative='OUTSIDE'
                                title='Não'
                                type={food.type === 'OUTSIDE' ? 'SELECTED' : 'UNSELECTED'}
                                onPress={() => setFood(prevState => ({...prevState, type: 'OUTSIDE'}))}
                            />
                        </ContentField>
                    </ContentLine>
                    <SaveButton
                        title='Salvar'
                        onPress={handleSave}
                    />
                </Form>
            </Content>
        </Container>
    );
}
