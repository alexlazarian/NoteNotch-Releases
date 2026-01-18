const logoUrl = `${import.meta.env.BASE_URL}logo.png`

export const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='py-12 bg-gray-50 border-t border-gray-100'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8'>
					{/* Brand */}
					<div className='flex items-center gap-3'>
						<img
							src={logoUrl}
							alt='NoteNotch'
							className='w-6 h-6'
						/>
						<span className='font-semibold text-black'>NoteNotch</span>
					</div>

					{/* Links */}
					<div className='flex flex-wrap gap-8 text-sm text-gray-500'>
						<a href='#features' className='hover:text-black transition-colors'>
							Features
						</a>
						<a href='#' className='hover:text-black transition-colors'>
							Privacy
						</a>
						<a href='#' className='hover:text-black transition-colors'>
							Terms
						</a>
					</div>

					{/* Copyright */}
					<p className='text-sm text-gray-400'>
						© {currentYear} Alex Lazarian
					</p>
				</div>
			</div>
		</footer>
	)
}
