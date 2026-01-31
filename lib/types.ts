export interface Message {
  type: 'user' | 'bot';
  content: string;
}


export type ProductsType = {
    id: string
    image: string
    category: string
    name: string
    price: number
    description?: string
}