import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	items: [],
}

const cardSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		addItems(state, action) {
			const existingItem = state.items.find(
				item => item.id === action.payload.id
			)

			if (existingItem) {
				// Если товар уже есть, увеличиваем его количество
				existingItem.count++
			} else {
				// Если товара нет, добавляем его в корзину с количеством 1
				state.items.push({ ...action.payload, count: 1 })
			}

			// Обновляем общую стоимость корзины
			state.totalPrice = state.items.reduce(
				(sum, item) => sum + item.price * item.count,
				0
			)
		},

		removeItems(state, action) {
			state.items = state.items.filter(obj => obj.id !== action.payload)
		},

		clearItems(state) {
			state.items = []
			state.totalPrice = 0
		},

		minusItem(state, action) {
			const existingItem = state.items.find(item => item.id === action.payload)
			if (existingItem) {
				if (existingItem.count > 1) {
					existingItem.count--
				} else {
					state.items = state.items.filter(obj => obj.id !== action.payload)
					state.totalPrice = 0
				}
			}
		},
	},
})

export const { addItems, removeItems, minusItem, clearItems } =
	cardSlice.actions

export default cardSlice.reducer
