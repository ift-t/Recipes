
import backgroundImage from '../../assets/Images/Image1.jpg';

const Banner = () => {
  return (
    <div className="relative h-screen container mx-auto">
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
        </p>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-3xl hover:bg-green-600 transition duration-300">
            Explore Now
          </button>
          <button className="bg-transparent border-2 text-gray-800 py-2 px-4 rounded-3xl hover:bg-gray-200 transition duration-300">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
