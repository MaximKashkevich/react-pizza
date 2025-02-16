import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FullPizza = () => {
	const [pizza, setPizza] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const fetchPizza = async () => {
			try {
				console.log(`Fetching pizza with ID: ${id}`) // Track the id
				const { data } = await axios.get(
					`https://07d35aebdea02678.mokky.dev/pizzas/${id}`
				)
				console.log('API response:', data) // Inspect the response
				setPizza(data)
				console.log('Pizza state:', pizza)
			} catch (error) {
				console.error('Error fetching pizza', error)
			}
		}
		fetchPizza()
	}, [])

	if (!pizza) {
		return <h2>Loading...</h2> // Loading state until data is fetched
	}

	return (
		<>
			<h1>{pizza.title}</h1>
			{pizza.price}
			<p>Pizza PIZZA</p>
		</>
	)
}

export default FullPizza
