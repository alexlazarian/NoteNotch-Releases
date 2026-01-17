import {useState, useEffect, useRef, useCallback} from 'react'
import {Header} from '@/components/Header'
import {Hero} from '@/components/Hero'
import {FeaturesSection} from '@/components/FeaturesSection'
import {ComparisonSection} from '@/components/ComparisonSection'
import {CTA} from '@/components/CTA'
import {Footer} from '@/components/Footer'

const Index = () => {
	const [notePosition, setNotePosition] = useState<{
		x: number
		y: number
	} | null>(null)

	return (
		<div className='min-h-screen relative'>
			{/* Fixed Notch and Note Container - only show when ResizableSquare is visible */}

			{/* Original content */}
			<Header />
			<div id='hero'>
				<Hero />
			</div>
			<div id='how-it-works'>
				<FeaturesSection />
			</div>
			<div id='comparison'>
				<ComparisonSection />
			</div>
			<CTA />
			<Footer />
		</div>
	)
}

export default Index
