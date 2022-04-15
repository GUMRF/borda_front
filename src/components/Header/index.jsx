import { NavMenu } from './NavMenu';
import CountdownTimer from './Timer';
import { Account } from './Account';

export default function Header() {
	return (
		<>
			<header
				className="
          w-full h-14 
          flex flex-row
          bg-zinc-800
          text-sm text-gray-200"
			>
				<NavMenu />
				<div className='flex flex-row flex-1 justify-between items-center h-full'>
					{/* <SearchBar/> */}
					<CountdownTimer countdownTimestampMs={20000000000000} />
					<Account />
				</div>
			</header>
		</>
	);
}