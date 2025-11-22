import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dumbbell, Menu, X, LogOut } from 'lucide-react';
const API_BASE: string = ((import.meta as any).env?.VITE_API_URL) || 'http://localhost:4000';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top whenever location changes and check login status
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Prefer server-validated token if available
    const token = localStorage.getItem('fitx_token');
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  const handleLogout = () => {
    // clear auth tokens
    localStorage.removeItem('fitx_token');
    localStorage.removeItem('fitx_user');
    setIsLoggedIn(false);
    navigate('/');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/workouts', label: 'Workouts' },
    { path: '/diets', label: 'Diet Plans' },
    { path: '/custom-diet', label: 'Meal Planner' },
    { path: '/workout-log', label: 'Log' },
    { path: '/bmi', label: 'BMI' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 selection:bg-blue-100 selection:text-blue-700">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 group-hover:scale-105 transition-all duration-300">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">Fit-X</span>
                <span className="text-[10px] font-medium text-blue-600 tracking-widest uppercase mt-0.5">Pro Fitness</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      active 
                        ? 'bg-slate-900 text-white shadow-md transform scale-105' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center pl-6 border-l border-slate-200 ml-6">
              {isLoggedIn ? (
                <button 
                  onClick={handleLogout} 
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all shadow-sm group"
                >
                  <span>Logout</span>
                  <LogOut className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ) : (
                <Link to="/login" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5">
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl animate-in slide-in-from-top-5 fade-in duration-200">
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === link.path
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                </Link>
              ))}
              
              <div className="h-px bg-slate-100 my-3"></div>
              
              {isLoggedIn ? (
                 <button 
                   onClick={() => { handleLogout(); setIsMenuOpen(false); }} 
                   className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                 >
                   Logout
                   <LogOut className="w-5 h-5" />
                 </button>
              ) : (
                 <Link 
                  to="/login" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md"
                >
                  Sign In
                 </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 opacity-50">
             <Dumbbell className="w-5 h-5" />
             <span className="font-bold text-lg tracking-tight text-white">Fit-X</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Fit-X. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;