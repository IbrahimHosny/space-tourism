import React, { Fragment } from 'react';
import '../App.css'
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
    
} from "@material-tailwind/react";
import {Link} from 'react-router-dom'
const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 text-white flex h-[75px] flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/" className="flex items-center nav-text">
                    <span className='font-bold me-1'>00</span> HOME
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/destination" className="flex items-center nav-text">
                <span className='font-bold me-1'>01</span> DESTINATION
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/crew" className="flex items-center nav-text">
                <span className='font-bold me-1'>02</span> CREW
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/technology" className="flex items-center nav-text">
                <span className='font-bold me-1'>03</span> TECHNOLOGY
                </Link>
            </Typography>
        </ul>
    );
    return (
        <Fragment>
            <Navbar className="absolute bg-none inset-0 h-max rounded-none py-2 px-4 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        <img src='./assets/shared/logo.svg' alt='icon' className='max-md:w-[50%] md:max-lg:w-[60%]'></img>
                    </Typography>
                    <div className="flex relative items-center gap-4">
                        <div className='absolute h-full w-full backdrop-blur-lg z-[-10]'></div>
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto !top-[-13px] !right-[12px] h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav className='backdrop-blur-xl !h-[94vh] md:max-l:w-[50vw] md:max-l:left-[50%] lg: max-md:w-[80vw] max-md:left-[17%]  relative' open={openNav}>
                    {navList}
                </MobileNav>
            </Navbar>
        </Fragment>
    );
};

export default NavBar;