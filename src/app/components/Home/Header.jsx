import { FaCheckCircle, FaExclamationTriangle, FaPlus, FaSyncAlt, FaUsers } from "react-icons/fa";


const Header = () => {
    return (
        <section className="bg-[#f8fafc] py-16 px-4 sm:px-6 lg:px-8 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-5">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#1e293b] tracking-tight mb-4">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the 
            relationships that matter most.
          </p>
        </div>

        {/* Add Friend Button */}
        <button className="group inline-flex items-center gap-2 bg-[#244d3f] text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-[#1a3a2f] active:scale-95 mb-16 shadow-md">
          <FaPlus className="group-hover:rotate-90 transition-transform duration-300" size={16} />
          <span>Add a Friend</span>
        </button>

        {/* Static Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Total Friends */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="mb-4 p-3 bg-blue-50 rounded-full group-hover:bg-[#244d3f]/10 transition-colors">
              <FaUsers className="text-blue-500" size={24} />
            </div>
            <h2 className="text-4xl font-extrabold text-[#244d3f] mb-1">10</h2>
            <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">Total Friends</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#244d3f] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Card 2: On Track */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="mb-4 p-3 bg-green-50 rounded-full group-hover:bg-[#244d3f]/10 transition-colors">
              <FaCheckCircle className="text-green-500" size={24} />
            </div>
            <h2 className="text-4xl font-extrabold text-[#244d3f] mb-1">3</h2>
            <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">On Track</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#244d3f] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Card 3: Need Attention */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="mb-4 p-3 bg-yellow-50 rounded-full group-hover:bg-[#244d3f]/10 transition-colors">
              <FaExclamationTriangle className="text-yellow-500" size={24} />
            </div>
            <h2 className="text-4xl font-extrabold text-[#244d3f] mb-1">6</h2>
            <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">Need Attention</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#244d3f] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Card 4: Interactions */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="mb-4 p-3 bg-purple-50 rounded-full group-hover:bg-[#244d3f]/10 transition-colors">
              <FaSyncAlt className="text-purple-500" size={24} />
            </div>
            <h2 className="text-4xl font-extrabold text-[#244d3f] mb-1">12</h2>
            <p className="text-gray-500 font-semibold text-sm uppercase tracking-wider">Interactions This Month</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#244d3f] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Header;