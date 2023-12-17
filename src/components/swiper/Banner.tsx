import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Banner() {
	return (
		<div>
			<Swiper
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination, Navigation]}
				className='w-[1000px] h-[500px] relative rounded-lg'
			>
				<SwiperSlide>
					<img
						src='https://getreelmovies.com/wp-content/uploads/2019/08/mcu-avengers-endgame.jpg'
						alt=''
						className='relative rounded-lg opacity-70'
					/>
					<div className='absolute p-10 top-[200px] gap-4 flex flex-col'>
						<h1 className='text-[#f7f7f7] font-extrabold text-4xl'>Avengers: Endgame</h1>
						<div className='flex gap-5'>
							<span className='p-2 border rounded-md text-[#f7f7f7]'>Action</span>
							<span className='p-2 border rounded-md text-[#f7f7f7]'>Adventure</span>
							<span className='p-2 border rounded-md text-[#f7f7f7]'>Drama</span>
						</div>
						<div className='flex items-center gap-4'>
							<div className='flex items-center justify-center px-8 py-2 text-white bg-[#F43D71] rounded-lg gap-3 cursor-pointer'>
								<span className='font-semibold tracking-wide'>Watch</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-10 h-10'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
									/>
								</svg>
							</div>
							<div className='flex items-center justify-center px-4 py-4 text-white bg-[#4d4d4c] rounded-lg cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 6v6m0 0v6m0-6h6m-6 0H6'
									/>
								</svg>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='https://images4.alphacoders.com/268/268554.jpg'
						alt=''
						className='relative rounded-lg opacity-70'
					/>
					<div className='absolute p-10 top-[200px] gap-4 flex flex-col'>
						<h1 className='text-[#f7f7f7] font-extrabold text-4xl'>Spider Man</h1>
						<div className='flex gap-5'>
							<span className='p-2 border rounded-md text-[#f7f7f7]'>Action</span>
							<span className='p-2 border rounded-md text-[#f7f7f7]'>Adventure</span>
							<span className='p-2 border rounded-md text-[#f7f7f7]'>Drama</span>
						</div>
						<div className='flex items-center gap-4'>
							<div className='flex items-center justify-center px-8 py-2 text-white bg-[#F43D71] rounded-lg gap-3 cursor-pointer'>
								<span className='font-semibold tracking-wide'>Watch</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-10 h-10'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
									/>
								</svg>
							</div>
							<div className='flex items-center justify-center px-4 py-4 text-white bg-[#4d4d4c] rounded-lg cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 6v6m0 0v6m0-6h6m-6 0H6'
									/>
								</svg>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src='https://images5.alphacoders.com/606/606221.jpg'
						alt=''
						className='relative rounded-lg opacity-70'
					/>
					<div className='absolute p-10 top-[200px] gap-4 flex flex-col'>
						<h1 className='text-[#f7f7f7] font-extrabold text-4xl'>Attack On Titan</h1>
						<div className='flex gap-5'>
							<span className='p-2 border rounded-md text-[#f7f7f7]'>Action</span>
							<span className='p-2 border rounded-md text-[#f7f7f7]'>Adventure</span>
							<span className='p-2 border rounded-md text-[#f7f7f7]'>Drama</span>
						</div>
						<div className='flex items-center gap-4'>
							<div className='flex items-center justify-center px-8 py-2 text-white bg-[#F43D71] rounded-lg gap-3 cursor-pointer'>
								<span className='font-semibold tracking-wide'>Watch</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-10 h-10'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
									/>
								</svg>
							</div>
							<div className='flex items-center justify-center px-4 py-4 text-white bg-[#4d4d4c] rounded-lg cursor-pointer'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='w-6 h-6'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 6v6m0 0v6m0-6h6m-6 0H6'
									/>
								</svg>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
