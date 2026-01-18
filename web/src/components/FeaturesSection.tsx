import {ReadYourWayCard} from './cards/ReadYourWayCard'
import {InvisibleToOthersCard} from './cards/InvisibleToOthersCard'

export const FeaturesSection = () => {
	const features = [
		{
			title: 'Position',
			subtitle: 'anywhere',
			description: 'Drag your notes anywhere on screen. They float above everything.',
			dark: true,
		},
		{
			title: 'Custom',
			subtitle: 'themes',
			description: 'Light, dark, or create your own. Make it match your style.',
			dark: false,
		},
		{
			title: 'Auto',
			subtitle: 'updates',
			description: 'Always stay current with seamless background updates.',
			dark: true,
		},
	]

	return (
		<section id='features' className='py-32 bg-white'>
			<div className='max-w-7xl mx-auto px-6'>
				{/* Section Header */}
				<div className='text-center mb-20'>
					<h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4'>
						Packed with
						<br />
						<span className='text-gray-400'>features</span>
					</h2>
				</div>

				{/* Interactive Demo Cards - Full Width */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
					{/* Invisible to Others - Interactive Slider */}
					<div className='bg-gray-50 rounded-3xl p-6'>
						<InvisibleToOthersCard />
					</div>

					{/* Read Your Way - Bionic/Markdown Toggle */}
					<div className='bg-gray-50 rounded-3xl p-6'>
						<ReadYourWayCard />
					</div>
				</div>

				{/* Additional Feature Cards */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{features.map((feature, index) => (
						<div
							key={index}
							className={`group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] ${
								feature.dark
									? 'bg-black text-white'
									: 'bg-gray-100 text-black'
							}`}
						>
							<div className='mb-6'>
								<h3 className='text-2xl md:text-3xl font-bold leading-tight'>
									{feature.title}
									<br />
									<span className={feature.dark ? 'text-gray-500' : 'text-gray-400'}>
										{feature.subtitle}
									</span>
								</h3>
							</div>
							<p className={`text-base ${feature.dark ? 'text-gray-400' : 'text-gray-600'}`}>
								{feature.description}
							</p>
						</div>
					))}
				</div>

				{/* Platform Compatibility */}
				<div className='mt-24 text-center'>
					<p className='text-sm uppercase tracking-wider text-gray-400 mb-8'>
						Works with every meeting platform
					</p>
					<div className='flex flex-wrap justify-center gap-8 text-xl font-medium text-gray-600'>
						<span className='hover:text-black transition-colors'>Zoom</span>
						<span className='text-gray-300'>•</span>
						<span className='hover:text-black transition-colors'>Google Meet</span>
						<span className='text-gray-300'>•</span>
						<span className='hover:text-black transition-colors'>Teams</span>
						<span className='text-gray-300'>•</span>
						<span className='hover:text-black transition-colors'>Slack</span>
						<span className='text-gray-300'>•</span>
						<span className='hover:text-black transition-colors'>Loom</span>
						<span className='text-gray-300'>•</span>
						<span className='hover:text-black transition-colors'>Webex</span>
					</div>
				</div>
			</div>
		</section>
	)
}
