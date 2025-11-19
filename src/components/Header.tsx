'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from '../assets/img/logo.svg';
import ScrollReveal from '../components/ScrollReveal';

export default function Header(){
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
      const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    const isProductsActive = pathname.startsWith('/products');
    
    const productLinks = [
        {
            name: "OPDMedQR", 
            desc: "Join the team to build the future of human-like AI agents.",
            path: "/opdmedqr",
            icon: "🏥"
        },
        {
            name: "IPDMedQR", 
            desc: "Announcements, updates, customer stories and media kits.",
            path: "/ipdmedqr",
            icon: "🛏️"
        },
        {
            name: "BillMedQR", 
            desc: "Data security and privacy at enterprise scale.",
            path: "/billmedqr",
            icon: "💳"
        },
        {
            name: "LabQR", 
            desc: "Data security and privacy at enterprise scale.",
            path: "/ladqr",
            icon: "🔬"
        },
        {
            name: "MedIQ", 
            desc: "Data security and privacy at enterprise scale.",
            path: "/mediq",
            icon: "🧠"
        },
    ]

    const handleProductsMouseEnter = () => {
        setIsProductsOpen(true);
    };

    const handleProductsMouseLeave = () => {
        setIsProductsOpen(false);
        setHoveredItem(null);
    };
 
    return(
        <header className="w-full bg-[#F4F7FF] sticky top-0 left-0 right-0 z-50 py-8 transition-all duration-500"
      >
           <ScrollReveal direction="up" delay={0.1}>
            <div className="max-w-6xl mx-auto px-4 md:px-0">
                <div className="flex items-center justify-between h-16 px-6">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
                        <Image 
                            src={logo}
                            alt="Akeera Logo" 
                            width={167}
                            height={32}
                            priority
                        />
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {/* Home */}
                        <Link 
                            href="/" 
                            className={`text-[20px]  transition-all duration-200 ${
                                isActive('/') ? 'font-bold' : 'font-regular text-black hover:text-gray-600'
                            }`}
                        >
                            Home
                        </Link>

                        {/* Products Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={handleProductsMouseEnter}
                            onMouseLeave={handleProductsMouseLeave}
                        >
                            <button 
                                className={`flex items-center gap-1 text-[20px] transition-all duration-200 ${
                                    isProductsActive ? 'font-bold' : 'font-regular text-black hover:text-gray-600'
                                }`}
                            >
                                Products
                                <svg 
                                    className={`w-4 h-4 transition-transform duration-300 ${
                                        isProductsOpen ? 'rotate-180' : ''
                                    }`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu - Centered */}
                            {isProductsOpen && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2">
                                    <div className="w-[500px] bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                                        <div className="p-6">
                                            {productLinks.map((item, index) => (
                                                <Link 
                                                    key={item.path}
                                                    href={item.path}
                                                    onMouseEnter={() => setHoveredItem(item.path)}
                                                    onMouseLeave={() => setHoveredItem(null)}
                                                    className={`block px-6 py-5 rounded-2xl transition-all duration-300 mb-2 last:mb-0 transform ${
                                                        hoveredItem && hoveredItem !== item.path 
                                                            ? 'opacity-40 scale-95 blur-[1px]' 
                                                            : 'opacity-100 scale-100'
                                                    } ${
                                                        hoveredItem === item.path 
                                                            ? 'bg-gradient-to-r from-orange-50 to-purple-50 shadow-lg scale-105' 
                                                            : 'bg-white hover:bg-gray-50'
                                                    } animate-slideUp`}
                                                    style={{
                                                        animationDelay: `${index * 80}ms`
                                                    }}
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className={`text-3xl transform transition-all duration-300 ${
                                                            hoveredItem === item.path ? 'scale-110 rotate-12' : ''
                                                        }`}>
                                                            {item.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <span className={`text-[19px] font-bold transition-all duration-300 ${
                                                                    hoveredItem === item.path 
                                                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600' 
                                                                        : 'text-gray-900'
                                                                }`}>
                                                                    {item.name}
                                                                </span>
                                                                <svg 
                                                                    className={`w-5 h-5 transition-all duration-300 ${
                                                                        hoveredItem === item.path 
                                                                            ? 'opacity-100 translate-x-0 text-purple-500' 
                                                                            : 'opacity-0 -translate-x-2 text-gray-400'
                                                                    }`}
                                                                    fill="none" 
                                                                    stroke="currentColor" 
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                                </svg>
                                                            </div>
                                                            <div className="text-[14px] leading-relaxed text-gray-600">
                                                                {item.desc}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* About */}
                        <Link 
                            href="/about" 
                            className={`text-[20px] transition-all duration-200 ${
                                isActive('/about') ? 'font-bold' : 'font-regular text-black hover:text-gray-600'
                            }`}
                        >
                            About
                        </Link>
                         <Link href="/contact" className="btn">Get Started for Free</Link>
                    </nav>

                    {/* Mobile Hamburger Menu */}
                    <button 
                        className="md:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center relative z-50 group"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-7 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-5'}`}></span>
                        <span className={`w-7 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-7 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-5'}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-br from-white via-gray-50 to-white shadow-2xl transition-transform duration-500 ease-out z-40 ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="px-8 py-20 space-y-2 overflow-y-auto h-full">
                    {/* Home */}
                    <div 
                        className={`transform transition-all duration-500 ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <Link 
                            href="/" 
                            className={`block text-2xl py-4 px-4 rounded-xl transition-all duration-200 ${
                                isActive('/') ? 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500' : 'font-regular text-black hover:bg-gray-100'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </div>

                    {/* Products */}
                    <div 
                        className={`transform transition-all duration-500 ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <button 
                            className={`flex items-center justify-between w-full text-2xl py-4 px-4 rounded-xl transition-all duration-200 ${
                                isProductsActive ? 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500' : 'font-regular text-black hover:bg-gray-100'
                            }`}
                            onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                        >
                            Products
                            <svg 
                                className={`w-6 h-6 transition-transform duration-300 ${
                                    isMobileProductsOpen ? 'rotate-180' : ''
                                } ${isProductsActive ? 'text-purple-500' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Mobile Products Dropdown */}
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${
                                isMobileProductsOpen ? 'max-h-[700px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="ml-2 space-y-2">
                                {productLinks.map((item, index) => (
                                    <Link 
                                        key={item.path}
                                        href={item.path}
                                        className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-gradient-to-r hover:from-orange-50 hover:to-purple-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsMobileProductsOpen(false);
                                        }}
                                        style={{
                                            animationDelay: `${index * 50}ms`
                                        }}
                                    >
                                        <div className="text-2xl">{item.icon}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="text-lg font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                                                    {item.name}
                                                </div>
                                                <svg 
                                                    className="w-4 h-4 text-gray-400"
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </div>
                                            <div className="text-sm text-gray-600 leading-relaxed">
                                                {item.desc}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div 
                        className={`transform transition-all duration-500 ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <Link 
                            href="/about" 
                            className={`block text-2xl py-4 px-4 rounded-xl transition-all duration-200 ${
                                isActive('/about') ? 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500' : 'font-regular text-black hover:bg-gray-100'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                    </div>

                    {/* Get Started Button */}
                    <div 
                        className={`transform transition-all duration-500 pt-6 ${
                            isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <Link 
                            href="/contact" 
                            className="btn block text-center py-4 text-lg relative overflow-hidden group"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="relative z-10">Get Started for Free</span>
                            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-active:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </Link>
                    </div>
                </nav>
            </div>
             </ScrollReveal>
        </header>
    )
}