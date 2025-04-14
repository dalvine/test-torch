import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import Navigator from './Navigator';
import CustomButton from './CustomButton';

const navItems = [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="text-white py-4 flex justify-between items-center space-x-4 w-full z-50">
            <div className="flex items-center  sm:space-x-7 lg:space-x-20">
                <div className="flex items-center w-25">
                    <Image
                        src="/logo.png"
                        alt="Torch Logo"
                        width={120}
                        height={40}
                        priority
                    />
                </div>

                <div className="hidden md:block">
                    <Navigator direction="horizontal" items={navItems} />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="hidden sm:flex space-x-4">
                    <CustomButton value="Sign in" />
                    <CustomButton type="filled" value="Get started" />
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <FaBars size={24} />
                </button>
            </div>

            {isMenuOpen && (
                <div
                    className={`md:hidden fixed top-0 left-0 w-full h-full bg-black transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    } z-50`}
                >
                    <button
                        className="absolute top-4 right-4 text-white"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <FaTimes size={24} />
                    </button>
                    <div className="flex flex-col items-center justify-center h-full">
                        <Navigator direction="vertical" items={navItems} />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
