import { FoodDTO } from "@dto/FoodDTO";
import { foodListAsync } from "./foodListAsync";

export async function foodGetByIdAsync(id: string) : Promise<FoodDTO | undefined> {
    try {
        const list = await foodListAsync();
        const food = list.find(item => item.id === id);

        return food;
    } catch (error) {
        throw error;
    }
}
