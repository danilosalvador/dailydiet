import AsyncStorage from '@react-native-async-storage/async-storage';

import { FOOD_COLLECTION } from '@storage/storageConfig';

import { FoodDTO } from "@dto/FoodDTO";

export async function foodListAsync() : Promise<FoodDTO[]> {
    try {
        const storage = await AsyncStorage.getItem(FOOD_COLLECTION);

        const list: FoodDTO[] = !!storage ? JSON.parse(storage) : [];

        return list;
    } catch (error) {
        throw error;
    }
}
