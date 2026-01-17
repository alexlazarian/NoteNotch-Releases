
import { useState, useRef } from "react";
import { Eye, Move, Edit3, Type, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const LiveDemo = () => {
  const [noteContent, setNoteContent] = useState("Key talking points:\n• Introduce the problem\n• Present our solution\n• Share success metrics\n• Call to action");
  const [isEditing, setIsEditing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 280, height: 180 });
  const [bionicReading, setBionicReading] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const startPos = useRef({ x: 0, y: 0 });
  const startMousePos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isEditing) return;
    setIsDragging(true);
    startPos.current = position;
    startMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isEditing) return;
    const deltaX = e.clientX - startMousePos.current.x;
    const deltaY = e.clientY - startMousePos.current.y;
    setPosition({
      x: Math.max(-100, Math.min(100, startPos.current.x + deltaX)),
      y: Math.max(-50, Math.min(150, startPos.current.y + deltaY))
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
    setSize({ width: 280, height: 180 });
  };

  const formatBionicText = (text: string) => {
    if (!bionicReading) return text;
    return text.split(' ').map((word, index) => {
      const midPoint = Math.ceil(word.length / 2);
      const bold = word.substring(0, midPoint);
      const normal = word.substring(midPoint);
      return (
        <span key={index}>
          <strong>{bold}</strong>{normal}{' '}
        </span>
      );
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-red-purple-300/35 at-[30%_70%] to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-archivo text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience NoteNotch Live
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Try the interactive demo below. Drag the note around, edit the content, and see how it maintains perfect eye contact positioning.
          </p>
        </div>

        {/* Demo Container */}
        <div className="max-w-5xl mx-auto">
          {/* Mac Screen Simulation */}
          <div 
            className="relative bg-gray-900 rounded-t-3xl border-4 border-gray-300 mx-auto shadow-2xl"
            style={{ width: '800px', height: '500px' }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Mac Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl border-2 border-gray-800 z-20">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full"></div>
            </div>

            {/* Simulated Video Call Interface */}
            <div className="absolute inset-4 bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Eye className="w-12 h-12 text-white/70" />
                </div>
                <p className="text-lg font-medium mb-2">Video Call in Progress</p>
                <p className="text-sm text-white/70">Your audience sees perfect eye contact</p>
              </div>
            </div>

            {/* Floating Note */}
            <div
              ref={dragRef}
              className={`absolute bg-orange-50 border border-orange-200 rounded-lg shadow-2xl transition-all duration-200 ${
                isDragging ? 'scale-105 shadow-orange-200/50' : ''
              } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{
                width: `${size.width}px`,
                height: `${size.height}px`,
                left: `50%`,
                top: `60px`,
                transform: `translate(calc(-50% + ${position.x}px), ${position.y}px)`,
                zIndex: 30,
              }}
              onMouseDown={handleMouseDown}
            >
              {/* Note Header */}
              <div className="flex items-center justify-between p-3 border-b border-orange-200 bg-orange-100/50">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-1">
                  <Move className="w-4 h-4 text-gray-500" />
                </div>
              </div>

              {/* Note Content */}
              <div className="p-4 h-full">
                {isEditing ? (
                  <Textarea
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    className="w-full h-full resize-none border-none bg-transparent text-sm"
                    placeholder="Type your notes here..."
                    autoFocus
                  />
                ) : (
                  <div className="text-sm text-gray-700 leading-relaxed h-full overflow-auto">
                    {bionicReading ? formatBionicText(noteContent) : noteContent}
                  </div>
                )}
              </div>
            </div>

            {/* Eye Contact Indicator */}
            <div className="absolute top-8 right-8 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2 z-10">
              <Eye className="w-4 h-4" />
              <span>Perfect Eye Contact</span>
            </div>
          </div>

          {/* Mac Base */}
          <div className="w-full h-8 bg-gray-300 rounded-b-3xl mx-auto shadow-lg" style={{ width: '800px' }}>
            <div className="w-16 h-3 bg-gray-400 rounded-full mx-auto pt-2"></div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => setIsEditing(!isEditing)}
              className="bg-orange-500 border-orange-500 text-white hover:bg-orange-600"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              {isEditing ? 'Save' : 'Edit Note'}
            </Button>
            
            <Button
              variant="outline"
              onClick={() => setBionicReading(!bionicReading)}
              className="bg-red-500 border-red-500 text-white hover:bg-red-600"
            >
              <Type className="w-4 h-4 mr-2" />
              {bionicReading ? 'Normal' : 'Bionic'} Reading
            </Button>
            
            <Button
              variant="outline"
              onClick={resetPosition}
              className="bg-gray-500 border-gray-500 text-white hover:bg-gray-600"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset Position
            </Button>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 border border-gray-200 shadow-sm">
              <div className="text-gray-700 text-sm">
                <p className="font-medium mb-2">Try the Demo:</p>
                <p>🖱️ <strong>Drag</strong> the note around • ✏️ <strong>Edit</strong> content • 👁️ <strong>Toggle</strong> bionic reading</p>
                <p className="mt-2 text-gray-600">Notice how the note stays perfectly positioned for natural eye contact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
