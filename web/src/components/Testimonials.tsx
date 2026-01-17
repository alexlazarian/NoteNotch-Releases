
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Software Engineer",
      image: "👨‍💻",
      quote: "Finally, a solution that actually works. No more awkward looking down during code reviews."
    },
    {
      name: "Sarah Martinez",
      role: "Startup Founder",
      image: "👩‍💼",
      quote: "Game changer for investor pitches. I can reference my notes while maintaining that crucial eye contact."
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "University Professor",
      image: "👨‍🏫",
      quote: "My online lectures feel much more engaging now. Students can tell I'm actually looking at them."
    },
    {
      name: "Emma Thompson",
      role: "Sales Executive",
      image: "👩‍💻",
      quote: "Client calls are so much smoother. I can check my talking points without breaking the connection."
    },
    {
      name: "Jordan Kim",
      role: "Product Manager",
      image: "👨‍💼",
      quote: "Presentations to stakeholders used to stress me out. Now I feel confident and prepared."
    },
    {
      name: "Lisa Wang",
      role: "Graduate Student",
      image: "👩‍🎓",
      quote: "Thesis defenses are intimidating enough. This helps me stay composed and reference my notes naturally."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-red-purple-200/30 at-[20%_80%] to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-archivo text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Early User Feedback
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from professionals testing NoteNotch in beta.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200 shadow-sm hover:border-orange-200"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="mt-4 w-8 h-1 bg-orange-500 rounded-full"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-8 py-4 shadow-sm">
            <span className="text-2xl mr-3">🚀</span>
            <span className="text-gray-900 font-semibold text-lg">Beta Testing in Progress</span>
            <span className="text-gray-600 ml-2">• Real User Feedback</span>
          </div>
        </div>
      </div>
    </section>
  );
};
