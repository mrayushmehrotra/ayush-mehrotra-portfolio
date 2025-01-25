import React from "react";

const page = () => {
  return (
    <div>
      <aside className="bg-black text-white p-6 rounded-lg w-full max-w-md font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm">bash</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400">$ npm install uiverse</p>
          <p className="text-white">+ uiverse@1.0.0</p>
          <p className="text-white">
            added 1 package, and audited 2 packages in 3s
          </p>
          <p className="text-green-400">$</p>
        </div>
      </aside>
    </div>
  );
};

export default page;
