import {useState} from 'react'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import {Label} from '@/components/ui/label'
import {Mail, CheckCircle} from 'lucide-react'

interface EmailSignupProps {
	theme?: 'dark' | 'light'
}

export const EmailSignup = ({theme = 'dark'}: EmailSignupProps) => {
	const [email, setEmail] = useState('')
	const [isEarlyTester, setIsEarlyTester] = useState(false)
	const [name, setName] = useState('')
	const [useCase, setUseCase] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Here you would typically send the data to your backend
		console.log('Signup data:', {email, isEarlyTester, name, useCase})
		setSubmitted(true)
	}

	if (submitted) {
		return (
			<div
				className={`rounded-2xl shadow-lg p-8 text-center ${
					theme === 'light'
						? 'bg-white border border-gray-200'
						: 'bg-black/40 backdrop-blur-md border border-white/10'
				}`}
			>
				<CheckCircle className='w-16 h-16 text-green-400 mx-auto mb-4' />
				<h3
					className={`font-archivo text-2xl font-bold mb-2 ${
						theme === 'light' ? 'text-gray-900' : 'text-white'
					}`}
				>
					You're on the list!
				</h3>
				<p
					className={
						theme === 'light' ? 'text-gray-600' : 'text-white/80'
					}
				>
					We'll notify you as soon as NoteNotch is ready for{' '}
					{isEarlyTester ? 'early testing' : 'launch'}.
				</p>
			</div>
		)
	}

	return (
		<div
			className={`rounded-2xl shadow-lg p-8 ${
				theme === 'light'
					? 'bg-white border border-gray-200'
					: 'bg-black/40 backdrop-blur-md border border-white/10'
			}`}
		>
			<div className='text-center mb-6'>
				<h3
					className={`font-archivo text-2xl font-bold mb-2 ${
						theme === 'light' ? 'text-gray-900' : 'text-white'
					}`}
				>
					Get Early Access
				</h3>
				<p
					className={
						theme === 'light' ? 'text-gray-600' : 'text-white/80'
					}
				>
					Be the first to know when NoteNotch launches. Join our
					waitlist for exclusive early access.
				</p>
			</div>

			<form onSubmit={handleSubmit} className='space-y-4'>
				<div className='flex flex-col items-start'>
					<Label
						htmlFor='email'
						className={`font-medium mb-2 ${
							theme === 'light' ? 'text-gray-700' : 'text-white'
						}`}
					>
						Email Address *
					</Label>
					<Input
						id='email'
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='your@email.com'
						required
						className={`mt-1 ${
							theme === 'light'
								? 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500'
								: 'bg-black/30 border-white/20 text-white placeholder:text-white/50'
						}`}
					/>
				</div>

				<div className='flex items-center space-x-3'>
					<input
						type='checkbox'
						id='earlyTester'
						checked={isEarlyTester}
						onChange={e => setIsEarlyTester(e.target.checked)}
						className='w-4 h-4 text-orange-600 border-slate-300 rounded focus:ring-orange-500'
					/>
					<Label
						htmlFor='earlyTester'
						className={`font-medium ${
							theme === 'light' ? 'text-gray-700' : 'text-white'
						}`}
					>
						I'm interested in early testing (TestFlight)
					</Label>
				</div>

				{isEarlyTester && (
					<div
						className={`space-y-4 pt-4 border-t ${
							theme === 'light'
								? 'border-gray-200'
								: 'border-white/10'
						}`}
					>
						<div className='flex flex-col items-start'>
							<Label
								htmlFor='name'
								className={`font-medium mb-2 ${
									theme === 'light' ? 'text-gray-700' : 'text-white'
								}`}
							>
								Full Name
							</Label>
							<Input
								id='name'
								type='text'
								value={name}
								onChange={e => setName(e.target.value)}
								placeholder='John Doe'
								className={`mt-1 ${
									theme === 'light'
										? 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500'
										: 'bg-black/30 border-white/20 text-white placeholder:text-white/50'
								}`}
							/>
						</div>
						<div className='flex flex-col items-start'>
							<Label
								htmlFor='useCase'
								className={`font-medium mb-2 ${
									theme === 'light' ? 'text-gray-700' : 'text-white'
								}`}
							>
								How do you plan to use NoteNotch?
							</Label>
							<Textarea
								id='useCase'
								value={useCase}
								onChange={e => setUseCase(e.target.value)}
								placeholder='e.g., Video presentations, client calls, online teaching...'
								className={`mt-1 ${
									theme === 'light'
										? 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500'
										: 'bg-black/30 border-white/20 text-white placeholder:text-white/50'
								}`}
								rows={3}
							/>
						</div>
					</div>
				)}

				<div className='relative'>
					<Button
						type='submit'
						className={`w-full`}
						disabled={!email}
					>
						{isEarlyTester
							? 'Join Early Testing Program'
							: 'Notify Me at Launch'}
					</Button>
				</div>
			</form>

			<p
				className={`text-xs text-center mt-4 ${
					theme === 'light' ? 'text-gray-500' : 'text-white/60'
				}`}
			>
				No spam, ever. Unsubscribe anytime.
			</p>
		</div>
	)
}
