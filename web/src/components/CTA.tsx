import {Button} from '@/components/ui/button'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`

export const CTA = () => {
	return (
		<section className='py-24 bg-white font-sans'>
			<div className='max-w-4xl mx-auto px-6 text-center'>
				{/* Logo/Brand */}
				<div className='inline-flex items-center justify-center size-20 mb-6'>
					<img
						src={logoUrl}
						alt='NoteNotch'
					/>
				</div>

				{/* Header */}
				<div className='mb-4'>
					<h2 className='text-heading text-slate-900 mb-6'>
						Download NoteNotch
					</h2>
					<p className='text-body text-slate-600 max-w-xl mx-auto'>
						Transform your video presence with professional
						note-taking that maintains eye contact.
					</p>
				</div>

				{/* Download Button */}
				<div className='mb-2'>
					<Button size='lg'>Download for macOS</Button>
				</div>

				{/* macOS Requirement Note */}
				<p className='text-sm text-slate-500 mb-12'>
					NoteNotch is a macOS app and requires macOS 12+
				</p>
			</div>
		</section>
	)
}
