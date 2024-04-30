import { Link, Outlet } from 'react-router-dom'
import icon0 from '/src/assets/admin/shopping-cart.svg'
import icon1 from '/src/assets/admin/user-cirlce-add.svg'
import icon2 from '/src/assets/admin/user.svg'

const Admin = () => {
	return (
		<div className="w-full flex relative">
			<LeftPanel />
			<MiddleSection />
			
		</div>
	)
}


const LeftPanel = () => {
	const Button = ({ text, icon, href }:{text: string, icon: string, href: string }) => {
		return (
			<Link to={'/admin'+href} className="flex justify-center w-full bg-white text-black py-3 rounded-md mb-3">
				<img src={icon} alt={text} className="max-h-6" />
				{text}
			</Link>
		)
	}

	return (
		<div className=" bg-main-indigo min-w-[300px] max-w-[330px] min-h-screen text-white px-7 py-8">
			<h1 className="font-bold text-2xl">Starplast<span className="text-main-pink">Admin</span></h1>

			<div className="mt-6">
				<Button href='/products' icon={icon0} text="Products" />
				<Button href='/new_user' icon={icon1} text="New users" />
				<Button href='/users' icon={icon2} text="Users" />

			</div>
		</div>
	)
}

const MiddleSection = () => {
	return (
		<div className="px-7 py-24 w-full" >
			<Outlet />
		</div>
	)
}


export default Admin