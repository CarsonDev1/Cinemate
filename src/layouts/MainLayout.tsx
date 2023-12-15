import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';
import SideBar from '../components/sidebar/SideBar';

const MainLayout = () => {
	return (
		<div>
			<div className='flex'>
				<SideBar />
				<div className='bg-[#0F172A] w-full p-5'>
					<Header />
					<div className='mt-8'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainLayout;
