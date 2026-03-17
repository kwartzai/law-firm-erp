import { useState } from "react";
import {
  Download,
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import lawyerProfile from "../../assets/lawyer.png";

const clients = [
  {
    id: 1,
    initials: "MS",
    name: "Maria Angelica Santos",
    company: "Santos Realty Holdings",
    activeCases: 3,
    email: "m.santos@santosrealty.com.ph",
  },
  {
    id: 2,
    initials: "EV",
    name: "Eduardo Villanueva",
    company: "Villanueva Transport Corp.",
    activeCases: 1,
    email: "e.villanueva@vtc.com.ph",
  },
  {
    id: 3,
    initials: "MT",
    name: "Miguel Tan",
    company: "Tan Agro-Industrial",
    activeCases: 4,
    email: "m.tan@tanagro.ph",
  },
  {
    id: 4,
    initials: "JR",
    name: "Joanna Reyes",
    company: "Reyes Design Studio",
    activeCases: 2,
    email: "j.reyes@reyesdesign.ph",
  },
  {
    id: 5,
    initials: "SV",
    name: "Sofia Villamor",
    company: "Villamor Logistics",
    activeCases: 5,
    email: "s.villamor@villamorlogistics.ph",
  },
  {
    id: 6,
    initials: "OA",
    name: "Oliver Aquino",
    company: "Aquino Manufacturing Corp.",
    activeCases: 2,
    email: "o.aquino@aquino-mfg.ph",
  },
  {
    id: 7,
    initials: "CR",
    name: "Catherine Ramos",
    company: "Ramos & Partners Holdings",
    activeCases: 3,
    email: "c.ramos@ramospartners.ph",
  },
  {
    id: 8,
    initials: "DP",
    name: "Daniel Pascual",
    company: "Pascual Retail Group",
    activeCases: 1,
    email: "d.pascual@prg.ph",
  },
];

export function Clients() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newClient, setNewClient] = useState({
    name: "",
    company: "",
    email: "",
  });

  const perPage = 6;
  const filtered = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()),
  );
  const totalPages = Math.ceil(filtered.length / perPage);
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
            Clients
          </h1>
          <p
            className="text-[14px] text-[rgba(26,26,26,0.55)] max-w-[500px] leading-snug"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Manage client relationships across Metro Manila, Cebu, and Davao
            engagements.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <button
            className="flex items-center gap-2 border border-[rgba(26,26,26,0.2)] px-5 py-2.5 text-[12px] font-semibold tracking-[0.5px] text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Download size={13} />
            Export
          </button>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-2.5 text-[12px] font-semibold tracking-[0.5px] hover:bg-[#333] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Plus size={13} />
            Add New Client
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 relative max-w-[320px]">
        <Search
          size={13}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[rgba(26,26,26,0.35)]"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Quick search..."
          className="w-full pl-9 pr-4 py-2 bg-white border border-[rgba(26,26,26,0.12)] text-[13px] text-[#1a1a1a] placeholder-[rgba(26,26,26,0.35)] outline-none"
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto"><div className="bg-white border border-[rgba(26,26,26,0.1)] shadow-sm min-w-[580px]">
        {/* Header */}
        <div className="grid grid-cols-[2fr_2fr_100px_2fr] border-b border-[rgba(26,26,26,0.08)] px-6 py-4">
          {["Client Name", "Company", "Active Cases", "Contact Info"].map(
            (h) => (
              <span
                key={h}
                className="text-[10px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {h}
              </span>
            ),
          )}
        </div>

        {paged.map((client) => (
          <div
            key={client.id}
            onClick={() => window.location.href = `/clients/${client.id}`}
            className="grid grid-cols-[2fr_2fr_100px_2fr] border-b border-[rgba(26,26,26,0.05)] px-6 py-4 hover:bg-[rgba(26,26,26,0.015)] cursor-pointer transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 overflow-hidden bg-[rgba(26,26,26,0.08)] shrink-0">
                <img
                  src={lawyerProfile}
                  alt={`${client.name} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-[15px] font-medium text-[#1a1a1a]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {client.name}
              </span>
            </div>
            <span
              className="text-[14px] text-[rgba(26,26,26,0.7)] self-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {client.company}
            </span>
            <div className="self-center">
              <span
                className="inline-flex w-7 h-7 items-center justify-center bg-[rgba(26,26,26,0.06)] text-[13px] font-medium text-[#1a1a1a]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {client.activeCases}
              </span>
            </div>
            <span
              className="text-[13px] text-[rgba(26,26,26,0.55)] self-center group-hover:text-[#1a1a1a] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {client.email}
            </span>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4">
          <span
            className="text-[10px] font-bold tracking-[1.2px] uppercase text-[rgba(26,26,26,0.4)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Showing {Math.min((page - 1) * perPage + 1, filtered.length)}–
            {Math.min(page * perPage, filtered.length)} of {filtered.length}{" "}
            results
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center border border-[rgba(26,26,26,0.12)] text-[#1a1a1a] disabled:opacity-30 hover:bg-[rgba(26,26,26,0.04)] transition-colors"
            >
              <ChevronLeft size={14} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 text-[12px] font-medium border transition-colors ${
                  p === page
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                    : "border-[rgba(26,26,26,0.12)] text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="w-8 h-8 flex items-center justify-center border border-[rgba(26,26,26,0.12)] text-[#1a1a1a] disabled:opacity-30 hover:bg-[rgba(26,26,26,0.04)] transition-colors"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div></div>

      {/* Add Client Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
          onClick={() => setShowAddModal(false)}
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
                Add New Client
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-[rgba(26,26,26,0.4)] hover:text-[#1a1a1a]"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Full Name",
                  field: "name",
                  placeholder: "e.g. Maria Santos",
                },
                {
                  label: "Company",
                  field: "company",
                  placeholder: "e.g. Santos Realty Holdings",
                },
                {
                  label: "Email",
                  field: "email",
                  placeholder: "e.g. m.santos@firmclient.com.ph",
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
                    value={(newClient as any)[field]}
                    onChange={(e) =>
                      setNewClient({ ...newClient, [field]: e.target.value })
                    }
                    className="w-full border border-[rgba(26,26,26,0.15)] px-4 py-3 text-[14px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 border border-[rgba(26,26,26,0.2)] py-3 text-[12px] font-semibold tracking-[0.5px] text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-[#1a1a1a] text-white py-3 text-[12px] font-semibold tracking-[0.5px] hover:bg-[#333] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Add Client
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
