import { Link, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Search from './Search'

export default function Header() {
	const { items, totalPrice } = useSelector(state => state.card)
	const location = useLocation()

	console.log(items)

	const totalCount = items.reduce((sum, item) => sum + item.count, 0)

	// const pathName = window.location.pathname;
	// console.log(pathName, window.location);

	return (
		<>
			<header className='flex flex-col md:flex-row items-center justify-between mx-4 md:mx-12 pt-4 md:pt-6'>
				<section className='flex items-center mb-4'>
					<Link to='/'>
						<img src='/assets/HeaderLogo.png' alt='HeaderLogo' />
					</Link>
					<nav className='ml-3'>
						<h1 className='tracking-[1%] text-2xl font-extrabold leading-7'>
							REACT PIZZA
						</h1>
						<p className='text-gray-600 leading-5'>
							самая вкусная пицца во вселенной
						</p>
					</nav>
				</section>
				<section className='w-full md:w-auto mb-4 md:mb-0'>
					<Search />
				</section>
				{location.pathname !== '/Basket' && (
					<>
						<section>
							{totalCount ? (
								<Link to='/Basket'>
									<button className='w-full h-[50px] rounded-[30px] bg-orange-600 flex items-center justify-between px-6 md:w-auto'>
										<span className='text-white font-bold'>{totalPrice} ₽</span>
										<div className='border-l mx-4 border-gray-400 h-[25px]'></div>
										<Link className='flex items-center'>
											<svg
												width='18'
												height='18'
												viewBox='0 0 18 18'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z'
													stroke='white'
													stroke-width='1.8'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
												<path
													d='M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z'
													stroke='white'
													stroke-width='1.8'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
												<path
													d='M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669'
													stroke='white'
													strokeWidth='1.8'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>

											<span className='ml-1 text-white font-bold'>
												{totalCount}
											</span>
										</Link>
									</button>
								</Link>
							) : (
								<Link to='/BasketEmpty'>
									<button className='w-full h-[50px] rounded-[30px] bg-orange-600 flex items-center justify-between px-6 md:w-auto'>
										<span className='text-white font-bold'>{totalPrice} ₽</span>
										<div className='border-l mx-4 border-gray-400 h-[25px]'></div>
										<Link className='flex items-center'>
											<svg
												width='18'
												height='18'
												viewBox='0 0 18 18'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z'
													stroke='white'
													stroke-width='1.8'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
												<path
													d='M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z'
													stroke='white'
													stroke-width='1.8'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
												<path
													d='M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669'
													stroke='white'
													stroke-width='1.8'
													stroke-linecap='round'
													stroke-linejoin='round'
												/>
											</svg>

											<span className='ml-1 text-white font-bold'>
												{totalCount}
											</span>
										</Link>
									</button>
								</Link>
							)}
						</section>
					</>
				)}
			</header>
		</>
	)
}
