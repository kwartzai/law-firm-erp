import { Outlet, NavLink } from "react-router";
import { Search, Bell, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/cassielogo.svg";
import lawyerProfile from "../assets/lawyer.png";

const navItems = [
  { label: "Dashboard", path: "/" },
  { label: "Clients", path: "/clients" },
  { label: "Cases", path: "/cases" },
  { label: "Time Tracking", path: "/time-tracking" },
  { label: "Billing", path: "/billing" },
  { label: "Documents", path: "/documents" },
  { label: "Calendar", path: "/calendar" },
];

export function Root() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#f5f5ef", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Navigation */}
      <header className="bg-[#f5f5ef] border-b border-[rgba(26,26,26,0.1)] sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-[64px] flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Cassie logo" className="h-10 w-auto" />
          </NavLink>

          {/* Nav Links — desktop only */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `text-[11px] tracking-[1.2px] uppercase font-medium transition-colors relative pb-[2px] ${
                    isActive
                      ? "text-[#1a1a1a] after:absolute after:bottom-[-19px] after:left-0 after:right-0 after:h-[1px] after:bg-[#1a1a1a]"
                      : "text-[rgba(26,26,26,0.55)] hover:text-[#1a1a1a]"
                  }`
                }
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-[rgba(26,26,26,0.5)] hover:text-[#1a1a1a] transition-colors"
            >
              <Search size={16} />
            </button>
            <button className="hidden sm:block text-[rgba(26,26,26,0.5)] hover:text-[#1a1a1a] transition-colors relative">
              <Bell size={16} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#dc2626] rounded-full"></span>
            </button>
            <button className="hidden sm:block text-[rgba(26,26,26,0.5)] hover:text-[#1a1a1a] transition-colors">
              <Settings size={16} />
            </button>
            <div className="hidden sm:block w-8 h-8 overflow-hidden border border-[rgba(26,26,26,0.1)]">
              <img
                src={lawyerProfile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[rgba(26,26,26,0.7)] hover:text-[#1a1a1a] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[rgba(26,26,26,0.1)] bg-[#f5f5ef]">
            <nav className="max-w-[1200px] mx-auto px-4 py-2 flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-[12px] tracking-[1.2px] uppercase font-medium py-3 px-3 transition-colors border-b border-[rgba(26,26,26,0.05)] ${
                      isActive
                        ? "text-[#1a1a1a] bg-[rgba(26,26,26,0.04)]"
                        : "text-[rgba(26,26,26,0.55)] hover:text-[#1a1a1a]"
                    }`
                  }
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.label}
                </NavLink>
              ))}
              {/* Icons row */}
              <div className="flex items-center gap-4 px-3 py-4 mt-1">
                <div className="w-8 h-8 overflow-hidden border border-[rgba(26,26,26,0.1)]">
                  <img
                    src={lawyerProfile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="text-[rgba(26,26,26,0.5)] relative">
                  <Bell size={16} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#dc2626] rounded-full"></span>
                </button>
                <button className="text-[rgba(26,26,26,0.5)]">
                  <Settings size={16} />
                </button>
              </div>
            </nav>
          </div>
        )}

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-[rgba(26,26,26,0.1)] bg-white">
            <div className="max-w-[1200px] mx-auto px-6 py-3">
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cases, clients, and pleadings..."
                className="w-full bg-transparent outline-none text-[14px] text-[#1a1a1a] placeholder-[rgba(26,26,26,0.4)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
                onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
              />
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(26,26,26,0.08)] py-7">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Cassie logo" className="h-8 w-auto" />
            <span className="text-[11px] text-[rgba(26,26,26,0.4)] tracking-[1px] uppercase ml-2">
              © 2026 Philippine Law ERP
            </span>
          </div>
          <div className="flex items-center gap-6">
            {["System Status", "Support Portal", "Privacy Policy"].map(
              (link) => (
                <button
                  key={link}
                  className="text-[10px] tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] hover:text-[#1a1a1a] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link}
                </button>
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
