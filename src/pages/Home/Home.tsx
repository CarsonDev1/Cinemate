import MovieCard from '../../components/movie-card/MovieCard';
import Banner from '../../components/swiper/Banner';

const Home = () => {
	return (
		<div className='mx-auto'>
			<Banner />
			<div className='mt-10'>
				<h3 className='text-xl text-[#ffff] font-semibold'>Now Playing</h3>
				<div className='flex gap-3'>
					{Array(5)
						.fill(0)
						.map((index) => (
							<div key={index}>
								<MovieCard />
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Home;
