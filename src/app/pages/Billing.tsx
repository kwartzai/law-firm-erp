import { useState } from "react";
import { TrendingUp, X, FileText } from "lucide-react";

const invoices = [
  {
    id: "#INV-2024-001",
    client: "Santos Realty Holdings",
    sub: "Land Use Litigation",
    date: "12 Mar 2026",
    amount: "₱712,400.00",
    status: "SENT",
    statusType: "sent",
  },
  {
    id: "#INV-2024-002",
    client: "Elena Rodriguez-Lim",
    sub: "Property Closing",
    date: "10 Mar 2026",
    amount: "₱186,250.00",
    status: "PAID",
    statusType: "paid",
  },
  {
    id: "#INV-2024-003",
    client: "Isla Tech Solutions",
    sub: "IP Consultation",
    date: "28 Feb 2026",
    amount: "₱508,900.00",
    status: "OVERDUE",
    statusType: "overdue",
  },
  {
    id: "#INV-2024-004",
    client: "Amihan Media Group",
    sub: "Contract Negotiation",
    date: "25 Feb 2026",
    amount: "₱855,000.00",
    status: "PAID",
    statusType: "paid",
  },
  {
    id: "#INV-2024-005",
    client: "North Harbor Logistics",
    sub: "Advisory Services",
    date: "20 Feb 2026",
    amount: "₱122,100.00",
    status: "SENT",
    statusType: "sent",
  },
  {
    id: "#INV-2024-006",
    client: "Villanueva Holdings",
    sub: "Corporate Restructuring",
    date: "15 Feb 2026",
    amount: "₱1,225,500.00",
    status: "PAID",
    statusType: "paid",
  },
  {
    id: "#INV-2024-007",
    client: "Nexus Holdings",
    sub: "Merger Advisory",
    date: "8 Feb 2026",
    amount: "₱918,750.00",
    status: "OVERDUE",
    statusType: "overdue",
  },
];

function StatusBadge({ status, type }: { status: string; type: string }) {
  const styles: Record<string, string> = {
    sent: "bg-[#f4f4f5] border border-[#e4e4e7] text-[#71717a]",
    paid: "bg-[#1a1a1a] border border-[#1a1a1a] text-white",
    overdue: "bg-[#fef2f2] border border-[#fee2e2] text-[#dc2626]",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-[10px] font-bold tracking-[1px] uppercase ${styles[type]}`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {status}
    </span>
  );
}

export function Billing() {
  const [showNewInvoice, setShowNewInvoice] = useState(false);
  const [newInvoice, setNewInvoice] = useState({
    client: "",
    matter: "",
    amount: "",
  });
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? invoices
      : invoices.filter((i) => i.statusType === activeTab);

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
            Billing
          </h1>
          <p
            className="text-[14px] text-[rgba(26,26,26,0.55)] max-w-[360px] leading-snug"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Manage invoices and track peso-denominated payments.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => setShowNewInvoice(true)}
            className="bg-[#1a1a1a] text-white px-6 py-2.5 text-[12px] font-semibold tracking-[0.5px] uppercase hover:bg-[#333] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            New Invoice
          </button>
          <button
            className="border border-[#1a1a1a] text-[#1a1a1a] px-6 py-2.5 text-[12px] font-semibold tracking-[0.5px] uppercase hover:bg-[rgba(26,26,26,0.04)] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border border-[rgba(26,26,26,0.1)] shadow-sm grid grid-cols-1 sm:grid-cols-3 mb-10">
        {[
          {
            label: "Outstanding",
            value: "₱2,842,850.00",
            trend: "+12.4% from last month",
          },
          {
            label: "Total Billed",
            value: "₱8,128,400.00",
            trend: "+8.1% from last month",
          },
          {
            label: "Payments Received",
            value: "₱5,285,550.00",
            trend: "+5.2% from last month",
          },
        ].map((s, i) => (
          <div
            key={s.label}
            className={`px-6 sm:px-10 py-8 sm:py-10 ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-[rgba(26,26,26,0.08)]" : ""}`}
          >
            <p
              className="text-[11px] tracking-[2.4px] uppercase text-[#666] mb-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {s.label}
            </p>
            <p
              className="text-[34px] text-[#111] mb-3"
              style={{ fontFamily: "'Lora', serif" }}
            >
              {s.value}
            </p>
            <div className="flex items-center gap-2">
              <TrendingUp size={11} className="text-[#71717a]" />
              <span
                className="text-[12px] font-medium text-[#71717a]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Invoice Table */}
      <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#1a1a1a] pb-4 mb-0 gap-3">
          <h2
            className="text-[24px] text-[#111]"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Recent Invoices
          </h2>
          <div className="flex items-center gap-4 overflow-x-auto flex-nowrap pb-1 sm:pb-0">
            {["all", "sent", "paid", "overdue"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`text-[12px] font-medium capitalize transition-colors ${activeTab === t ? "text-[#1a1a1a]" : "text-[rgba(26,26,26,0.4)] hover:text-[#1a1a1a]"}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t === "all"
                  ? "View All Invoices"
                  : t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto"><div className="bg-white border border-[rgba(26,26,26,0.1)] border-t-0 shadow-sm min-w-[600px]">
          {/* Header Row */}
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr_120px] border-b border-[rgba(26,26,26,0.08)] px-6 py-4">
            {["Invoice ID", "Client", "Issue Date", "Amount", "Status"].map(
              (h, i) => (
                <span
                  key={h}
                  className={`text-[11px] font-semibold tracking-[1.2px] uppercase text-[#666] ${i === 4 ? "text-right" : ""}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {h}
                </span>
              ),
            )}
          </div>

          {filtered.map((inv) => (
            <div
              key={inv.id}
              className="grid grid-cols-[1fr_2fr_1fr_1fr_120px] border-b border-[#f4f4f5] px-6 py-5 hover:bg-[rgba(26,26,26,0.015)] cursor-pointer transition-colors items-center"
            >
              <span
                className="text-[15px] font-medium text-[#111]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {inv.id}
              </span>
              <div>
                <p
                  className="text-[16px] text-[#0f172a]"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {inv.client}
                </p>
                <p
                  className="text-[12px] text-[#666] mt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {inv.sub}
                </p>
              </div>
              <span
                className="text-[14px] text-[#666]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {inv.date}
              </span>
              <span
                className="text-[15px] font-medium text-[#0f172a]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {inv.amount}
              </span>
              <div className="flex justify-end">
                <StatusBadge status={inv.status} type={inv.statusType} />
              </div>
            </div>
          ))}
        </div></div>
      </div>

      {/* New Invoice Modal */}
      {showNewInvoice && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
          onClick={() => setShowNewInvoice(false)}
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
                New Invoice
              </h2>
              <button
                onClick={() => setShowNewInvoice(false)}
                className="text-[rgba(26,26,26,0.4)] hover:text-[#1a1a1a]"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Client Name",
                  field: "client",
                  placeholder: "e.g. Santos Realty Holdings",
                },
                {
                  label: "Matter / Service",
                  field: "matter",
                  placeholder: "e.g. Land Use Litigation",
                },
                {
                  label: "Amount (₱)",
                  field: "amount",
                  placeholder: "e.g. 712,400.00",
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
                    value={(newInvoice as any)[field]}
                    onChange={(e) =>
                      setNewInvoice({ ...newInvoice, [field]: e.target.value })
                    }
                    className="w-full border border-[rgba(26,26,26,0.15)] px-4 py-3 text-[14px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowNewInvoice(false)}
                className="flex-1 border border-[rgba(26,26,26,0.2)] py-3 text-[12px] font-semibold tracking-[0.5px] text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowNewInvoice(false)}
                className="flex-1 bg-[#1a1a1a] text-white py-3 text-[12px] font-semibold tracking-[0.5px] hover:bg-[#333] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Create Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
