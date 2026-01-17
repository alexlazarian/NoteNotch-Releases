import {useState, useRef, useEffect} from 'react'
import {ResizableBox, ResizeCallbackData} from 'react-resizable'
import Draggable from 'react-draggable'
import {
	Edit2,
	Save,
	GripVertical,
	Eye,
	Palette,
	Type,
} from 'lucide-react'
import 'react-resizable/css/styles.css'
import {ApplePencilIcon} from '@/assets/ApplePencilIcon'
import {AppleCheckmarkIcon} from '@/assets/AppleCheckmarkIcon'
import {AppleCogIcon} from '@/assets/AppleCogIcon'

interface ColorSettings {
	background: string
	foreground: string
}

interface ResizableSquareProps {
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
	onSettingsOpen?: () => void
	fontSize?: number
	setFontSize?: (val: number) => void
	content: string
	setContent: (val: string) => void
	opacity?: number
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

const ResizableSquare = ({
	initialWidth = 300,
	initialHeight = 300,
	minWidth = 200,
	minHeight = 200,
	maxWidth = 800,
	maxHeight = 800,
	className = '',
	style = {},
	defaultPosition = {x: 0, y: 0},
	position,
	containerClassName = '',
	colorSettings,
	onStop,
	onResize,
	bionicReading = false,
	size: controlledSize,
	setBionicReading,
	setActiveColors,
	onSettingsOpen,
	fontSize = 12,
	setFontSize,
	content,
	setContent,
	opacity = 1,
}: ResizableSquareProps) => {
	const [internalSize, setInternalSize] = useState({
		width: initialWidth,
		height: initialHeight,
	})
	const size = controlledSize || internalSize
	const [isEditing, setIsEditing] = useState(false)
	const [isResizing, setIsResizing] = useState(false)
	const controlsBarRef = useRef<HTMLDivElement>(null)
	const hiddenControlsBarRef = useRef<HTMLDivElement>(null)
	const [controlsMinSize, setControlsMinSize] = useState({
		width: minWidth,
		height: minHeight,
	})

	useEffect(() => {
		function updateMinSize() {
			const el = hiddenControlsBarRef.current
			if (el) {
				const rect = el.getBoundingClientRect()
				setControlsMinSize({
					width: Math.ceil(rect.width) + 8,
					height: Math.ceil(rect.height),
				})
			}
		}
		updateMinSize()
		window.addEventListener('resize', updateMinSize)
		return () => window.removeEventListener('resize', updateMinSize)
	}, [])

	// Default color settings if none provided
	const defaultColors: ColorSettings = {
		background: '#ffffff',
		foreground: '#1f2937',
	}

	const activeColors = colorSettings || defaultColors

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

	const toggleEdit = () => {
		setIsEditing(!isEditing)
	}

	const applyBionicReading = (text: string) => {
		if (!bionicReading) return text

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

	// Draggable logic:
	// - If editing: only allow drag from controls bar
	// - If resizing: disable drag
	// - Otherwise: allow drag from anywhere except resize handle
	const draggableDisabled = isResizing
	let draggableCancel = isEditing ? '*' : '.resize-handle-corner'
	// When editing, allow drag only from controls bar
	// Draggable's 'cancel' means: do NOT drag from these selectors
	// We'll override this with a handle prop
	let draggableHandle = undefined
	if (isEditing) {
		draggableHandle = '.controls-bar'
		draggableCancel = undefined
	}

	return (
		<>
			{/* Hidden controls bar for min width measurement */}
			<div
				style={{
					position: 'absolute',
					visibility: 'hidden',
					pointerEvents: 'none',
					height: 0,
					overflow: 'hidden',
				}}
			>
				<div
					ref={hiddenControlsBarRef}
					className='controls-bar flex gap-2 flex-row justify-between px-2 h-6'
				>
					<button className='pl-1 pr-2 py-1 flex items-center justify-center rounded-sm'>
						<AppleCheckmarkIcon className='size-4' />
						<span className='text-xs'>Save</span>
					</button>
					<button className='flex items-center justify-center rounded-sm'>
						<AppleCogIcon className='size-4' />
					</button>
				</div>
			</div>
			<Draggable
				bounds='parent'
				disabled={draggableDisabled}
				{...(draggableCancel ? {cancel: draggableCancel} : {})}
				{...(draggableHandle ? {handle: draggableHandle} : {})}
				defaultPosition={defaultPosition}
				{...(position !== undefined ? {position} : {})}
				onStop={onStop}
			>
				<div
					className={`absolute z-[9998] ${containerClassName}`}
					style={{...style, opacity}}
				>
					<ResizableBox
						width={size.width}
						height={size.height}
						minConstraints={[
							controlsMinSize.width,
							controlsMinSize.height,
						]}
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
						className={`backdrop-blur-sm shadow-xl ${className}`}
						style={{
							borderRadius: '0px',
							backgroundColor: activeColors.background,
							...style,
						}}
					>
						<div className='w-full h-full relative'>
							<div className='relative h-full'>
								{isEditing ? (
									<textarea
										value={content}
										onChange={e =>
											setContent && setContent(e.target.value)
										}
										className='w-full h-full p-2 bg-transparent resize-none focus:outline-none overflow-y-auto break-words'
										placeholder='Type your notes here...'
										style={{
											wordWrap: 'break-word',
											overflowWrap: 'break-word',
											fontSize: `${fontSize * 1.333}px`,
											color: activeColors.foreground,
										}}
									/>
								) : (
									<div
										className='w-full h-full p-1 overflow-y-auto break-words'
										style={{
											wordWrap: 'break-word',
											overflowWrap: 'break-word',
											whiteSpace: 'pre-wrap',
											fontSize: `${fontSize * 1.333}px`,
											color: activeColors.foreground,
										}}
										dangerouslySetInnerHTML={{
											__html: applyBionicReading(content),
										}}
									/>
								)}

								{/* Transparent overlay for resize area to block drag events */}
								<div
									className='resize-handle-corner pointer-events-auto absolute right-0 bottom-0 w-4 h-4 z-40'
									style={{background: 'transparent'}}
								/>

								<div
									ref={controlsBarRef}
									className='controls-bar absolute h-6 bottom-1 left-0 flex gap-2 flex-row justify-between w-full px-2'
									style={{cursor: isEditing ? 'grab' : undefined}}
								>
									<button
										onClick={toggleEdit}
										className='pl-1 pr-2 py-1 flex items-center justify-center rounded-sm transition-colors'
										style={{
											backgroundColor: hexToRgba(
												activeColors.background,
												0.7
											),
										}}
										title={isEditing ? 'Save' : 'Edit'}
									>
										{isEditing ? (
											<div
												className='flex items-center gap-1'
												style={{color: activeColors.foreground}}
											>
												<AppleCheckmarkIcon className='size-4' />
												<span className='text-xs'>Save</span>
											</div>
										) : (
											<div
												className='flex items-center gap-1'
												style={{color: activeColors.foreground}}
											>
												<ApplePencilIcon className='size-4' />
												<span className='text-xs'>Edit</span>
											</div>
										)}
									</button>
									<button
										onClick={onSettingsOpen}
										className='flex items-center justify-center rounded-sm transition-colors'
										style={{
											color: activeColors.foreground,
										}}
										title='Customize Note Appearance'
									>
										<AppleCogIcon className='size-4' />
									</button>
								</div>
							</div>
						</div>
					</ResizableBox>
				</div>
			</Draggable>
		</>
	)
}

export default ResizableSquare
