import { Outlet, Link, useLocation } from 'react-router';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Clock, 
  FileText, 
  DollarSign, 
  Calendar,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Clients', href: '/clients', icon: Users },
  { name: 'Cases', href: '/cases', icon: Briefcase },
  { name: 'Time Tracking', href: '/time-tracking', icon: Clock },
  { name: 'Billing', href: '/billing', icon: DollarSign },
  { name: 'Documents', href: '/documents', icon: FileText },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
];

export function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-slate-900/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-slate-900 p-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-xl font-semibold text-white">LawFirm ERP</h1>
              <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-1 min-h-0 bg-slate-900">
          <div className="flex items-center flex-shrink-0 h-16 px-6 bg-slate-800">
            <h1 className="text-xl font-semibold text-white">LawFirm ERP</h1>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-4 py-4 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-40 flex items-center h-16 px-4 bg-white border-b border-slate-200 lg:px-8">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-slate-500 lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center justify-between flex-1 lg:justify-end">
            <h2 className="ml-4 text-slate-900 lg:hidden">LawFirm ERP</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">Welcome back, Attorney</span>
            </div>
          </div>
        </div>
        <main className="p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
