import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='flex justify-between'>
			<div className='flex items-center gap-10 text-[#808191] text-base font-bold'>
				<Link to=''>
					<span className='hover:text-[#F43D71]'>TV Series</span>
				</Link>
				<Link to=''>
					<span className='hover:text-[#F43D71]'>Movies</span>
				</Link>
				<Link to=''>
					<span className='hover:text-[#F43D71]'>Anime</span>
				</Link>
			</div>
			<div className='flex-[0_1_255px] '>
				<Search />
			</div>
			<div>
				<User />
			</div>
		</div>
	);
};

export default Header;

function Search() {
	return (
		<div className='p-[10px] flex items-center bg-[#424242 gap-2 rounded-lg border border-[#f2eff51c]'>
			<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
				<path
					d='M12.803 13.8637C13.0959 14.1566 13.5708 14.1566 13.8637 13.8637C14.1566 13.5708 14.1566 13.0959 13.8637 12.803L12.803 13.8637ZM11.25 7C11.25 9.34721 9.34721 11.25 7 11.25V12.75C10.1756 12.75 12.75 10.1756 12.75 7H11.25ZM7 11.25C4.65279 11.25 2.75 9.34721 2.75 7H1.25C1.25 10.1756 3.82436 12.75 7 12.75V11.25ZM2.75 7C2.75 4.65279 4.65279 2.75 7 2.75V1.25C3.82436 1.25 1.25 3.82436 1.25 7H2.75ZM7 2.75C9.34721 2.75 11.25 4.65279 11.25 7H12.75C12.75 3.82436 10.1756 1.25 7 1.25V2.75ZM13.8637 12.803L11.0719 10.0113L10.0113 11.0719L12.803 13.8637L13.8637 12.803Z'
					fill='#808191'
				/>
			</svg>
			<input
				type='text'
				placeholder='Quick search . . .'
				className='w-full text-xs font-normal bg-transparent outline-none'
			/>
		</div>
	);
}

function User() {
	return (
		<>
			<div className='flex gap-[10px]'>
				<img
					src='https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/61472829_1236979896470898_6193726815203229696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_eui2=AeEdV2MS38IE_QEXULVwhePB6XO9J9LQObzpc70n0tA5vKBg8tgjuI8VT0J0VtbFL7e5jr_fK1RNfwbR1V8b_a3c&_nc_ohc=s4HvEOErx5wAX_DpVaQ&_nc_ht=scontent.fhan3-3.fna&oh=00_AfChFgbfP-7qsTX05r2y8uJ1LznnLOhHIXAAdfdHRjIxlg&oe=65A36164'
					alt=''
					className='w-10 h-10 rounded-full'
				/>
				<div className='flex flex-col items-center'>
					<span className='text-sm font-semibold text-[#11142D]'>Van Tuyet To</span>
					<span className='text-sm font-normal text-[#808191]'>Admin</span>
				</div>
			</div>
		</>
	);
}
