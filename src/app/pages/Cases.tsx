import { useState } from "react";
import { Plus, ChevronLeft, ChevronRight, ChevronUp, X } from "lucide-react";

const allCases = [
  {
    id: 1,
    name: "Estate of Francisco Dela Cruz",
    sub: "PROBATE • RTC-MKT-2026-0148",
    client: "Lourdes Dela Cruz",
    status: "IN PROGRESS",
    statusType: "inprogress",
    attorney: "Atty. Juan dela Rosa",
    deadline: "Mar 5, 2026",
  },
  {
    id: 2,
    name: "Isla Tech v. Mendoza",
    sub: "IP • IPOPHL-2026-0321",
    client: "Isla Tech Corp.",
    status: "DISCOVERY",
    statusType: "discovery",
    attorney: "Atty. Carla Mendoza",
    deadline: "Mar 8, 2026",
  },
  {
    id: 3,
    name: "Quezon Estate Partition",
    sub: "CIVIL • RTC-QC-2026-0456",
    client: "Rosario Family",
    status: "MEDIATION",
    statusType: "mediation",
    attorney: "Atty. Juan dela Rosa",
    deadline: "Mar 12, 2026",
  },
  {
    id: 4,
    name: "Torres v. North Harbor",
    sub: "LABOR • NLRC-NCR-2026-0193",
    client: "Miguel Torres",
    status: "IN PROGRESS",
    statusType: "inprogress",
    attorney: "Atty. Sofia Cruz",
    deadline: "Mar 15, 2026",
  },
  {
    id: 5,
    name: "Skyline Port Lease Review",
    sub: "CORPORATE • SEC-2026-0774",
    client: "Skyline Port Services",
    status: "DISCOVERY",
    statusType: "discovery",
    attorney: "Atty. Carla Mendoza",
    deadline: "Mar 20, 2026",
  },
  {
    id: 6,
    name: "People v. Thompson",
    sub: "CRIMINAL • RTC-MNL-2026-1120",
    client: "James Thompson",
    status: "TRIAL SET",
    statusType: "trialset",
    attorney: "Atty. Juan dela Rosa",
    deadline: "Apr 2, 2026",
  },
  {
    id: 7,
    name: "Rivera Estate Settlement",
    sub: "PROBATE • RTC-PSG-2026-0088",
    client: "Maria Rivera",
    status: "CLOSED",
    statusType: "closed",
    attorney: "Atty. Sofia Cruz",
    deadline: "—",
  },
  {
    id: 8,
    name: "Nexus Holdings Merger Clearance",
    sub: "CORPORATE • PCC-2026-0411",
    client: "Nexus Holdings",
    status: "CLOSED",
    statusType: "closed",
    attorney: "Atty. Carla Mendoza",
    deadline: "—",
  },
];

const filters = [
  "ALL CASES",
  "IN PROGRESS",
  "DISCOVERY",
  "MEDIATION",
  "CLOSED",
];

function CaseStatusBadge({ status, type }: { status: string; type: string }) {
  const styles: Record<string, string> = {
    inprogress: "bg-[#1a1a1a] text-white",
    discovery: "border border-[rgba(26,26,26,0.2)] text-[#1a1a1a]",
    mediation: "border border-[rgba(26,26,26,0.2)] text-[#1a1a1a]",
    trialset: "border border-[rgba(26,26,26,0.2)] text-[#1a1a1a]",
    closed: "border border-[rgba(26,26,26,0.12)] text-[rgba(26,26,26,0.4)]",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[9px] font-bold tracking-[0.5px] uppercase ${styles[type] || "border border-[rgba(26,26,26,0.2)]"}`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {status}
    </span>
  );
}

export function Cases() {
  const [activeFilter, setActiveFilter] = useState("ALL CASES");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [newCase, setNewCase] = useState({ name: "", client: "", type: "" });

  const filterMap: Record<string, string[]> = {
    "ALL CASES": [],
    "IN PROGRESS": ["inprogress"],
    DISCOVERY: ["discovery"],
    MEDIATION: ["mediation"],
    CLOSED: ["closed"],
  };

  const filtered =
    activeFilter === "ALL CASES"
      ? allCases
      : allCases.filter((c) => filterMap[activeFilter].includes(c.statusType));

  const perPage = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

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
            Cases
          </h1>
          <p
            className="text-[14px] text-[rgba(26,26,26,0.55)] max-w-[380px] leading-snug"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Oversee ongoing RTC, NLRC, IPOPHL, and corporate regulatory matters
            within one unified workspace.
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-2.5 text-[12px] font-semibold tracking-[0.5px] hover:bg-[#333] transition-colors mt-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <Plus size={13} />
          New Case
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6 gap-3">
        <div className="flex items-center gap-1 overflow-x-auto pb-1 flex-nowrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActiveFilter(f);
                setPage(1);
              }}
              className={`px-4 py-2 text-[11px] font-semibold tracking-[0.5px] uppercase transition-colors ${
                activeFilter === f
                  ? "bg-[#1a1a1a] text-white"
                  : "text-[rgba(26,26,26,0.55)] border border-[rgba(26,26,26,0.12)] hover:bg-[rgba(26,26,26,0.04)]"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {f}
            </button>
          ))}
        </div>
        <button
          className="flex items-center gap-1 text-[11px] text-[rgba(26,26,26,0.5)] hover:text-[#1a1a1a] transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          SORT BY <ChevronUp size={12} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mb-8"><div className="bg-white border border-[rgba(26,26,26,0.1)] shadow-sm min-w-[680px]">
        {/* Header */}
        <div className="grid grid-cols-[2fr_1.5fr_130px_1.5fr_130px] border-b border-[rgba(26,26,26,0.08)] px-6 py-4">
          {[
            "Case Name",
            "Client",
            "Status",
            "Assigned To",
            "Next Deadline",
          ].map((h, i) => (
            <span
              key={h}
              className={`text-[10px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] ${i === 4 ? "text-right" : ""}`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {h}
            </span>
          ))}
        </div>

        {paged.map((c) => (
          <div
            key={c.id}
            onClick={() => window.location.href = `/cases/${c.id}`}
            className="grid grid-cols-[2fr_1.5fr_130px_1.5fr_130px] border-b border-[rgba(26,26,26,0.05)] px-6 py-5 hover:bg-[rgba(26,26,26,0.015)] cursor-pointer transition-colors"
          >
            <div>
              <p
                className="text-[16px] font-medium text-[#1a1a1a]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {c.name}
              </p>
              <p
                className="text-[10px] tracking-[0.5px] text-[rgba(26,26,26,0.4)] mt-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {c.sub}
              </p>
            </div>
            <span
              className="text-[14px] text-[rgba(26,26,26,0.65)] self-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {c.client}
            </span>
            <div className="self-center">
              <CaseStatusBadge status={c.status} type={c.statusType} />
            </div>
            <span
              className="text-[13px] text-[rgba(26,26,26,0.65)] self-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {c.attorney}
            </span>
            <span
              className="text-[13px] font-medium text-[#1a1a1a] text-right self-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {c.deadline}
            </span>
          </div>
        ))}
      </div></div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="w-9 h-9 flex items-center justify-center border border-[rgba(26,26,26,0.12)] text-[#1a1a1a] disabled:opacity-30 hover:bg-[rgba(26,26,26,0.04)] transition-colors"
        >
          <ChevronLeft size={14} />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`w-9 h-9 text-[12px] font-medium border transition-colors ${
              p === page
                ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                : "border-[rgba(26,26,26,0.12)] text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)]"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {String(p).padStart(2, "0")}
          </button>
        ))}
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="w-9 h-9 flex items-center justify-center border border-[rgba(26,26,26,0.12)] text-[#1a1a1a] disabled:opacity-30 hover:bg-[rgba(26,26,26,0.04)] transition-colors"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      {/* New Case Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
          onClick={() => setShowModal(false)}
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
                New Case
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-[rgba(26,26,26,0.4)] hover:text-[#1a1a1a]"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Case Name",
                  field: "name",
                  placeholder: "e.g. Estate of Francisco Dela Cruz",
                },
                {
                  label: "Client Name",
                  field: "client",
                  placeholder: "e.g. Lourdes Dela Cruz",
                },
                {
                  label: "Case Type",
                  field: "type",
                  placeholder: "e.g. Probate, Labor, Corporate, IP...",
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
                    value={(newCase as any)[field]}
                    onChange={(e) =>
                      setNewCase({ ...newCase, [field]: e.target.value })
                    }
                    className="w-full border border-[rgba(26,26,26,0.15)] px-4 py-3 text-[14px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-[rgba(26,26,26,0.2)] py-3 text-[12px] font-semibold tracking-[0.5px] text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-[#1a1a1a] text-white py-3 text-[12px] font-semibold tracking-[0.5px] hover:bg-[#333] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Create Case
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
