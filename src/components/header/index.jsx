import { Link } from 'react-scroll';

function Header() {
    return (
        
        <header className="flex justify-center items-center font-bold  h-16 sm:h-20  bg-black/40 border-opacity-10  text-white shadow-2xl px-4 z-50 sm:px-6 absolute top-0 left-0 w-screen  mb-5">
           
            <ul className='flex gap-6 flex-col sm:flex-row'>
                <li className='hover:text-[#5ae466] transition  duration-500 ease-in-out border-b-2 border-[#5ae466] text-base'>
                    <Link
                        to="home"
                        smooth={true}
                        duration={1000}
                        offset={20}
                        className="cursor-pointer"
                    >
                        Incio
                    </Link>
                </li>
                <li className='hover:text-[#5ae466] transition  duration-500 ease-in-out border-b-2 border-[#5ae466] text-base'>
                    <Link
                        to="about"
                        smooth={true}
                        duration={1000}
                        offset={20}
                        className="cursor-pointer"
                    >
                        Sobre nós
                    </Link>
                </li>
                <li className='hover:text-[#5ae466] transition  duration-500 ease-in-out border-b-2 border-[#5ae466] text-base'>
                    <Link
                        to="galeria"
                        smooth={true}
                        duration={1000}
                        offset={20}
                        className="cursor-pointer"
                    >
                        Contato
                    </Link>
                </li>
                <li className='hover:text-[#5ae466] transition  duration-500 ease-in-out border-b-2 border-[#5ae466] text-base'>
                    <Link
                        to="galeria"
                        smooth={true}
                        duration={1000}
                        offset={20}
                        className="cursor-pointer"
                    >
                        Trabalhe conosco
                    </Link>
                </li>
            </ul>


        </header>
    )
}

export default Header
