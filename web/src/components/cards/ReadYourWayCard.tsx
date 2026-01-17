import {useState} from 'react'
import {ApplePencilIcon} from '@/assets/ApplePencilIcon'
import {AppleCheckmarkIcon} from '@/assets/AppleCheckmarkIcon'

export const ReadYourWayCard = () => {
	const [readingMode, setReadingMode] = useState<
		'markdown' | 'bionic'
	>('bionic')
	const [isEditing, setIsEditing] = useState(false)
	const [bionicContent, setBionicContent] = useState(
		'Welcome everyone. Today we will discuss the Q3 roadmap and budget allocation. Please take notes on key decisions and action items.'
	)
	const [markdownContent, setMarkdownContent] = useState(
		'# Meeting notes\n\n**Important:** Q3 goals\n\n- Budget approval\n- Timeline review'
	)

	const applyBionicReading = (text: string) => {
		return text
			.split(' ')
			.map(word => {
				if (word.length <= 3) return word

				const boldLength = Math.ceil(word.length * 0.4)
				const boldPart = word.slice(0, boldLength)
				const restPart = word.slice(boldLength)

				return `<b>${boldPart}</b>${restPart}`
			})
			.join(' ')
	}

	const renderMarkdown = (text: string) => {
		const lines = text.split('\n')
		const processedLines: string[] = []
		let inList = false

		lines.forEach(line => {
			// Handle headings
			if (line.startsWith('# ')) {
				if (inList) {
					processedLines.push('</ul>')
					inList = false
				}
				processedLines.push(
					`<h3 class="font-semibold text-sm mb-1">${line.slice(
						2
					)}</h3>`
				)
			}
			// Handle list items
			else if (line.startsWith('- ')) {
				if (!inList) {
					processedLines.push(
						'<ul class="list-disc list-inside space-y-0.5">'
					)
					inList = true
				}
				processedLines.push(
					`<li class="text-xs">${line.slice(2)}</li>`
				)
			}
			// Handle regular text
			else if (line.trim() !== '') {
				if (inList) {
					processedLines.push('</ul>')
					inList = false
				}
				// Handle bold
				const boldProcessed = line.replace(
					/\*\*(.+?)\*\*/g,
					'<strong>$1</strong>'
				)
				processedLines.push(`<p class="text-xs">${boldProcessed}</p>`)
			}
			// Handle empty lines
			else {
				if (inList) {
					processedLines.push('</ul>')
					inList = false
				}
				if (line === '') {
					processedLines.push('<br />')
				}
			}
		})

		// Close list if still open
		if (inList) {
			processedLines.push('</ul>')
		}

		return processedLines.join('')
	}

	return (
		<div>
			<div className='flex flex-col justify-between rounded-2xl bg-white p-2 shadow-sm border border-slate-200'>
				<div className='aspect-square bg-slate-200 rounded-lg flex flex-col overflow-hidden'>
					{/* Tabs */}
					<div className='flex gap-1 p-2 bg-slate-100'>
						<button
							onClick={() => setReadingMode('bionic')}
							className={`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${
								readingMode === 'bionic'
									? 'bg-white text-slate-900 shadow-sm'
									: 'text-slate-600 hover:text-slate-900'
							}`}
						>
							Bionic
						</button>
						<button
							onClick={() => setReadingMode('markdown')}
							className={`flex-1 px-3 py-1.5 text-xs font-medium rounded transition-colors ${
								readingMode === 'markdown'
									? 'bg-white text-slate-900 shadow-sm'
									: 'text-slate-600 hover:text-slate-900'
							}`}
						>
							Markdown
						</button>
					</div>

					{/* Content */}
					<div className='flex-1 relative p-4'>
						{isEditing ? (
							<textarea
								value={
									readingMode === 'bionic'
										? bionicContent
										: markdownContent
								}
								onChange={e =>
									readingMode === 'bionic'
										? setBionicContent(e.target.value)
										: setMarkdownContent(e.target.value)
								}
								className='w-full h-full p-2 bg-transparent resize-none focus:outline-none text-slate-700 text-xs'
								placeholder={
									readingMode === 'bionic'
										? 'Type your script or speech here... Perfect for presentations and calls.'
										: 'Use markdown:\n# Headings\n**bold text**\n- bullet points'
								}
								style={{
									minHeight: '100%',
								}}
							/>
						) : (
							<div className='w-full h-full flex items-start justify-start text-left'>
								{readingMode === 'bionic' ? (
									<div
										className='text-sm text-slate-700 leading-relaxed'
										dangerouslySetInnerHTML={{
											__html: applyBionicReading(bionicContent),
										}}
									/>
								) : (
									<div
										className='text-left text-slate-700'
										dangerouslySetInnerHTML={{
											__html: renderMarkdown(markdownContent),
										}}
									/>
								)}
							</div>
						)}

						{/* Edit/Save Button */}
						<button
							onClick={() => setIsEditing(!isEditing)}
							className='absolute bottom-2 left-2 z-10 pl-1 pr-2 py-1 flex items-center gap-1 rounded-sm transition-colors bg-white/70 hover:bg-white/90 text-slate-700 shadow-sm'
							title={isEditing ? 'Save' : 'Edit'}
						>
							{isEditing ? (
								<>
									<AppleCheckmarkIcon className='size-3' />
									<span className='text-[10px]'>Save</span>
								</>
							) : (
								<>
									<ApplePencilIcon className='size-3' />
									<span className='text-[10px]'>Edit</span>
								</>
							)}
						</button>
					</div>
				</div>
			</div>
			<div className='mx-auto mt-5 max-w-[600px] text-base text-slate-600 sm:text-lg'>
				<p>
					<strong className='mr-1 font-medium text-slate-900'>
						Read your way.
					</strong>
					Choose between markdown formatting or bionic reading mode to
					scan notes 40% faster.
				</p>
			</div>
		</div>
	)
}
