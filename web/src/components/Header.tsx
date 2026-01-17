import {useState, useEffect, useRef} from 'react'
import {Button} from '@/components/ui/button'
import {Mail, Menu, X, MousePointer} from 'lucide-react'
import NotchEye from './NotchEye'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [notchCenter, setNotchCenter] = useState({x: 0, y: 0})
	const notchRef = useRef<HTMLDivElement>(null)
	const menuPanelRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const updateNotchCenter = () => {
			if (notchRef.current) {
				const rect = notchRef.current.getBoundingClientRect()
				setNotchCenter({
					x: rect.left + rect.width / 2,
					y: rect.top + rect.height / 2,
				})
			}
		}

		updateNotchCenter()
		window.addEventListener('resize', updateNotchCenter)
		return () =>
			window.removeEventListener('resize', updateNotchCenter)
	}, [])

	const scrollToSignup = () => {
		const heroSection = document.querySelector('#hero')
		if (heroSection) {
			heroSection.scrollIntoView({behavior: 'smooth'})
		}
	}

	// Menu open/close logic
	const openMenu = () => setIsMenuOpen(true)
	const closeMenu = () => setIsMenuOpen(false)

	return (
		<header className='fixed top-0 w-full z-50 transition-all duration-1000 ease-in-out bg-transparent'>
			{/* Notch */}
			<div
				className='relative w-full flex justify-center'
				style={{height: 56}}
			>
				<div
					ref={notchRef}
					className='absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[40px] rounded-b-[20px] flex items-center justify-center z-[9999] backdrop-blur-xl transition-all duration-300'
					style={{background: 'rgba(19, 19, 19, 0.904)'}}
					onMouseEnter={openMenu}
					onMouseLeave={closeMenu}
					onFocus={openMenu}
					onBlur={closeMenu}
					tabIndex={0}
				>
					{/* Camera/NotchEye */}
					<div className='absolute top-2'>
						<NotchEye notchCenter={notchCenter} noteCenter={null} />
					</div>
				</div>
			</div>

			{/* Mobile Menu Button - Positioned outside notch */}
			<div className='absolute top-4 right-6 md:hidden'>
				<button
					className='transition-colors p-2 rounded-lg text-white hover:bg-white/10'
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? (
						<X className='w-6 h-6' />
					) : (
						<Menu className='w-6 h-6' />
					)}
				</button>
			</div>

			{/* Mobile Navigation Overlay */}
			{isMenuOpen && (
				<div className='md:hidden absolute top-full left-0 right-0 py-6 px-6 transition-all duration-300 bg-black/30 backdrop-blur-md border-b border-white/20'>
					<nav className='flex flex-col space-y-4'>
						<a
							href='#demo'
							className='text-center py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 text-white/80 hover:text-white hover:bg-white/10'
						>
							Demo
						</a>
						<a
							href='#features'
							className='text-center py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 text-white/80 hover:text-white hover:bg-white/10'
						>
							Features
						</a>
						<a
							href='/get-started'
							className='text-center py-3 px-4 rounded-lg transition-all duration-200 hover:scale-105 text-white/80 hover:text-white hover:bg-white/10'
						>
							Get Started
						</a>
						<Button
							onClick={scrollToSignup}
							className='w-full rounded-full transition-all bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30'
						>
							<Mail className='w-4 h-4 mr-2' />
							Get Access
						</Button>
					</nav>
				</div>
			)}
		</header>
	)
}
