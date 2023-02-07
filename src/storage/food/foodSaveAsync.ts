import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

import { AppError } from '@utils/AppError';

import { FOOD_COLLECTION } from '@storage/storageConfig';

import { FoodDTO } from '@dto/FoodDTO';
import { foodListAsync } from './foodListAsync';

export async function foodSaveAsync(food: FoodDTO) : Promise<void> {
    try {
        if (food.name.trim().length === 0) {
            throw new AppError("Digite um nome para a refeição.");
        }

        const list = await foodListAsync();
        let storage: string;

        if (!!food.id) {
            const index = list.findIndex(item => item.id === food.id);

            if (index === -1) {
                storage = insert(list);    
            } else {
                storage = update(list, index);
            }
        } else {
            storage = insert(list);
        }

        await AsyncStorage.setItem(FOOD_COLLECTION, storage);
    } catch (error) {
        throw error;
    }

    function insert(list: FoodDTO[]) : string {
        const storage = JSON.stringify([...list, {...food, id: uuidv4() }]);
        return storage;
    }

    function update(list: FoodDTO[], index: number) : string {
        let newList = [...list];
        newList[index] = food;

        const storage = JSON.stringify(newList);
        return storage;
    }
}
