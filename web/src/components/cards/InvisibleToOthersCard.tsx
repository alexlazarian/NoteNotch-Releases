import {useState, useRef} from 'react'

export const InvisibleToOthersCard = () => {
	const [sliderPosition, setSliderPosition] = useState(55)
	const [isDragging, setIsDragging] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)

	const handleMouseDown = () => {
		setIsDragging(true)
	}

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isDragging || !containerRef.current) return

		const rect = containerRef.current.getBoundingClientRect()
		const x = e.clientX - rect.left
		const percentage = (x / rect.width) * 100

		// Clamp between 10% and 90%
		const clampedPercentage = Math.min(Math.max(percentage, 10), 90)
		setSliderPosition(clampedPercentage)
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	return (
		<div>
			<div className='flex flex-col justify-between rounded-2xl bg-white p-2 shadow-sm border border-slate-200'>
				<div
					ref={containerRef}
					className='pointer-events-auto relative rounded-xl overflow-hidden select-none cursor-ew-resize aspect-square'
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseUp}
				>
					{/* Card 1: Invisible to others */}
					<div className='absolute inset-0 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400'>
						<span className='absolute top-3 right-3 flex h-6 items-center justify-center rounded bg-slate-600 px-2 text-[10px] font-semibold tracking-tight text-white'>
							Invisible to others
						</span>
						<div className='absolute inset-0 flex items-center justify-center'>
							<div className='text-center'>
								<div className='w-20 h-20 bg-slate-400 rounded-lg mx-auto mb-3 flex items-center justify-center opacity-50'>
									<svg
										className='w-10 h-10 text-slate-600'
										viewBox='0 0 24 24'
										fill='currentColor'
									>
										<path d='M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z' />
									</svg>
								</div>
								<p className='text-xs text-slate-600 font-medium'>
									Nothing visible
								</p>
							</div>
						</div>
					</div>

					{/* Card 2: Visible to you */}
					<div
						className='absolute inset-0 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300'
						style={{
							clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
						}}
					>
						<div className='absolute inset-0 z-20 m-2 rounded-lg border-2 border-green-500'></div>
						<span className='absolute top-3 left-3 z-10 flex h-6 items-center justify-center rounded bg-slate-600 px-2 text-[10px] font-semibold tracking-tight text-white'>
							Visible to you
						</span>

						{/* AI Response bubble */}
						<div className='absolute top-12 left-3 right-3 z-20 rounded-lg bg-gradient-to-b from-white/50 to-slate-50 px-3 py-2.5 shadow-sm'>
							<div className='flex items-center gap-1 text-[10px] font-semibold tracking-tight text-slate-900 mb-1.5'>
								<svg
									width='12'
									height='12'
									viewBox='0 0 14 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='size-3'
								>
									<path
										d='M8.43652 5.31348L12.5908 7.00098L8.43652 8.68848L6.74902 12.8428L5.06152 8.68848L0.90625 7.00098L5.06152 5.31348L6.74902 1.1582L8.43652 5.31348Z'
										fill='url(#gradient1)'
									/>
									<defs>
										<linearGradient
											id='gradient1'
											x1='2.53097'
											y1='0.8125'
											x2='5.62516'
											y2='8.87483'
											gradientUnits='userSpaceOnUse'
										>
											<stop stopColor='#439AF0' />
											<stop offset='1' stopColor='#4360F0' />
										</linearGradient>
									</defs>
								</svg>
								AI Notes
							</div>
							<div className='text-[9px] leading-relaxed tracking-tight text-slate-700'>
								Ask about project timeline.
								<span className='relative mx-1 font-mono text-[8px] text-blue-600 before:absolute before:inset-0 before:-m-0.5 before:rounded before:bg-blue-100/50'>
									Q3
								</span>
								Budget approval needed.
							</div>
						</div>

						<div className='absolute inset-0 flex items-center justify-center'>
							<div className='text-center'>
								<div className='relative w-20 h-20 bg-slate-300 rounded-lg mx-auto mb-3 flex items-center justify-center'>
									<svg
										className='w-10 h-10 text-slate-600'
										viewBox='0 0 24 24'
										fill='currentColor'
									>
										<path d='M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z' />
									</svg>
									<div className='absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center'>
										<svg
											className='w-3 h-3 text-white'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='3'
										>
											<path d='M5 13l4 4L19 7' />
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Divider line */}
					<div
						className='absolute top-0 bottom-0 z-30 w-px bg-slate-800 shadow-lg'
						style={{
							left: `${sliderPosition}%`,
							opacity: 1,
						}}
					></div>

					{/* Draggable handle */}
					<div
						className='absolute top-1/2 z-40 flex size-6 -translate-x-1/2 -translate-y-1/2 transform cursor-ew-resize items-center justify-center rounded-full bg-slate-800 shadow-lg transition-transform duration-200 ease-in hover:scale-110'
						style={{
							left: `${sliderPosition}%`,
						}}
						onMouseDown={handleMouseDown}
					>
						<svg
							width='16'
							height='9'
							viewBox='0 0 16 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='size-4'
						>
							<path
								d='M4.5 7.375L1.5 4.375L4.5 1.375'
								stroke='white'
								strokeMiterlimit='10'
								strokeLinecap='square'
							/>
							<path
								d='M11.5 7.375L14.5 4.375L11.5 1.375'
								stroke='white'
								strokeMiterlimit='10'
								strokeLinecap='square'
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className='mx-auto mt-5 max-w-[600px] text-base text-slate-600 sm:text-lg'>
				<p>
					<strong className='mr-1 font-medium text-slate-900'>
						Invisible to others.
					</strong>
					NoteNotch never shows up in screen shares or recordings,
					keeping your notes completely private.
				</p>
			</div>
		</div>
	)
}
