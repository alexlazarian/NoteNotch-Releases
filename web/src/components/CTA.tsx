import {Button} from '@/components/ui/button'
import {AppleLogo} from '@/assets/logos/apple'

const logoUrl = `${import.meta.env.BASE_URL}logo.png`

export const CTA = () => {
	return (
		<section className='py-32 bg-black text-white'>
			<div className='max-w-4xl mx-auto px-6 text-center'>
				{/* Logo */}
				<div className='mb-8'>
					<img
						src={logoUrl}
						alt='NoteNotch'
						className='w-20 h-20 mx-auto'
					/>
				</div>

				{/* Header */}
				<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
					Ready to try?
				</h2>
				<p className='text-xl text-gray-400 max-w-xl mx-auto mb-12'>
					Download NoteNotch and transform how you present on video calls.
				</p>

				{/* Download Button */}
				<Button 
					size='lg'
					className='bg-white hover:bg-gray-100 text-black px-10 py-6 text-lg rounded-full flex items-center gap-2'
				>
					<AppleLogo className='w-5 h-5' />
					Download for Mac
				</Button>

				{/* Note */}
				<p className='text-sm text-gray-500 mt-6'>
					macOS 12+ • Free
				</p>
			</div>
		</section>
	)
}
