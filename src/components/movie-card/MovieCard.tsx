import { Fragment } from 'react';

const MovieCard = () => {
	return (
		<Fragment>
			<div className='flex flex-col px-4 pt-3 pb-[1rem] mt-5 rounded-lg bg-opacity-5 bg-slate-300'>
				<div className='flex flex-col justify-between'>
					<div className='gap-2'>
						<img
							src='https://images6.alphacoders.com/525/525723.jpg'
							alt=''
							className='object-cover w-48 rounded-lg h-36'
						/>
						<div className='mt-5'>
							<span className='text-base text-white'>Adam Smiths</span>
						</div>
						<div className='flex items-center justify-between mt-2'>
							<span className='text-xs text-[#ffff]'>2017</span>
							<div className='flex items-center'>
								<span className='text-xs text-[#ffff]'>7.4</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='yellow'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									className='w-5 h-5'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className='flex items-center justify-center w-full gap-2 px-8 py-4 mt-10 font-sans font-semibold tracking-wide text-white bg-[#F43D71] rounded-lg'>
						<span>Watch now</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='white'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
							/>
						</svg>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default MovieCard;
