import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Jersey, CartItem, User, Language } from '../types';

interface AppState {
  language: Language;
  user: User | null;
  cart: CartItem[];
  jerseys: Jersey[];
  isLoading: boolean;
}

type AppAction =
  | { type: 'SET_LANGUAGE'; payload: Language }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'ADD_TO_CART'; payload: { jersey: Jersey; size: string } }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_JERSEYS'; payload: Jersey[] }
  | { type: 'SET_LOADING'; payload: boolean };

const initialState: AppState = {
  language: 'en',
  user: null,
  cart: [],
  jerseys: [],
  isLoading: false,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(
        item => item.jersey.id === action.payload.jersey.id && item.size === action.payload.size
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.jersey.id === action.payload.jersey.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { jersey: action.payload.jersey, size: action.payload.size, quantity: 1 }],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => `${item.jersey.id}-${item.size}` !== action.payload),
      };
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          `${item.jersey.id}-${item.size}` === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'SET_JERSEYS':
      return { ...state, jerseys: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}