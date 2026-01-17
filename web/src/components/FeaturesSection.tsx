import {ReadYourWayCard} from './cards/ReadYourWayCard'
import {InvisibleToOthersCard} from './cards/InvisibleToOthersCard'

export const FeaturesSection = () => {
	return (
		<section className='relative z-0 pt-48 pb-32 bg-gradient-to-b from-slate-50 to-white overflow-visible'>
			<div className='mx-auto px-6 max-w-7xl'>
				<div className='mb-12'>
					<span className='block text-lg font-medium tracking-tight text-slate-600 lg:text-xl'>
						Simple and effective
					</span>
					<h2 className='mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-6xl'>
						Everything you need.
					</h2>
				</div>

				<div className='relative mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 items-center lg:grid-cols-3 lg:gap-6'>
					{/* Feature 1: Manual Positioning */}

					{/* Feature 2: Read Your Way */}
					<ReadYourWayCard />

					{/* Feature 3: Customizable */}
					<div>
						<div className='flex flex-col justify-between rounded-2xl bg-white p-2 shadow-sm border border-slate-200'>
							<div className='aspect-square bg-slate-200 rounded-lg flex items-center justify-center'>
								<div className='text-center'>
									<div className='flex gap-2 mb-2'>
										<div className='w-8 h-8 bg-slate-400 rounded'></div>
										<div className='w-8 h-8 bg-slate-500 rounded'></div>
										<div className='w-8 h-8 bg-slate-600 rounded'></div>
									</div>
									<div className='text-xs text-slate-600'>
										Colors • Fonts • Transparency
									</div>
								</div>
							</div>
						</div>
						<div className='mx-auto mt-5 max-w-[600px] text-base text-slate-600 sm:text-lg'>
							<p>
								<strong className='mr-1 font-medium text-slate-900'>
									Make it yours.
								</strong>
								Customize colors, fonts, and transparency to match
								your style and preferences.
							</p>
						</div>
					</div>

					{/* Feature 4: Invisible to Screen Share */}
					<InvisibleToOthersCard />
				</div>

				{/* Platform Compatibility */}
				<div className='mt-16 pt-12 border-t border-slate-200'>
					<div className='flex w-full flex-col justify-between gap-7 md:flex-row'>
						<span className='text-sm font-medium tracking-wide text-slate-600 uppercase md:mt-1 lg:text-base'>
							Works with every meeting platform
						</span>
						<ul className='grid grid-cols-2 gap-y-6 sm:grid-cols-3 md:gap-x-12 md:gap-y-6 lg:gap-x-16 lg:gap-y-7'>
							<li className='flex items-center gap-2.5'>
								<div className='w-7 h-7 bg-slate-200 rounded-lg flex items-center justify-center lg:w-8 lg:h-8'>
									<span className='text-xs font-semibold text-slate-700'>
										Z
									</span>
								</div>
								<p className='text-lg font-medium tracking-tight text-slate-900 lg:text-xl'>
									Zoom
								</p>
							</li>
							<li className='flex items-center gap-2.5'>
								<div className='w-7 h-7 bg-slate-200 rounded-lg flex items-center justify-center lg:w-8 lg:h-8'>
									<span className='text-xs font-semibold text-slate-700'>
										T
									</span>
								</div>
								<p className='text-lg font-medium tracking-tight text-slate-900 lg:text-xl'>
									Microsoft Teams
								</p>
							</li>
							<li className='flex items-center gap-2.5'>
								<div className='w-7 h-7 bg-slate-200 rounded-lg flex items-center justify-center lg:w-8 lg:h-8'>
									<span className='text-xs font-semibold text-slate-700'>
										S
									</span>
								</div>
								<p className='text-lg font-medium tracking-tight text-slate-900 lg:text-xl'>
									Slack
								</p>
							</li>
							<li className='flex items-center gap-2.5'>
								<div className='w-7 h-7 bg-slate-200 rounded-lg flex items-center justify-center lg:w-8 lg:h-8'>
									<span className='text-xs font-semibold text-slate-700'>
										G
									</span>
								</div>
								<p className='text-lg font-medium tracking-tight text-slate-900 lg:text-xl'>
									Google Meet
								</p>
							</li>
							<li className='flex items-center gap-2.5'>
								<div className='w-7 h-7 bg-slate-200 rounded-lg flex items-center justify-center lg:w-8 lg:h-8'>
									<span className='text-xs font-semibold text-slate-700'>
										L
									</span>
								</div>
								<p className='text-lg font-medium tracking-tight text-slate-900 lg:text-xl'>
									Loom
								</p>
							</li>
							<li className='flex items-center gap-2.5'>
								<div className='w-7 h-7 bg-slate-200 rounded-lg flex items-center justify-center lg:w-8 lg:h-8'>
									<span className='text-xs font-semibold text-slate-700'>
										W
									</span>
								</div>
								<p className='text-lg font-medium tracking-tight text-slate-900 lg:text-xl'>
									Webex
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
