export const GetStarted = () => {
	const steps = [
		{
			number: 1,
			title: 'Download NoteNotch',
			description:
				"Get the latest version from our website. It's a simple .dmg file that installs in seconds.",
		},
		{
			number: 2,
			title: 'Install the app',
			description:
				'Double-click the .dmg file and drag NoteNotch to your Applications folder. No complex setup required.',
		},
		{
			number: 3,
			title: 'Launch NoteNotch',
			description:
				'Open the app from your Applications folder or Launchpad. It will appear as a small window on your screen.',
		},
		{
			number: 4,
			title: 'Position the window',
			description:
				'Drag the NoteNotch window to position it wherever works best for you - under the notch, near the camera, or anywhere on your screen.',
		},
		{
			number: 5,
			title: 'Resize if needed',
			description:
				'Adjust the window size by dragging the corners. Make it wide enough for your notes but not too large to block your view.',
		},
		{
			number: 6,
			title: 'Start your video call',
			description:
				'Open your preferred video conferencing app (Zoom, Teams, Meet, etc.). NoteNotch will stay on top of other windows.',
		},
		{
			number: 7,
			title: 'Add your notes',
			description:
				'Type or paste your notes directly into the NoteNotch window. Use bullet points or short phrases for quick reference.',
		},
		{
			number: 8,
			title: 'Test your setup',
			description:
				'Look at your camera while reading from NoteNotch. You should maintain natural eye contact with your audience.',
		},
		{
			number: 9,
			title: 'Share feedback',
			description:
				'Help us improve NoteNotch by sharing your experience and suggestions through our feedback form.',
		},
	]

	return (
		<section className='py-32 bg-white font-sans'>
			<div className='max-w-4xl mx-auto px-6'>
				{/* Header */}
				<div className='text-center mb-20'>
					<h1 className='text-5xl font-semibold text-slate-900 mb-8 leading-tight'>
						Get started with NoteNotch
					</h1>
					<p className='text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed'>
						Follow these simple steps to set up NoteNotch and start
						maintaining eye contact during your video calls.
					</p>
				</div>

				{/* Steps */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
					{steps.map((step, index) => (
						<div
							key={step.number}
							className='bg-white rounded-2xl p-4'
						>
							{/* Step Image Placeholder */}
							<div className='mb-4'>
								<div className='aspect-video bg-slate-100 rounded-xl flex items-center justify-center'>
									<div className='text-center'>
										<div className='w-16 h-16 bg-slate-200 rounded-full mx-auto mb-3 flex items-center justify-center'>
											<svg
												className='w-8 h-8 text-slate-600'
												viewBox='0 0 24 24'
												fill='currentColor'
											>
												<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' />
											</svg>
										</div>
										<p className='text-slate-500 text-sm font-medium'>
											Step {step.number}
										</p>
									</div>
								</div>
							</div>

							{/* Step Content */}
							<div>
								<h3 className='text-xl font-semibold text-slate-900 mb-3'>
									{step.title}
								</h3>
								<p className='text-slate-600 leading-relaxed text-sm'>
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Feedback Section */}
				<div className='bg-slate-50 rounded-3xl p-12 text-center border border-slate-200'>
					<h2 className='text-3xl font-semibold text-slate-900 mb-6'>
						Help us improve NoteNotch
					</h2>
					<p className='text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed'>
						Your feedback is invaluable in making NoteNotch better.
						Share your experience, suggestions, or report any issues
						you encounter.
					</p>

					{/* Google Form Link */}
					<a
						href='https://forms.gle/your-feedback-form-link'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-slate-800 transition-colors duration-200'
					>
						<svg
							className='w-5 h-5 mr-3'
							viewBox='0 0 24 24'
							fill='currentColor'
						>
							<path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z' />
							<polyline points='14,2 14,8 20,8' />
							<line x1='16' y1='13' x2='8' y2='13' />
							<line x1='16' y1='17' x2='8' y2='17' />
							<polyline points='10,9 9,9 8,9' />
						</svg>
						Share your feedback
					</a>
				</div>

				{/* Additional Help */}
				<div className='mt-16 text-center'>
					<h3 className='text-2xl font-semibold text-slate-900 mb-4'>
						Need more help?
					</h3>
					<p className='text-lg text-slate-600 mb-6'>
						If you run into any issues or have questions, don't
						hesitate to reach out.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href='mailto:support@notenotch.com'
							className='inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-200'
						>
							<svg
								className='w-5 h-5 mr-2'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
								<polyline points='22,6 12,13 2,6' />
							</svg>
							support@notenotch.com
						</a>
						<span className='hidden sm:inline text-slate-400'>•</span>
						<a
							href='https://github.com/notenotch/notenotch'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-200'
						>
							<svg
								className='w-5 h-5 mr-2'
								viewBox='0 0 24 24'
								fill='currentColor'
							>
								<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
							</svg>
							GitHub Issues
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
