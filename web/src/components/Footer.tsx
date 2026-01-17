export const Footer = () => {
	return (
		<footer className='200 py-8'>
			<div className='max-w-6xl mx-auto px-6'>
				<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
					{/* Brand */}
					<div className='flex items-center'>
						<div className='w-6 h-6 mr-3'>
							<img
								src='/lovable-uploads/a8ea2d9b-ba2a-459f-a582-22cf6ea5c3fb.png'
								alt='NoteNotch'
								className='w-full h-full object-contain'
							/>
						</div>
						<span className='text-lg font-semibold text-slate-900'>
							NoteNotch
						</span>
					</div>

					{/* Navigation */}
					<div className='flex flex-wrap gap-8 text-sm'>
						<a
							href='#features'
							className='text-slate-600 hover:text-slate-900 transition-colors'
						>
							Features
						</a>
						<a
							href='#get-early-access'
							className='text-slate-600 hover:text-slate-900 transition-colors'
						>
							Early Access
						</a>
						<a
							href='#'
							className='text-slate-600 hover:text-slate-900 transition-colors'
						>
							Terms
						</a>
						<a
							href='#'
							className='text-slate-600 hover:text-slate-900 transition-colors'
						>
							Privacy
						</a>
					</div>

					{/* Contact */}
					<div className='text-right'>
						<p className='text-slate-500 text-sm'>
							hello@notenotch.com
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
