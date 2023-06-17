
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full h-14 bg-indigo-200 px-4 md:px-4">
            <div className='text-2xl text-indigo-700 font-bold md:px-4'>PW Skills</div>
            <ul className="md:flex hidden space-x-5 font-semibold">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact Us</li>
            </ul>
            <button className="hidden font-semiblod px-2 py-2 bg-indigo-700 rounded-md text-white font-semibold md:block">
                Login/SignUp
            </button>
            <div className="md:hidden">
                <button href="#" className="text-4xl font-semi-bold">&#8801;</button>
            </div>
        </nav>
    )
}

export default Navbar