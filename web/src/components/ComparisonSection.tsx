export const ComparisonSection = () => {
	return (
		<section className='relative z-10 overflow-hidden py-32 bg-slate-100'>
			<div className='mx-auto px-6 max-w-7xl'>
				<div className='mb-12'>
					<span className='block text-lg font-medium tracking-tight text-slate-600 lg:text-xl'>
						Why NoteNotch is different
					</span>
					<h2 className='mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl'>
						Built for simplicity, not complexity.
					</h2>
				</div>

				<div className='relative mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
					{/* Comparison 1: Traditional Note Apps */}
					<div>
						<div className='flex flex-col justify-between rounded-2xl bg-white p-2 shadow-sm border border-slate-200'>
							<div className='pointer-events-none rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 p-6'>
								<div className='flex items-center justify-between mb-4'>
									<h3 className='text-base font-medium tracking-tight text-slate-900'>
										Traditional Note Apps
									</h3>
									<div className='flex items-center gap-1 rounded-md bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='12'
											height='12'
											viewBox='0 0 12 12'
											fill='none'
											className='size-3'
										>
											<path
												d='M6 1L4.5 4L1 4.5L3.5 7L3 10.5L6 9L9 10.5L8.5 7L11 4.5L7.5 4L6 1Z'
												fill='currentColor'
											/>
										</svg>
										<span>Limited</span>
									</div>
								</div>
								<div className='aspect-video bg-slate-200 rounded-lg flex items-center justify-center'>
									<div className='text-center px-4'>
										<div className='w-16 h-16 bg-slate-300 rounded-lg mx-auto mb-3 flex items-center justify-center'>
											<svg
												className='w-8 h-8 text-slate-600'
												viewBox='0 0 24 24'
												fill='currentColor'
											>
												<path d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' />
											</svg>
										</div>
										<p className='text-xs text-slate-600'>
											Apple Notes, Notion, etc.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='mx-auto mt-5 max-w-[600px] text-base text-slate-600 sm:text-lg'>
							<p>
								<strong className='mr-1 font-medium text-slate-900'>
									Not built for video calls.
								</strong>
								Traditional apps like Apple Notes require looking away
								from your camera, breaking eye contact and reducing
								your professional presence.
							</p>
						</div>
					</div>

					{/* Comparison 2: Loom Notes */}
					<div>
						<div className='flex flex-col justify-between rounded-2xl bg-white p-2 shadow-sm border border-slate-200'>
							<div className='pointer-events-none rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 p-6'>
								<div className='flex items-center justify-between mb-4'>
									<h3 className='text-base font-medium tracking-tight text-slate-900'>
										Loom Notes Feature
									</h3>
									<div className='flex items-center gap-1 rounded-md bg-orange-100 px-3 py-1.5 text-xs font-medium text-orange-700'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='12'
											height='12'
											viewBox='0 0 12 12'
											fill='none'
											className='size-3'
										>
											<path
												d='M6 1L4.5 4L1 4.5L3.5 7L3 10.5L6 9L9 10.5L8.5 7L11 4.5L7.5 4L6 1Z'
												fill='currentColor'
											/>
										</svg>
										<span>Loom Only</span>
									</div>
								</div>
								<div className='aspect-video bg-slate-200 rounded-lg flex items-center justify-center'>
									<div className='text-center px-4'>
										<div className='w-16 h-16 bg-slate-300 rounded-full mx-auto mb-3 flex items-center justify-center'>
											<svg
												className='w-8 h-8 text-slate-600'
												viewBox='0 0 24 24'
												fill='currentColor'
											>
												<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z' />
											</svg>
										</div>
										<p className='text-xs text-slate-600'>
											Only works in Loom
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='mx-auto mt-5 max-w-[600px] text-base text-slate-600 sm:text-lg'>
							<p>
								<strong className='mr-1 font-medium text-slate-900'>
									Platform locked.
								</strong>
								Loom's notes feature only works within Loom
								recordings. No standalone app means no notes for Zoom,
								Teams, or any other platform.
							</p>
						</div>
					</div>

					{/* Comparison 3: Cluely */}
					<div>
						<div className='flex flex-col justify-between rounded-2xl bg-white p-2 shadow-sm border border-slate-200'>
							<div className='pointer-events-none rounded-xl bg-gradient-to-b from-slate-50 to-slate-100 p-6'>
								<div className='flex items-center justify-between mb-4'>
									<h3 className='text-base font-medium tracking-tight text-slate-900'>
										AI Meeting Assistants
									</h3>
									<div className='flex items-center gap-1 rounded-md bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-700'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='12'
											height='12'
											viewBox='0 0 12 12'
											fill='none'
											className='size-3'
										>
											<path
												d='M6 1L4.5 4L1 4.5L3.5 7L3 10.5L6 9L9 10.5L8.5 7L11 4.5L7.5 4L6 1Z'
												fill='currentColor'
											/>
										</svg>
										<span>AI Powered</span>
									</div>
								</div>
								<div className='aspect-video bg-slate-200 rounded-lg flex items-center justify-center'>
									<div className='text-center px-4'>
										<div className='w-16 h-16 bg-slate-300 rounded-full mx-auto mb-3 flex items-center justify-center'>
											<svg
												className='w-8 h-8 text-slate-600'
												viewBox='0 0 24 24'
												fill='currentColor'
											>
												<path d='M12 2L7.5 6.5L2 12l5.5 5.5L12 22l4.5-4.5L22 12l-5.5-5.5L12 2zm0 3l3.5 3.5L19 12l-3.5 3.5L12 19l-3.5-3.5L5 12l3.5-3.5L12 5z' />
											</svg>
										</div>
										<p className='text-xs text-slate-600'>
											Cluely, Otter.ai, etc.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='mx-auto mt-5 max-w-[600px] text-base text-slate-600 sm:text-lg'>
							<p>
								<strong className='mr-1 font-medium text-slate-900'>
									Over-engineered for simple needs.
								</strong>
								AI assistants like Cluely are complex, expensive, and
								designed for real-time AI responses. NoteNotch is
								simple, free, and focused on what matters: your notes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
