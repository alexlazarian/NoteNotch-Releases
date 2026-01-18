export const ComparisonSection = () => {
	return (
		<section className='py-32 bg-gray-50'>
			<div className='max-w-6xl mx-auto px-6'>
				{/* Header */}
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4'>
						Why
						<span className='text-gray-400'> NoteNotch?</span>
					</h2>
					<p className='text-xl text-gray-500 max-w-2xl mx-auto'>
						See the difference for yourself.
					</p>
				</div>

				{/* Comparison Card - Cluely Style */}
				<div className='relative flex flex-col lg:flex-row w-full overflow-hidden rounded-[2rem] bg-white shadow-xl'>
					{/* Left Side - Other Solutions (Bad) */}
					<div className='flex-1 p-8 md:p-12 bg-gradient-to-br from-red-50 to-orange-50 border-b lg:border-b-0 lg:border-r border-gray-200'>
						<div className='mb-8'>
							<span className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-4'>
								<span className='w-2 h-2 bg-red-500 rounded-full'></span>
								Other Solutions
							</span>
							<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
								Traditional Note Apps
							</h3>
							<p className='text-gray-500'>
								Apple Notes, Notion, Sticky Notes
							</p>
						</div>

						{/* Problem Visualization */}
						<div className='bg-white rounded-2xl p-6 shadow-sm border border-red-100 mb-6'>
							<div className='flex items-center gap-4 mb-4'>
								<div className='w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center'>
									<svg className='w-6 h-6 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
									</svg>
								</div>
								<div>
									<p className='font-medium text-gray-900'>You on video call</p>
									<p className='text-sm text-gray-500'>Looking away from camera</p>
								</div>
							</div>
							<div className='flex items-center gap-2 text-red-600 text-sm'>
								<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
								</svg>
								Breaks eye contact
							</div>
						</div>

						{/* Issues List */}
						<ul className='space-y-3'>
							<li className='flex items-center gap-3 text-gray-600'>
								<span className='w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs'>✗</span>
								Visible on screen share
							</li>
							<li className='flex items-center gap-3 text-gray-600'>
								<span className='w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs'>✗</span>
								Forces you to look away
							</li>
							<li className='flex items-center gap-3 text-gray-600'>
								<span className='w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs'>✗</span>
								Unprofessional appearance
							</li>
						</ul>
					</div>

					{/* Right Side - NoteNotch (Good) */}
					<div className='flex-1 p-8 md:p-12 bg-gradient-to-br from-green-50 to-emerald-50'>
						<div className='mb-8'>
							<span className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-4'>
								<span className='w-2 h-2 bg-green-500 rounded-full'></span>
								NoteNotch
							</span>
							<h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>
								Invisible to Others
							</h3>
							<p className='text-gray-500'>
								Only you can see your notes
							</p>
						</div>

						{/* Solution Visualization */}
						<div className='bg-white rounded-2xl p-6 shadow-sm border border-green-100 mb-6'>
							<div className='flex items-center gap-4 mb-4'>
								<div className='w-12 h-12 bg-black rounded-full flex items-center justify-center'>
									<svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
									</svg>
								</div>
								<div>
									<p className='font-medium text-gray-900'>You on video call</p>
									<p className='text-sm text-gray-500'>Looking confident, notes nearby</p>
								</div>
							</div>
							<div className='flex items-center gap-2 text-green-600 text-sm'>
								<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
								</svg>
								Undetectable on screen share
							</div>
						</div>

						{/* Benefits List */}
						<ul className='space-y-3'>
							<li className='flex items-center gap-3 text-gray-600'>
								<span className='w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-xs'>✓</span>
								Hidden from screen recordings
							</li>
							<li className='flex items-center gap-3 text-gray-600'>
								<span className='w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-xs'>✓</span>
								Position notes near your camera
							</li>
							<li className='flex items-center gap-3 text-gray-600'>
								<span className='w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-500 text-xs'>✓</span>
								Stay professional and prepared
							</li>
						</ul>
					</div>

					{/* VS Badge */}
					<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex'>
						<div className='w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shadow-lg'>
							VS
						</div>
					</div>
				</div>

				{/* Platform Compatibility */}
				<div className='mt-16 text-center'>
					<p className='text-sm uppercase tracking-wider text-gray-400 mb-6'>
						Works with every meeting platform
					</p>
					<div className='flex flex-wrap justify-center gap-6 md:gap-10 text-lg font-medium text-gray-500'>
						<span className='hover:text-black transition-colors cursor-default'>Zoom</span>
						<span className='hover:text-black transition-colors cursor-default'>Google Meet</span>
						<span className='hover:text-black transition-colors cursor-default'>Teams</span>
						<span className='hover:text-black transition-colors cursor-default'>Slack</span>
						<span className='hover:text-black transition-colors cursor-default'>Loom</span>
						<span className='hover:text-black transition-colors cursor-default'>Webex</span>
					</div>
				</div>
			</div>
		</section>
	)
}
