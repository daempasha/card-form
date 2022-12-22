import create from 'zustand'

interface CardState {
    number?: string;
    name?: string;
    cvc?: string;
    expiryMonth?: string;
    expiryYear?: string;
    setNumber: (number: string) => void;
    setCvc: (cvc: string) => void;
    setName: (cvc: string) => void;
    setExpiryMonth: (expiryMonth: string) => void;
    setExpiryYear: (expiryYear: string) => void;

}

export const useCardStore = create<CardState>((set) => ({
    number:undefined,
    cvc:undefined,
    name:undefined,
    expiryMonth:undefined,
    expiryYear:undefined,
    setNumber: (number: string) => set({ number }),
    setCvc: (cvc: string) => set({ cvc }),
    setName: (name: string) => set({ name }),
    setExpiryYear: (expiryYear: string) => set({ expiryYear }),
    setExpiryMonth: (expiryMonth: string) => set({ expiryMonth })

}))