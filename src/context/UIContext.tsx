import { createContext, useContext, useState, ReactNode } from 'react';

type UIMood = 'default' | 'react' | 'ai' | 'data';

interface UIContextType {
    mood: UIMood;
    setMood: (mood: UIMood) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider = ({ children }: { children: ReactNode }) => {
    const [mood, setMood] = useState<UIMood>('default');

    return (
        <UIContext.Provider value={{ mood, setMood }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUI = () => {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
};
