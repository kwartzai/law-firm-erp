import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const upcomingEvents = [
  {
    date: "MAR 19, 09:00 AM",
    title: "RTC Hearing: Santos v. Reyes",
    location: "RTC Makati, Branch 61. Lead counsel: Atty. Carla Mendoza.",
    action: "VIEW CASE",
    actionType: "case",
  },
  {
    date: "MAR 21, 02:30 PM",
    title: "SEC Filing Deadline",
    location:
      "Maharlika Holdings. Submission of the General Information Sheet.",
    action: "REVIEW DOCS",
    actionType: "docs",
  },
  {
    date: "MAR 24, 11:00 AM",
    title: "Client Conference: Dela Cruz Estate",
    location:
      "Virtual meeting with heirs in Quezon City regarding estate settlement requirements.",
    action: "JOIN MEETING",
    actionType: "meeting",
  },
  {
    date: "MAR 27, 05:00 PM",
    title: "Partners' Docket Review",
    location: "BGC office boardroom. Weekly litigation and collections update.",
    action: null,
    actionType: null,
  },
];

// Calendar events by day
const calendarEvents: Record<number, string> = {
  5: "RTC HEARING",
  12: "MEDIATION",
  15: "SEC FILING",
  20: "CLIENT MTG",
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1));
  const [activeView, setActiveView] = useState<"MONTH" | "WEEK" | "DAY">(
    "MONTH",
  );
  const [activeFilter, setActiveFilter] = useState("My Docket");
  const [showNewEvent, setShowNewEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  // Build calendar grid
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-8">
        <div>
          <h1
            className="text-[32px] sm:text-[48px] text-[#1a1a1a] mb-1"
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            Calendar
          </h1>
          <p
            className="text-[11px] font-semibold tracking-[2px] uppercase text-[rgba(26,26,26,0.4)] mt-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {MONTHS[month].toUpperCase()} {year} • FIRM DOCKET
          </p>
        </div>
        <button
          onClick={() => setShowNewEvent(true)}
          className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 text-[12px] font-semibold tracking-[0.5px] uppercase hover:bg-[#333] transition-colors mt-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Plus size={13} />
          New Event
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        {/* Calendar */}
        <div>
          {/* Nav + View Toggle */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <button
                onClick={prevMonth}
                className="w-8 h-8 flex items-center justify-center border border-[rgba(26,26,26,0.12)] hover:bg-[rgba(26,26,26,0.04)] transition-colors"
              >
                <ChevronLeft size={14} />
              </button>
              <span
                className="text-[18px] font-medium text-[#1a1a1a]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {MONTHS[month]} {year}
              </span>
              <button
                onClick={nextMonth}
                className="w-8 h-8 flex items-center justify-center border border-[rgba(26,26,26,0.12)] hover:bg-[rgba(26,26,26,0.04)] transition-colors"
              >
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="flex items-center border border-[rgba(26,26,26,0.12)]">
              {(["MONTH", "WEEK", "DAY"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setActiveView(v)}
                  className={`px-4 py-2 text-[11px] font-semibold tracking-[0.5px] uppercase transition-colors ${
                    activeView === v
                      ? "bg-[#1a1a1a] text-white"
                      : "text-[rgba(26,26,26,0.55)] hover:bg-[rgba(26,26,26,0.04)]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white border border-[rgba(26,26,26,0.1)] shadow-sm">
            {/* Day headers */}
            <div className="grid grid-cols-7 border-b border-[rgba(26,26,26,0.08)]">
              {DAYS.map((d) => (
                <div key={d} className="py-3 text-center">
                  <span
                    className="text-[10px] font-bold tracking-[1.2px] uppercase text-[rgba(26,26,26,0.4)]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {d}
                  </span>
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7">
              {cells.map((day, idx) => (
                <div
                  key={idx}
                  className={`min-h-[90px] border-b border-r border-[rgba(26,26,26,0.06)] p-2 ${
                    day
                      ? "cursor-pointer hover:bg-[rgba(26,26,26,0.02)]"
                      : "opacity-30"
                  } ${idx % 7 === 6 ? "border-r-0" : ""}`}
                >
                  {day && (
                    <>
                      <div
                        className={`w-7 h-7 flex items-center justify-center mb-1 ${
                          day === 5 ? "bg-[#1a1a1a] text-white" : ""
                        }`}
                      >
                        <span
                          className={`text-[13px] ${day === 5 ? "text-white" : "text-[rgba(26,26,26,0.7)]"}`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {day}
                        </span>
                      </div>
                      {calendarEvents[day] && (
                        <div className="bg-[rgba(26,26,26,0.07)] px-1.5 py-0.5 mt-1">
                          <span
                            className="text-[9px] font-bold tracking-[0.5px] uppercase text-[rgba(26,26,26,0.6)]"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {calendarEvents[day]}
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Firm Filters */}
          <div className="mt-5">
            <p
              className="text-[10px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-3"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Firm Filters
            </p>
            <div className="flex items-center gap-2">
              {["My Docket", "Litigation Team", "Manage"].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`flex items-center gap-2 px-4 py-2 border text-[12px] font-medium transition-colors ${
                    activeFilter === f
                      ? "border-[#1a1a1a] text-[#1a1a1a] bg-[rgba(26,26,26,0.04)]"
                      : "border-[rgba(26,26,26,0.12)] text-[rgba(26,26,26,0.55)] hover:border-[rgba(26,26,26,0.2)]"
                  }`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {f === "Manage" ? null : (
                    <span
                      className={`w-2 h-2 rounded-full ${activeFilter === f ? "bg-[#1a1a1a]" : "bg-[rgba(26,26,26,0.25)]"}`}
                    />
                  )}
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div>
          <h2
            className="text-[22px] text-[#1a1a1a] mb-5"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Upcoming Schedule
          </h2>
          <div className="flex flex-col gap-0">
            {upcomingEvents.map((evt, i) => (
              <div
                key={i}
                className={`border-b border-[rgba(26,26,26,0.08)] pb-5 mb-5`}
              >
                <p
                  className="text-[10px] font-semibold tracking-[1px] uppercase text-[rgba(26,26,26,0.4)] mb-2"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {evt.date}
                </p>
                <p
                  className="text-[16px] font-medium text-[#1a1a1a] mb-2 leading-snug"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {evt.title}
                </p>
                <p
                  className="text-[12px] text-[rgba(26,26,26,0.55)] mb-3 leading-snug"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {evt.location}
                </p>
                {evt.action && (
                  <button
                    className="text-[10px] font-bold tracking-[1.2px] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-[1px] hover:opacity-60 transition-opacity"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {evt.action}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Event Modal */}
      {showNewEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
          onClick={() => setShowNewEvent(false)}
        >
          <div
            className="bg-white w-full max-w-[480px] mx-4 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-[22px] text-[#1a1a1a]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                New Event
              </h2>
              <button
                onClick={() => setShowNewEvent(false)}
                className="text-[rgba(26,26,26,0.4)] hover:text-[#1a1a1a]"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Event Title",
                  field: "title",
                  placeholder: "e.g. RTC Hearing: Santos v. Reyes",
                },
                {
                  label: "Date & Time",
                  field: "date",
                  placeholder: "e.g. Mar 21, 2026, 09:00 AM",
                },
                {
                  label: "Location / Notes",
                  field: "location",
                  placeholder: "e.g. RTC Makati, Branch 61",
                },
              ].map(({ label, field, placeholder }) => (
                <div key={field}>
                  <label
                    className="block text-[11px] font-semibold tracking-[1px] uppercase text-[rgba(26,26,26,0.5)] mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={(newEvent as any)[field]}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, [field]: e.target.value })
                    }
                    className="w-full border border-[rgba(26,26,26,0.15)] px-4 py-3 text-[14px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowNewEvent(false)}
                className="flex-1 border border-[rgba(26,26,26,0.2)] py-3 text-[12px] font-semibold tracking-[0.5px] text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowNewEvent(false)}
                className="flex-1 bg-[#1a1a1a] text-white py-3 text-[12px] font-semibold tracking-[0.5px] hover:bg-[#333] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Create Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
