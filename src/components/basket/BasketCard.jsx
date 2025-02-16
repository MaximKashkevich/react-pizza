import { useDispatch, useSelector } from 'react-redux'
import { addItems, minusItem, removeItems } from '../../redux/slices/cardSlice'

export default function BasketCard({
	id,
	title,
	weight2, //убрать
	price,
	imageUrl,
	count,
	setEmpty,
}) {
	const dispatch = useDispatch()

	const items = useSelector(state => state.card.items)

	const onClickPlus = () => {
		dispatch(
			addItems({
				id,
			})
		)
	}

	const onClickMinus = () => {
		dispatch(minusItem(id))

		if (items.length === 0) {
			setEmpty(false)
		}
	}
	const deleteitem = () => {
		if (confirm('Вы действительно хочешь удалить товар?')) {
			dispatch(removeItems(id))
		}
	}

	return (
		<>
			<main className='mx-auto mt-12 px-4'>
				<section className='flex flex-col md:flex-row items-center justify-between mx-4 md:mx-[250px]'>
					<nav className='flex items-center mb-4'>
						<img src={imageUrl} alt='BasketPizza' className='w-[80px] h-auto' />
						<div className='ml-2'>
							<h2 className='text-[20px] font-bold tracking-[1%] leading-[26.8px]'>
								{title}
							</h2>
							<p className='text-[16px] leading-[21.92px] tracking-[1%] text-gray-400'>
								{weight2}, 26 см.
							</p>
						</div>
					</nav>
					<nav className='flex items-center mb-4'>
						<button
							onClick={onClickMinus}
							disabled={count <= 0}
							className='text-orange-600 border-2 border-orange-600 rounded-full py-1 px-3'
						>
							-
						</button>
						<span className='mx-3 text-[22px] font-bold leading-[26.8px] tracking-[1%]'>
							{count}
						</span>
						<button
							onClick={onClickPlus}
							className='text-orange-600 border-2 border-orange-600 rounded-full py-1 px-3'
						>
							+
						</button>
					</nav>
					<nav className='mb-4'>
						<span className='mx-3 text-[22px] font-bold leading-[26.8px] tracking-[1%]'>
							{price * count} ₽
						</span>
					</nav>
					<nav>
						<a href='#'>
							<svg
								onClick={deleteitem}
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<circle
									cx='16'
									cy='16'
									r='15'
									fill='white'
									stroke='#D7D7D7'
									strokeWidth='2'
								/>
								<path
									d='M19.7479 17.9557L17.4993 15.7071L19.7479 13.4585C20.1618 13.0446 20.1618 12.3734 19.7479 11.9595C19.334 11.5455 18.6628 11.5455 18.2488 11.9595L16.0002 14.2081L13.7516 11.9595C13.3377 11.5455 12.6665 11.5455 12.2526 11.9595C11.8386 12.3734 11.8386 13.0446 12.2526 13.4585L14.5012 15.7071L12.2526 17.9557C11.8386 18.3696 11.8386 19.0409 12.2526 19.4548C12.6665 19.8687 13.3377 19.8687 13.7516 19.4548L16.0002 17.2062L18.2488 19.4548C18.6628 19.8687 19.334 19.8687 19.7479 19.4548C20.1618 19.0409 20.1618 18.3696 19.7479 17.9557Z'
									fill='#D0D0D0'
								/>
							</svg>
						</a>
					</nav>
				</section>
			</main>
		</>
	)
}
