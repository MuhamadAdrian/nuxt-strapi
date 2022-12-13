export interface OpeningHours {
    days: string,
    hours: string,
}

export interface Restaurant {
    id?: string,
    name?: string,
    description?: string,
    avgPrice?: number,
    image?: Record<any, string>,
    openingHours?:  OpeningHours
}