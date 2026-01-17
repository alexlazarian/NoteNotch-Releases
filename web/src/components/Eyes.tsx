import React from 'react'

const Eyes: React.FC = () => {
	return (
		<div className='flex items-center justify-center space-x-2'>
			<div className='w-3 h-3 bg-gray-700 rounded-full border border-gray-600 flex items-center justify-center'>
				<div className='w-1.5 h-1.5 bg-gray-400 rounded-full'></div>
			</div>
			<div className='w-3 h-3 bg-gray-700 rounded-full border border-gray-600 flex items-center justify-center'>
				<div className='w-1.5 h-1.5 bg-gray-400 rounded-full'></div>
			</div>
		</div>
	)
}

export default Eyes
