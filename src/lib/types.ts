export interface ICard {
    id: number,
    title: string,
    description: string
}

export interface IStage {
    id: number,
    title: string,
    status: 'done' | 'current' | 'upcoming'
}