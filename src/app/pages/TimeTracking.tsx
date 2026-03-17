import { useState, useEffect, useRef } from "react";
import { Play, Square, MoreHorizontal, Clock, TrendingUp } from "lucide-react";

const timeEntries = [
  {
    id: 1,
    date: "14 Mar 2026",
    matter: "People v. Thompson",
    type: "CRIMINAL DEFENSE",
    description: "Prepared witness outlines and reviewed sworn statements.",
    duration: "4.5h",
    amount: "₱22,500.00",
  },
  {
    id: 2,
    date: "13 Mar 2026",
    matter: "Nexus Holdings Merger Clearance",
    type: "CORPORATE LAW",
    description: "Reviewed merger notifications and PCC supporting documents.",
    duration: "2.0h",
    amount: "₱10,000.00",
  },
  {
    id: 3,
    date: "13 Mar 2026",
    matter: "Dela Cruz Estate Settlement",
    type: "PRIVATE CLIENT",
    description:
      "Initial consultation on estate tax compliance and extrajudicial settlement.",
    duration: "1.5h",
    amount: "₱7,500.00",
  },
  {
    id: 4,
    date: "12 Mar 2026",
    matter: "Torres v. North Harbor",
    type: "LITIGATION",
    description:
      "Appeared before the NLRC and finalized position paper annexes.",
    duration: "6.0h",
    amount: "₱30,000.00",
  },
  {
    id: 5,
    date: "11 Mar 2026",
    matter: "Oakridge Title Transfer",
    type: "REAL ESTATE",
    description:
      "Reviewed transfer certificate of title and local tax clearances.",
    duration: "3.5h",
    amount: "₱17,500.00",
  },
];

const caseMatters = [
  "People v. Thompson",
  "Nexus Holdings Merger Clearance",
  "Dela Cruz Estate Settlement",
  "Torres v. North Harbor",
  "Oakridge Title Transfer",
  "Isla Tech v. Mendoza",
];

export function TimeTracking() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [selectedMatter, setSelectedMatter] = useState("");
  const [description, setDescription] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed((e) => e + 1);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const formatElapsed = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const handleStartStop = () => {
    if (!isRunning && !selectedMatter) return;
    if (isRunning) {
      setIsRunning(false);
      setElapsed(0);
    } else {
      setIsRunning(true);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-8">
        <div>
          <h1
            className="text-[32px] sm:text-[48px] text-[#1a1a1a] mb-2"
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            Time Tracking
          </h1>
          <p
            className="text-[14px] text-[rgba(26,26,26,0.55)] leading-snug"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Track billable hours and manage time entries for Philippine matters.
          </p>
        </div>
        <div className="mt-2 sm:text-right">
          <p
            className="text-[10px] font-semibold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Weekly Target
          </p>
          <p
            className="text-[22px] font-medium text-[#1a1a1a]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            32.5 / 40.0 hrs
          </p>
          {/* Progress bar */}
          <div className="w-full sm:w-[180px] h-1.5 bg-[rgba(26,26,26,0.08)] mt-2 sm:ml-auto">
            <div className="h-full bg-[#1a1a1a]" style={{ width: "81.25%" }} />
          </div>
        </div>
      </div>

      {/* Timer + Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 mb-10">
        {/* Timer Panel */}
        <div className="bg-white border border-[rgba(26,26,26,0.1)] p-8">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={13} className="text-[rgba(26,26,26,0.4)]" />
            <span
              className="text-[11px] font-semibold tracking-[1.2px] uppercase text-[rgba(26,26,26,0.4)]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Current Status
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2
                className="text-[22px] font-medium text-[#1a1a1a] mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {isRunning ? selectedMatter : "No Active Timer"}
              </h2>
              {isRunning ? (
                <p
                  className="text-[28px] font-light text-[#1a1a1a] tabular-nums"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {formatElapsed(elapsed)}
                </p>
              ) : (
                <p
                  className="text-[13px] text-[rgba(26,26,26,0.5)]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Select a matter to begin recording billable time.
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 w-full sm:w-auto mt-4 sm:mt-0">
               <div className="flex flex-wrap items-center gap-3">
                 {/* Matter Select */}
                 <select
                   value={selectedMatter}
                   onChange={(e) => setSelectedMatter(e.target.value)}
                   disabled={isRunning}
                   className="flex-1 sm:flex-none border border-[rgba(26,26,26,0.15)] px-4 py-2.5 text-[12px] text-[#1a1a1a] bg-white outline-none disabled:opacity-50 min-w-[220px]"
                   style={{ fontFamily: "'Inter', sans-serif" }}
                 >
                   <option value="">Select Case Matter</option>
                   {caseMatters.map((m) => (
                     <option key={m} value={m}>
                       {m}
                     </option>
                   ))}
                 </select>

                 {/* Start/Stop Button */}
                 <button
                   onClick={handleStartStop}
                   disabled={!isRunning && !selectedMatter}
                   className={`flex items-center justify-center gap-2 px-6 py-3 text-[12px] font-semibold tracking-[0.5px] uppercase transition-colors disabled:opacity-40 min-w-[140px] ${
                     isRunning
                       ? "bg-[#dc2626] text-white hover:bg-[#b91c1c]"
                       : "bg-[#1a1a1a] text-white hover:bg-[#333]"
                   }`}
                   style={{ fontFamily: "'Inter', sans-serif" }}
                 >
                   {isRunning ? <Square size={13} /> : <Play size={13} />}
                   {isRunning ? "Stop Timer" : "Start Timer"}
                 </button>
               </div>
               
               {/* Description Input */}
               <input
                 type="text"
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 disabled={isRunning}
                 placeholder="What are you working on? (Optional)"
                 className="w-full border border-[rgba(26,26,26,0.15)] px-4 py-2.5 text-[13px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a] placeholder-[rgba(26,26,26,0.4)] transition-colors disabled:opacity-50 disabled:bg-[rgba(26,26,26,0.02)]"
                 style={{ fontFamily: "'Inter', sans-serif" }}
               />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-4">
          <div className="bg-white border border-[rgba(26,26,26,0.1)] p-6">
            <p
              className="text-[10px] font-semibold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Billable Hours
            </p>
            <div className="flex items-baseline gap-1">
              <span
                className="text-[36px] text-[#1a1a1a]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                28.4
              </span>
              <span
                className="text-[14px] text-[rgba(26,26,26,0.4)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                h
              </span>
            </div>
          </div>
          <div className="bg-white border border-[rgba(26,26,26,0.1)] p-6">
            <p
              className="text-[10px] font-semibold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Estimated Billing
            </p>
            <div className="flex items-baseline gap-2">
              <span
                className="text-[32px] text-[#1a1a1a]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                ₱142,000
              </span>
              <span
                className="text-[12px] font-semibold text-[#15803d] flex items-center gap-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <TrendingUp size={11} /> +12%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Time Entries Table */}
      <div>
        <div className="flex items-end justify-between mb-6">
          <h2
            className="text-[24px] text-[#1a1a1a]"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Recent Time Entries
          </h2>
          <button
            className="text-[11px] font-medium text-[rgba(26,26,26,0.5)] hover:text-[#1a1a1a] transition-colors uppercase tracking-[1px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View Full Log
          </button>
        </div>

        <div className="overflow-x-auto"><div className="bg-white border border-[rgba(26,26,26,0.1)] shadow-sm min-w-[680px]">
          {/* Header */}
          <div className="grid grid-cols-[120px_1fr_2fr_80px_100px_60px] border-b border-[rgba(26,26,26,0.08)] px-6 py-4">
            {[
              "Date",
              "Matter / Client",
              "Description",
              "Duration",
              "Amount",
              "Action",
            ].map((h) => (
              <span
                key={h}
                className="text-[10px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {timeEntries.map((entry) => (
            <div
              key={entry.id}
              className="grid grid-cols-[120px_1fr_2fr_80px_100px_60px] border-b border-[rgba(26,26,26,0.05)] px-6 py-5 hover:bg-[rgba(26,26,26,0.015)] transition-colors items-center"
            >
              <span
                className="text-[13px] text-[rgba(26,26,26,0.6)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {entry.date}
              </span>
              <div>
                <p
                  className="text-[14px] font-medium text-[#1a1a1a]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {entry.matter}
                </p>
                <p
                  className="text-[10px] tracking-[0.5px] text-[rgba(26,26,26,0.4)] mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {entry.type}
                </p>
              </div>
              <span
                className="text-[13px] text-[rgba(26,26,26,0.55)] pr-4 truncate"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {entry.description}
              </span>
              <span
                className="text-[14px] font-medium text-[#1a1a1a]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {entry.duration}
              </span>
              <span
                className="text-[14px] font-medium text-[#1a1a1a]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {entry.amount}
              </span>
              <button className="text-[rgba(26,26,26,0.35)] hover:text-[#1a1a1a] transition-colors">
                <MoreHorizontal size={16} />
              </button>
            </div>
          ))}
        </div></div>
      </div>
    </div>
  );
}
