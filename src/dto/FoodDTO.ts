export type FoodDTO = {
    id: string;
    name: string;
    description: string;
    registerDateTime: Date;
    type: 'INSIDE'| 'OUTSIDE';
}
