import React from 'react'
import { Cart, CartItem, ShippingAddress } from './types/Cart'
import { UserInfo } from './types/UserInfo'

type AppState = {
  mode: string
  cart: Cart
  userInfo?: UserInfo | null
}

const initialState: AppState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : null,

  mode: localStorage.getItem('mode')
    ? localStorage.getItem('mode')!
    : window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
    ? 'dark'
    : 'light',

  cart: {
    cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]'),
    shippingAddress: JSON.parse(localStorage.getItem('shippingAddress') || '{}'),
    paymentMethod: localStorage.getItem('paymentMethod') || 'PayPal',
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
  },
}

type Action =
  | { type: 'SWITCH_MODE' }
  | { type: 'CART_ADD_ITEM'; payload: CartItem }
  | { type: 'CART_REMOVE_ITEM'; payload: CartItem }
  | { type: 'CART_CLEAR' }
  | { type: 'USER_SIGNIN'; payload: UserInfo }
  | { type: 'USER_SIGNOUT' }
  | { type: 'SAVE_SHIPPING_ADDRESS'; payload: ShippingAddress }

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SWITCH_MODE': {
      const newMode = state.mode === 'dark' ? 'light' : 'dark'
      localStorage.setItem('mode', newMode)
      return { ...state, mode: newMode }
    }
    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      )
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem]

      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      )
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    case 'CART_CLEAR':
      localStorage.removeItem('cartItems')
      return { ...state, cart: { ...state.cart, cartItems: [] } }

    case 'USER_SIGNIN':
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
      return { ...state, userInfo: action.payload }

    case 'USER_SIGNOUT': {
      localStorage.removeItem('userInfo')
      localStorage.removeItem('cartItems')
      localStorage.removeItem('shippingAddress')
      localStorage.removeItem('paymentMethod')
      return {
        mode:
          window.matchMedia?.('(prefers-color-scheme: dark)')?.matches
            ? 'dark'
            : 'light',
        userInfo: null,
        cart: {
          cartItems: [],
          paymentMethod: 'PayPal',
          shippingAddress: {
            fullName: '',
            address: '',
            postalCode: '',
            city: '',
            country: '',
          },
          itemsPrice: 0,
          shippingPrice: 0,
          taxPrice: 0,
          totalPrice: 0,
        },
      }
    }
    case 'SAVE_SHIPPING_ADDRESS':
      localStorage.setItem('shippingAddress', JSON.stringify(action.payload))
      return { ...state, cart: { ...state.cart, shippingAddress: action.payload } }

    default:
      return state
  }
}

const Store = React.createContext<{
  state: AppState
  dispatch: React.Dispatch<Action>
}>({
  state: initialState,
  dispatch: () => undefined, // Avoid direct mutation
})

function StoreProvider({ children }: React.PropsWithChildren<{}>) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}

export { Store, StoreProvider }
