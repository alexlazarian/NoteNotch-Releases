import {Header} from '@/components/Header'
import {Hero} from '@/components/Hero'
import {FeaturesSection} from '@/components/FeaturesSection'
import {ComparisonSection} from '@/components/ComparisonSection'
import {CTA} from '@/components/CTA'
import {Footer} from '@/components/Footer'

const Index = () => {
	return (
		<div className='min-h-screen'>
			<Header />
			<main>
				<Hero />
				<div id='features'>
					<FeaturesSection />
				</div>
				<div id='comparison'>
					<ComparisonSection />
				</div>
				<CTA />
			</main>
			<Footer />
		</div>
	)
}

export default Index
