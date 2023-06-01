import { FaBolt, FaBrain, FaLightbulb, FaPuzzlePiece } from 'react-icons/fa';

const ResultSummary = () => {
  return (
    <div className="flex justify-center">
      <div className="w-2/5 mt-10 h-96 box-content rounded-2xl shadow-2xl">
        <div className="flex justify-between">
          <div className="w-2/4 bg-gradient-to-br from-blue-600 to-blue-800 h-96 m-0 box-content rounded-2xl flex flex-col justify-around items-center">
            <div className="w-24 h-6 -mb-4 text-gray-300 font-semibold">Your Result</div>
            <div className="w-32 h-32 bg-gradient-to-br from-blue-800 to-blue-800 rounded-full  text-white "><div className='text-5xl font-semibold mt-6'>89</div><span className='text-sm text-gray-400'>of 100</span></div>
            <div className="w-48 h-16  -mt-6 flex flex-col items-center"><div className='font-bold  text-white'>Great</div><div className='text-xs w-2/3 text-gray-400 flex'>You scored higher than 95% of people that have taken this test.</div></div>
          </div>
          <div className="">
            <div className="w-48 h-8 mt-6 me-6 flex justify-start font-bold text-blue-950">Summary</div>
            <div className="bg-pink-50 rounded-md w-48 h-8 mt-2 me-6 text-xs text-pink-500 font-semibold flex items-center justify-between">
              <div className="flex items-center">
                <FaBolt className="ml-2 mr-2" />
                Reaction
              </div>
              <div className="text-blue-950 mr-4 font-bold">80<span className='text-gray-500 font-light'> / 100</span></div>
            </div>
            <div className="bg-yellow-50 rounded-md w-48 h-8 mt-4 me-6 text-xs text-yellow-500 font-semibold flex items-center justify-between">
              <div className="flex items-center">
                <FaBrain className="ml-2 mr-2" />
                Memory
              </div>
              <div className="text-blue-950 mr-4 font-bold">90<span className='text-gray-500 font-light'> / 100</span></div>
            </div>
            <div className="bg-green-100 rounded-md w-48 h-8 mt-4 me-6 text-xs text-green-800 font-semibold flex items-center justify-between">
              <div className="flex items-center">
                <FaLightbulb className="ml-2 mr-2" />
                Understanding
              </div>
              <div className="text-blue-950 mr-4 font-bold">95<span className='text-gray-500 font-light'> / 100</span></div>
            </div>
            <div className="bg-blue-100 rounded-md w-48 h-8 mt-4 me-6 text-xs text-blue-800 font-semibold flex items-center justify-between">
              <div className="flex items-center">
                <FaPuzzlePiece className="ml-2 mr-2" />
                Problem solving
              </div>
              <div className="text-blue-950 mr-4 font-bold">90<span className='text-gray-500 font-light'> / 100</span></div>
            </div>
            <div className="bg-blue-950 w-48 h-8 mt-10 me-6 text-white text-sm font-semibold flex items-center justify-center rounded-3xl py-4">
              <button>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSummary;
