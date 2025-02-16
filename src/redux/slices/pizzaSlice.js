import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
	'pizzas/fetchPizzas',
	async ({ params }, thunkApi) => {
		try {
			const { data } = await axios.get(
				'https://07d35aebdea02678.mokky.dev/pizzas',
				{ params }
			)

			// Log the thunkApi object
			//console.log(thunkApi.getState()); //Возвращает все slice, до изменения

			return data

			// if (data.length) {
			//   return thunkApi.rejectWithValue("Пиццы пустые");
			// } else {
			//   return data;
			// } При отлавливании ошибки и дополнительных параметров юзаем rejectWithValue

			//console.log(thunkApi.getState()); //Возвращает все slice, после изменения
		} catch (error) {
			throw error
		}
	}
)

const pizzaSlice = createSlice({
	name: 'pizzas',
	initialState: {
		pizzas: [],
		isLoading: false,
		error: null,
	},
	reducers: {
		setPizzas(state, action) {
			state.pizzas = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPizzas.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				// console.log(action, "fulfilled");
				state.isLoading = false
				state.pizzas = action.payload
			})
			.addCase(fetchPizzas.rejected, (state, action) => {
				// console.log(action, "rejected");
				state.isLoading = false
				state.error = action.error.message
			})
	},
})

export const { setPizzas } = pizzaSlice.actions
export default pizzaSlice.reducer
