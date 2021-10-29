import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="shadow-md font-ui py-4 px-6 rounded-lg shadow-lg">
        <h1 className="text-gray-800 font-semibold text-2xl">ตั้งค่าตารางสอน</h1>
        <div>

          <input className="border border-gray-300 rounded-lg px-4 py-1"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
