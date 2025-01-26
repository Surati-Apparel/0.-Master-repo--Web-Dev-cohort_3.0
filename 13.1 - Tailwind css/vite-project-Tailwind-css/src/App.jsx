import { useState } from 'react'
import './App.css'
import { Otp } from './componenets/Otp'

function App() {
  function toggleMode() {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.currentTheme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }

  return (
    <>
      <Dashboard />
      
    </>)
}


// Sidebar Component
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to manage collapse/expand
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <aside className={`w-${isCollapsed ? '16' : '64'} bg-white w-16 shadow-md flex flex-col p-4 transition-all duration-300`}>
      
      <nav className="flex-1">
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-center space-x-4 text-blue-700 font-medium">
            <span className="material-icons" aria-hidden="true">home</span>
            {!isCollapsed && <span>Home</span>}
          </li>
          <li className="flex items-center space-x-4">
            <span className="material-icons">group</span>
            {!isCollapsed && <span>Webinars</span>}
          </li>
          <li className="flex items-center space-x-4">
            <span className="material-icons">credit_card</span>
            {!isCollapsed && <span>Billing</span>}
          </li>
          <li className="flex items-center space-x-4">
            <span className="material-icons">people</span>
            {!isCollapsed && <span className='whitespace-nowrap'>User Management</span>}
          </li>
          <li className="flex items-center space-x-4">
            <span className="material-icons">settings</span>
            {!isCollapsed && <span>Settings</span>}
          </li>
        </ul>
      </nav>
      <button 
        onClick={toggleSidebar} 
        className="absolute top-4 right-4 bg-blue-700 text-white rounded-full p-2">
        {isCollapsed ? '→' : '←'}
      </button>
    </aside>
  );
};

// Header Component
const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Good morning, Prabhleen! 👋</h1>
        <p className="text-gray-500">Monday, 14 October 2024</p>
      </div>
      <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40" // Replace with actual image URL
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

// Profile Card Component
const ProfileCard = () => {
  return (
    <div className="col-span-3 bg-white shadow-md rounded-xl p-4">
      <div className="flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/80" // Replace with actual profile image
          alt="Profile"
          className="w-20 h-20 rounded-full mb-4"
        />
        <h2 className="text-lg font-bold">Prabhleen Kaur</h2>
        <p className="text-gray-500">prabhleen@gmail.com</p>
        <p className="text-gray-500">9899999882</p>
        <p className="text-gray-500">Delhi, India</p>
      </div>
    </div>
  );
};

// Schedule Card Component
const ScheduleCard = () => {
  return (
    <div className="col-span-6 bg-white shadow-md rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Monday, 14 October</h2>
        <button className="text-gray-500">
          <span className="material-icons">chevron_left</span>
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul className="space-y-4">
        <li className="flex items-center justify-between">
          <div>
            <p className="font-medium">11:30 AM</p>
            <p className="text-sm text-gray-500">Live</p>
          </div>
          <p className="text-blue-700">UX Webinar</p>
        </li>
        <li className="flex items-center justify-between">
          <div>
            <p className="font-medium">11:30 AM</p>
            <p className="text-sm text-gray-500">Upcoming</p>
          </div>
          <p className="text-blue-700">My first Webinar</p>
        </li>
      </ul>
    </div>
  );
};

// Action Buttons Component
const ActionButtons = () => {
  return (
    <div className="col-span-3 grid grid-cols-1 gap-4">
      <button className="bg-blue-500 text-white rounded-lg shadow-md p-4 text-center font-medium">
        Schedule a Webinar
      </button>
      <button className="bg-blue-500 text-white rounded-lg shadow-md p-4 text-center font-medium">
        Join a Webinar
      </button>
      <button className="bg-blue-500 text-white rounded-lg shadow-md p-4 text-center font-medium">
        Open Recordings
      </button>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#F8F9FC]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="grid grid-cols-12 gap-4">
          <ProfileCard />
          <ScheduleCard />
          <ActionButtons />
        </div>
      </main>
    </div>
  );
};


export default App
