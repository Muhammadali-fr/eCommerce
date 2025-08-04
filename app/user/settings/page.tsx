import { Save, Plus, Minus } from "lucide-react";

export default function UserSettings() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-screen-md mx-auto bg-white p-6 rounded-2xl shadow-sm space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100 transition">
              Discard
            </button>
            <button className="px-4 py-2 bg-violet-600 text-white rounded-lg flex items-center gap-2 hover:bg-violet-500 transition">
              <Save size={16} />
              Save
            </button>
          </div>
        </div>

        {/* Profile Picture Section */}
        <div className="flex items-center gap-5">
          <img
            src="/assets/default-user.png"
            alt="User avatar"
            className="w-28 h-28 rounded-full object-cover border border-gray-200"
          />
          <div className="flex gap-3 flex-wrap">
            <button className="px-4 py-2 bg-red-100 text-red-600 border border-red-400 rounded-lg flex items-center gap-1 hover:bg-red-200 transition">
              <Minus size={16} />
              Delete Picture
            </button>
            <button className="px-4 py-2 bg-violet-600 text-white rounded-lg flex items-center gap-1 hover:bg-violet-500 transition">
              <Plus size={16} />
              Change Picture
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-1">
            <label htmlFor="firstName" className="text-sm text-gray-600">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your name"
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 text-gray-700"
            />
          </div>

          <div className="flex items-center justify-between border border-gray-300 p-3 rounded-lg">
            <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet.</p>
            <span className="text-gray-500 text-sm italic">switch</span>
          </div>
        </form>
      </div>
    </div>
  );
}
