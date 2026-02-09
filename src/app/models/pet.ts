//objeto
export interface Pet {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
}

//Arreglo
export interface ApiResponse {
    count: number;
    data: Pet[];
}