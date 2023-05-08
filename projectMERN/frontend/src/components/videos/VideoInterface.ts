export interface VideoInterface {
    url: string;
    description: string;
    title: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    _id?: string // "?" es para ver si es requerido si tiene indica que es posiblemente no sea requerido
}