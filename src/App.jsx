import qs from 'qs'
import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '/src/index.css'

import Card from './components/CardPizza'
import Filters from './components/Filters'
import Header from './components/Header'
import Sort from './components/Sort'

import Pagination from './components/Pagination'
import Skeleton from './components/Skeleton'

import { useDispatch, useSelector } from 'react-redux'
import { setFilterIndex, setFilters } from './redux/slices/filterSlice'
import { fetchPizzas } from './redux/slices/pizzaSlice'
import { setSortType } from './redux/slices/sortSlice'

export const SearchContext = createContext({ searchValue: '' })

export default function App() {
	const sortValues = [
		{ name: 'популярности', sortProperty: 'rating' },
		{ name: 'по цене', sortProperty: 'price' },
		{ name: 'по алфавиту', sortProperty: 'title' },
	]

	const [cardItems, setCardItems] = useState([]) ////////////////////////////////ВЫНЕСТИ В ОТДЕЛЬНЫЙ REDUX ФАЙЛ
	const [loading, setLoading] = useState(true)
	// const [filterIndex, setFilterIndex] = useState(0);
	// const [sortType, setSortType] = useState({
	//   name: "популярности", // значения по умолчанию
	//   sortProperty: "rating",
	// })
	const [searchValue, setSearchValue] = useState('')

	const navigate = useNavigate()

	///////////////////////////////////////// REDUX TOOLKIT:
	const filterIndex = useSelector(state => state.filter.filterIndex)
	const sortType = useSelector(state => state.sort.sortType)
	const pizzas = useSelector(state => state.pizzas.pizzas)
	const dispatch = useDispatch()

	const onChangeFilter = id => {
		dispatch(setFilterIndex(id))
	}

	const onChangeSort = id => {
		dispatch(setSortType(id))
	}
	/////////////////////////////////////////
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1))

			const sort = sortValues.find(
				obj => obj.sortProperty === params.sortProperty
			)

			dispatch(
				setFilters({
					...params,
					sort,
				})
			)
		}
	}, [dispatch])

	useEffect(() => {
		// const fetchData = async () => {
		//   setLoading(true);

		//   try {
		//     const params = new URLSearchParams({
		//       ...(filterIndex > 0 && { category: filterIndex }),
		//       ...(sortType && { sortBy: sortType.sortProperty }), // Проверяем, что sortType существует перед использованием
		//       ...(searchValue &&
		//         searchValue.trim() !== "" && {
		//           title: searchValue.trim(),
		//         }), // Проверка на пустое значение
		//     });

		//     const response = await fetch(
		//       `https://07d35aebdea02678.mokky.dev/pizzas?${params}`
		//     );

		//     if (!response.ok) {
		//       throw new Error("Network response was not ok");
		//     }

		//     const data = await response.json();
		//     setCardItems(data);
		//   } catch (err) {
		//     console.error("Ошибка при загрузке данных:", err);
		//   } finally {
		//     setLoading(false);
		//   }
		// };

		const fetchData = async () => {
			setLoading(true)

			try {
				const params = {
					...(filterIndex > 0 && { category: filterIndex }),
					...(sortType && { sortBy: sortType.sortProperty }), // Проверяем, что sortType существует перед использованием
					...(searchValue && {
						title: searchValue.trim(),
					}),
				}

				dispatch(
					fetchPizzas({
						params,
					})
				)
			} catch (err) {
				console.error('Ошибка при загрузке данных:', err)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [filterIndex, sortType, searchValue])

	useEffect(() => {
		const queryString = qs.stringify({
			sortProperty: sortType.sortProperty,
			filterIndex,
		})

		navigate(`?${queryString}`)

		console.log(queryString)
	}, [filterIndex, sortType.sortProperty, navigate])

	///////////////////////////////////////// ПАГИНАЦИЯ:

	const itemsPerPage = 3 // Количество элементов на странице
	const [currentPage, setCurrentPage] = useState(0)

	// Вычисляем индексы элементов, которые нужно отобразить
	const offset = currentPage * itemsPerPage
	const currentItems = pizzas.slice(offset, offset + itemsPerPage)
	const pageCount = Math.ceil(pizzas.length / itemsPerPage) // Общее количество страниц

	// Функция для обработки клика по странице
	const handlePageClick = event => {
		const selectedPage = event.selected
		setCurrentPage(selectedPage)
	}

	/////////////////////////////////////////

	return (
		<>
			{/* СДЕЛАТЬ ОТОБРАЖЕНИЕ ОШИБОК ЧЕРЕЗ ERROR(НЕ ПОДКЛЮЧЕН ИНТЕРНЕТ И ТД) */}
			<SearchContext.Provider value={{ searchValue, setSearchValue }}>
				<main className='bg-white w-[95%] m-auto h-full mt-9 mb-9 shadow-xl rounded-xl pb-24'>
					<Header />
					<div className='border border-b mt-10'></div>
					{/* Сортировка и фильтрация */}
					<div className='mx-[20%] sm:mx-10 lg:mx-16 flex flex-col sm:flex-row items-start sm:items-center justify-between mt-10'>
						<Filters
							filterIndex={filterIndex}
							filterIndexClick={onChangeFilter}
						/>
						<Sort
							sortValues={sortValues}
							sortType={sortType}
							sortIndexClick={onChangeSort}
						/>
					</div>
					{/* компонент пицц */}
					<div className='mx-4 sm:mx-12 mt-12'>
						<h1 className='font-bold tracking-[1%] mb-4 text-[24px] sm:text-[28px] leading-[1.2] text-center md:text-left'>
							Все пиццы
						</h1>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
							{loading
								? Array.from({ length: 6 }).map((_, index) => (
										<Skeleton key={index} />
								  ))
								: currentItems.map(item => <Card key={item.id} {...item} />)}
						</div>

						{/* Пагинация */}
						<Pagination
							pageCount={pageCount}
							currentPage={currentPage}
							onPageChange={handlePageClick}
						/>
					</div>
					{/* Корзина */}
					{/* <BasketGeneral /> */}
					{/* <BasketEmpty /> */}
				</main>
			</SearchContext.Provider>
		</>
	)
}
