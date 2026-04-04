import picture from "../assets/norex.jpg"; 


export default function About() {
  return (
    <div className="py-16 px-0">
      {/* Hero Image Full Width with Darkened Gradient Overlay */}
      <div className="relative w-screen h-96">
        <img 
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=3000&q=80"
          alt="Black tech professionals collaborating"
          className="w-full h-full object-cover brightness-75"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Norex Brain Tech
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Empowering young African minds with digital skills for global impact.
          </p>
        </div>
      </div>

      {/* About Section with Image + Text */}
      <div className="max-w-6xl mx-auto px-4 mt-16 grid md:grid-cols-2 gap-10 items-center">

        {/* Text Side */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">About Us</h2>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Norex Brain Tech is a leading tech school focused on practical and
            industry-ready skills. We train students in Web Development,
            Office Automation, Graphics Design, Video Editing,
            Cyber Security and more.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our mission is to equip young minds with digital skills that create
            opportunities locally and globally. We believe in innovation,
            excellence and transforming potential into professional success.
          </p>
        </div>

        {/* Image / Tech Logo Side */}
        <div className="flex justify-center">
          <img
            src={picture}
            alt="Tech logo"
            className="w-72 h-72 object-contain"
          />
        </div>

      </div>
    </div>
  );
}