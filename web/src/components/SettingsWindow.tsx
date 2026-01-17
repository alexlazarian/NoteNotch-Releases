import {useState, useRef, useEffect} from 'react'
import {ResizableBox, ResizeCallbackData} from 'react-resizable'
import Draggable from 'react-draggable'
import {Eye} from 'lucide-react'
import 'react-resizable/css/styles.css'
import {XMarkIcon} from '@heroicons/react/16/solid'
import {MinusIcon, PlusIcon} from '@heroicons/react/24/solid'

interface ColorSettings {
	background: string
	foreground: string
}

interface SettingsWindowProps {
	initialWidth?: number
	initialHeight?: number
	minWidth?: number
	minHeight?: number
	maxWidth?: number
	maxHeight?: number
	className?: string
	style?: React.CSSProperties
	defaultPosition?: {x: number; y: number}
	position?: {x: number; y: number}
	containerClassName?: string
	colorSettings?: ColorSettings
	onStop?: (
		e: MouseEvent | TouchEvent,
		data: {x: number; y: number}
	) => void
	onResize?: (
		e: React.SyntheticEvent,
		data: {size: {width: number; height: number}}
	) => void
	bionicReading?: boolean
	size?: {width: number; height: number}
	setBionicReading?: (val: boolean) => void
	setActiveColors?: (val: ColorSettings) => void
	onClose?: () => void
	fontSize?: number
	setFontSize?: (val: number) => void
	opacity?: number
	setOpacity?: (val: number) => void
}

function hexToRgba(hex: string, alpha: number) {
	let c = hex.replace('#', '')
	if (c.length === 3)
		c = c
			.split('')
			.map(x => x + x)
			.join('')
	const num = parseInt(c, 16)
	return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${
		num & 255
	}, ${alpha})`
}

// Toggle Switch Component
const ToggleSwitch = ({
	checked,
	onChange,
	className = '',
}: {
	checked: boolean
	onChange: (checked: boolean) => void
	className?: string
}) => {
	return (
		<button
			type='button'
			role='switch'
			aria-checked={checked}
			onClick={() => onChange(!checked)}
			className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${className} ${
				checked ? 'bg-orange-600' : 'bg-slate-200'
			}`}
		>
			<span
				className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
					checked ? 'translate-x-6' : 'translate-x-1'
				}`}
			/>
		</button>
	)
}

// Helper to get theme colors
function getThemeColors(
	theme: 'system' | 'light' | 'dark' | 'custom',
	systemMode: 'light' | 'dark',
	customColors: ColorSettings
): ColorSettings {
	if (theme === 'system') {
		return systemMode === 'dark'
			? {background: '#1a1a1a', foreground: '#fff'}
			: {background: '#fff', foreground: '#1a1a1a'}
	} else if (theme === 'light') {
		return {background: '#fff', foreground: '#1a1a1a'}
	} else if (theme === 'dark') {
		return {background: '#1a1a1a', foreground: '#fff'}
	} else {
		return customColors
	}
}

const SettingsWindow = ({
	initialWidth = 400,
	initialHeight = 500,
	minWidth = 350,
	minHeight = 400,
	maxWidth = 600,
	maxHeight = 800,
	className = '',
	style = {},
	defaultPosition = {x: 100, y: 100},
	position,
	containerClassName = '',
	colorSettings,
	onStop,
	onResize,
	bionicReading = false,
	size: controlledSize,
	setBionicReading,
	setActiveColors,
	onClose,
	fontSize = 12,
	setFontSize,
	opacity = 1,
	setOpacity,
}: SettingsWindowProps) => {
	const [internalSize, setInternalSize] = useState({
		width: initialWidth,
		height: initialHeight,
	})
	const size = controlledSize || internalSize
	const [isResizing, setIsResizing] = useState(false)
	const [theme, setTheme] = useState<
		'system' | 'light' | 'dark' | 'custom'
	>('system')
	const [systemMode, setSystemMode] = useState<'light' | 'dark'>(
		'light'
	)

	// System theme detection
	useEffect(() => {
		if (theme === 'system') {
			const mq = window.matchMedia('(prefers-color-scheme: dark)')
			const update = () =>
				setSystemMode(mq.matches ? 'dark' : 'light')
			update()
			mq.addEventListener('change', update)
			return () => mq.removeEventListener('change', update)
		}
	}, [theme])

	// Apply theme to color settings
	useEffect(() => {
		if (!setActiveColors) return
		if (theme === 'system') {
			setActiveColors(
				systemMode === 'dark'
					? {background: '#1a1a1a', foreground: '#fff'}
					: {background: '#fff', foreground: '#1a1a1a'}
			)
		} else if (theme === 'light') {
			setActiveColors({background: '#fff', foreground: '#1a1a1a'})
		} else if (theme === 'dark') {
			setActiveColors({background: '#1a1a1a', foreground: '#fff'})
		}
		// Custom: do nothing, user controls colors
	}, [theme, systemMode, setActiveColors])

	// Default color settings if none provided
	const defaultColors: ColorSettings = {
		background: '#ffffff',
		foreground: '#1f2937',
	}

	const customColors = colorSettings || defaultColors
	const pickerColors = getThemeColors(theme, systemMode, customColors)

	const onResizeInternal = (
		e: React.SyntheticEvent,
		{size: newSize}: ResizeCallbackData
	) => {
		if (onResize) onResize(e, {size: newSize})
		else setInternalSize(newSize)
	}

	// Handle start/stop of resizing
	const handleResizeStart = () => setIsResizing(true)
	const handleResizeStop = () => setIsResizing(false)

	return (
		<Draggable
			bounds='parent'
			disabled={isResizing}
			handle='.settings-window-header'
			cancel='.resize-handle-corner, .close-button'
			defaultPosition={defaultPosition}
			{...(position !== undefined ? {position} : {})}
			onStop={onStop}
		>
			<div
				className={`absolute z-[9999] ${containerClassName}`}
				style={style}
			>
				<ResizableBox
					width={size.width}
					height={size.height}
					minConstraints={[minWidth, minHeight]}
					maxConstraints={[maxWidth, maxHeight]}
					onResize={onResizeInternal}
					onResizeStart={handleResizeStart}
					onResizeStop={handleResizeStop}
					resizeHandles={['se']}
					handle={
						<span
							className='resize-handle-corner absolute right-0 bottom-0 w-4 h-4 cursor-se-resize z-50'
							style={{pointerEvents: 'auto'}}
						/>
					}
					className={`backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden ${className}`}
					style={{
						backgroundColor: '#ffffff',
						border: '1px solid #e5e7eb',
						...style,
					}}
				>
					<div className='w-full h-full relative flex flex-col'>
						{/* Header - Mac style window bar */}
						<div
							className='settings-window-header flex items-center justify-between gap-4 px-2 py-0 border-b border-slate-200 bg-white relative'
							style={{height: 30}}
						>
							<div className='flex items-center gap-2'>
								{/* Traffic light buttons */}
								<div className='flex items-center gap-2 group'>
									<div
										className='flex items-center justify-center size-3.5 rounded-full bg-gray-400 border border-gray-500/20'
										onClick={onClose}
									>
										<XMarkIcon className='text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity' />
									</div>
									<div className='size-3.5 rounded-full bg-gray-200 border border-gray-300/20' />
									<div className='size-3.5 rounded-full bg-gray-200 border border-gray-300/20' />
								</div>
							</div>
							<div className='absolute left-1/2 -translate-x-1/2 select-none'>
								<h2 className='text-sm font-semibold tracking-tight text-slate-900'>
									Settings
								</h2>
							</div>
						</div>

						{/* Content */}
						<div className='flex-1 px-6 py-4 space-y-6 bg-white overflow-y-auto'>
							<div className='space-y-3'>
								{/* Bionic Reading */}
								<div className='rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 w-full flex items-center justify-between'>
									<div className='flex items-center gap-2'>
										<Eye className='size-5 text-orange-600' />
										<span className='text-xs text-gray-700'>
											Bionic Reading
										</span>
									</div>
									<ToggleSwitch
										checked={!!bionicReading}
										onChange={checked => {
											if (typeof setBionicReading === 'function')
												setBionicReading(checked)
										}}
									/>
								</div>
								{/* Font Size */}
								<div className='rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 w-full flex items-center justify-between'>
									<span className='text-xs text-gray-700 flex items-center gap-2'>
										<span className='text-base '>Aa</span> Font Size
									</span>
									<div className='flex items-center gap-1 h-[28px] border rounded-md p-1 bg-white'>
										<button
											className='h-full px-1 text-base font-bold disabled:opacity-50'
											onClick={() =>
												setFontSize &&
												setFontSize(Math.max(8, fontSize - 1))
											}
											disabled={fontSize <= 8}
											aria-label='Decrease font size'
										>
											<MinusIcon className='size-4' />
										</button>
										<div className='h-full w-px bg-slate-200' />
										<span
											className='px-2 text-xs font-mono select-none'
											style={{minWidth: 24, textAlign: 'center'}}
										>
											{fontSize}
										</span>
										<div className='h-full w-px bg-slate-200' />
										<button
											className='h-full px-1 text-base font-bold disabled:opacity-50'
											onClick={() =>
												setFontSize &&
												setFontSize(Math.min(48, fontSize + 1))
											}
											disabled={fontSize >= 48}
											aria-label='Increase font size'
										>
											<PlusIcon className='size-4' />
										</button>
									</div>
								</div>
								{/* Opacity */}
								<div className='rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 w-full flex items-center justify-between'>
									<span className='text-xs text-gray-700'>
										Opacity
									</span>
									<div className='flex items-center gap-2'>
										<input
											type='range'
											min={0.2}
											max={1}
											step={0.05}
											value={opacity}
											onChange={e =>
												setOpacity &&
												setOpacity(Number(e.target.value))
											}
											className='w-28 accent-orange-600'
										/>
										<span className='text-xs text-slate-700 font-mono'>
											{Math.round(opacity * 100)}%
										</span>
									</div>
								</div>
								{/* Theme Section */}
								<div className='rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 w-full'>
									<div className='mb-2 text-xs text-gray-700'>
										Theme
									</div>
									<div className='flex gap-2 mb-2'>
										{/* Segmented control or radio group */}
										{['system', 'light', 'dark', 'custom'].map(
											opt => (
												<button
													key={opt}
													className={`px-3 py-1 rounded-full border text-xs font-medium transition-colors ${
														theme === opt
															? 'bg-orange-100 border-orange-400 text-orange-900'
															: 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
													}`}
													onClick={() =>
														setTheme(
															opt as
																| 'system'
																| 'light'
																| 'dark'
																| 'custom'
														)
													}
												>
													{opt === 'system' && 'System'}
													{opt === 'light' && 'Light'}
													{opt === 'dark' && 'Dark'}
													{opt === 'custom' && 'Custom'}
												</button>
											)
										)}
									</div>
									{/* System mode indicator */}
									{theme === 'system' && (
										<div className='text-xs text-slate-500 mb-1 ml-1'>
											System:{' '}
											<span className='font-semibold'>
												{systemMode === 'dark' ? 'Dark' : 'Light'}{' '}
												Mode
											</span>
										</div>
									)}
									{/* Color pickers - always visible */}
									<div className='mt-2 pl-2 border-l-2 border-orange-200'>
										<div className='text-xs font-semibold text-slate-500 mb-1'>
											Colors
										</div>
										<div className='flex items-center gap-6'>
											<div className='flex flex-col items-center'>
												<span className='text-xs text-slate-500 mb-1'>
													BG
												</span>
												<input
													type='color'
													value={pickerColors.background}
													onChange={e => {
														if (
															typeof setActiveColors === 'function'
														) {
															setActiveColors({
																...pickerColors,
																background: e.target.value || '#fff',
															})
															setTheme('custom')
														}
													}}
													className='w-7 h-7 rounded border border-slate-300 cursor-pointer'
												/>
											</div>
											<div className='flex flex-col items-center'>
												<span className='text-xs text-slate-500 mb-1'>
													Text
												</span>
												<input
													type='color'
													value={pickerColors.foreground}
													onChange={e => {
														if (
															typeof setActiveColors === 'function'
														) {
															setActiveColors({
																...pickerColors,
																foreground: e.target.value || '#000',
															})
															setTheme('custom')
														}
													}}
													className='w-7 h-7 rounded border border-slate-300 cursor-pointer'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Transparent overlay for resize area to block drag events */}
						<div
							className='resize-handle-corner pointer-events-auto absolute right-0 bottom-0 w-4 h-4 z-40'
							style={{background: 'transparent'}}
						/>
					</div>
				</ResizableBox>
			</div>
		</Draggable>
	)
}

export default SettingsWindow
