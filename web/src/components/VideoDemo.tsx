import { Play, Calendar, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VideoDemo = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-red-purple-300/35 at-[30%_70%] to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-archivo text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See NoteNotch in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Watch me demonstrate how NoteNotch transforms your video calls with perfect eye contact and seamless note reading.
          </p>
        </div>

        {/* Video Player Section */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            {/* Video placeholder with play button */}
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-purple-500/20"></div>
              
              {/* Play button */}
              <div className="relative z-10 flex flex-col items-center">
                <button className="w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 group">
                  <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
                <p className="text-white/80 mt-4 text-lg font-medium">Watch Demo Video</p>
                <p className="text-white/60 text-sm">5 min walkthrough</p>
              </div>
              
              {/* Video thumbnail overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Preview content */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-semibold text-lg mb-1">NoteNotch Live Demo</h3>
                <p className="text-white/80 text-sm">See how it works in real video calls</p>
              </div>
            </div>
            
            {/* Video controls/info bar */}
            <div className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-white/80">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Coming Soon</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/80">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Real Use Cases</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/80">
                    <Star className="w-4 h-4" />
                    <span className="text-sm">Beta Tested</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  Get Notified
                </Button>
              </div>
            </div>
          </div>
          
          {/* Video description */}
          <div className="mt-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 max-w-2xl mx-auto">
              <h3 className="font-archivo text-lg font-bold text-slate-900 mb-3">
                What You'll Learn
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
                <div>
                  <strong>Setup Process</strong>
                  <p>Quick 30-second installation</p>
                </div>
                <div>
                  <strong>Live Usage</strong>
                  <p>Real video call demonstrations</p>
                </div>
                <div>
                  <strong>Best Practices</strong>
                  <p>Tips for professional presentations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};