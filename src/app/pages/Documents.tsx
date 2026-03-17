import { useState } from "react";
import {
  FolderOpen,
  FileText,
  Upload,
  FolderPlus,
  MoreHorizontal,
  Filter,
  SlidersHorizontal,
  X,
  Search,
} from "lucide-react";

const categories = [
  { name: "Active Litigation", files: "248 FILES", size: "12.4 GB" },
  { name: "Corporate Records", files: "1,042 FILES", size: "41 GB" },
  { name: "Client Intake", files: "89 FILES", size: "154 MB" },
  { name: "Government Filings", files: "56 FILES", size: "22 MB" },
];

const recentFiles = [
  {
    id: 1,
    name: "SPA_DelaCruz_Family.pdf",
    type: "SPECIAL POWER OF ATTORNEY",
    status: "FINALIZED",
    statusType: "finalized",
    modified: "14 Mar 2026",
  },
  {
    id: 2,
    name: "NLRC_Position_Paper_Torres_v_NorthHarbor.docx",
    type: "LABOR PLEADING",
    status: "REVIEW",
    statusType: "review",
    modified: "12 Mar 2026",
  },
  {
    id: 3,
    name: "RTC_Order_Branch_61_Santos_v_Reyes.pdf",
    type: "COURT ORDER",
    status: "FILED",
    statusType: "filed",
    modified: "11 Mar 2026",
  },
  {
    id: 4,
    name: "SEC_GIS_Maharlika_Holdings.pdf",
    type: "SEC FILING",
    status: "FINALIZED",
    statusType: "finalized",
    modified: "8 Mar 2026",
  },
  {
    id: 5,
    name: "Land_Title_Transfer_Laguna.pdf",
    type: "LRA FILING",
    status: "PENDING",
    statusType: "pending",
    modified: "6 Mar 2026",
  },
  {
    id: 6,
    name: "BIR_2307_Q1_2026.xlsx",
    type: "TAX DOCUMENT",
    status: "REVIEW",
    statusType: "review",
    modified: "5 Mar 2026",
  },
];

function DocStatusBadge({ status, type }: { status: string; type: string }) {
  const styles: Record<string, string> = {
    finalized: "border border-[rgba(26,26,26,0.2)] text-[#1a1a1a]",
    review: "border border-[rgba(26,26,26,0.12)] text-[rgba(26,26,26,0.5)]",
    filed: "border border-[rgba(26,26,26,0.2)] text-[#1a1a1a]",
    pending: "border border-[#f59e0b] text-[#d97706] bg-[#fffbeb]",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-[10px] font-bold tracking-[1px] uppercase ${styles[type] || "border border-[rgba(26,26,26,0.2)]"}`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {status}
    </span>
  );
}

export function Documents() {
  const [search, setSearch] = useState("");
  const [showUpload, setShowUpload] = useState(false);

  const filtered = recentFiles.filter(
    (f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.type.toLowerCase().includes(search.toLowerCase()),
  );

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
            Documents
          </h1>
          <p
            className="text-[14px] text-[rgba(26,26,26,0.55)] max-w-[380px] leading-snug"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Centralized management for pleadings, SEC records, tax documents,
            and firm legal templates.
          </p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <button
            className="flex items-center gap-2 border border-[rgba(26,26,26,0.2)] px-5 py-2.5 text-[12px] font-semibold tracking-[0.5px] uppercase text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <FolderPlus size={13} />
            New Folder
          </button>
          <button
            onClick={() => setShowUpload(true)}
            className="flex items-center gap-2 bg-[#1a1a1a] text-white px-5 py-2.5 text-[12px] font-semibold tracking-[0.5px] uppercase hover:bg-[#333] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <Upload size={13} />
            Upload
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[11px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Categories
          </span>
          <button
            className="text-[11px] font-medium text-[rgba(26,26,26,0.4)] hover:text-[#1a1a1a] uppercase tracking-[1px] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white border border-[rgba(26,26,26,0.1)] p-6 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <FolderOpen
                size={22}
                className="text-[rgba(26,26,26,0.4)] mb-4 group-hover:text-[#1a1a1a] transition-colors"
              />
              <p
                className="text-[15px] font-medium text-[#1a1a1a] mb-2 leading-snug"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {cat.name}
              </p>
              <p
                className="text-[11px] text-[rgba(26,26,26,0.4)] tracking-[0.3px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {cat.files} • {cat.size}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Files */}
      <div>
        <div className="flex items-center justify-between border-b border-[rgba(26,26,26,0.1)] pb-4 mb-0">
          <span
            className="text-[11px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Recent Filings
          </span>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                size={12}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[rgba(26,26,26,0.35)]"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search files..."
                className="pl-8 pr-4 py-1.5 border border-[rgba(26,26,26,0.12)] text-[12px] text-[#1a1a1a] placeholder-[rgba(26,26,26,0.35)] outline-none w-[180px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>
            <button className="flex items-center gap-1 text-[rgba(26,26,26,0.4)] hover:text-[#1a1a1a] transition-colors">
              <Filter size={13} />
            </button>
            <button className="flex items-center gap-1 text-[rgba(26,26,26,0.4)] hover:text-[#1a1a1a] transition-colors">
              <SlidersHorizontal size={13} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto"><div className="bg-white border border-[rgba(26,26,26,0.1)] border-t-0 shadow-sm min-w-[620px]">
          {/* Header */}
          <div className="grid grid-cols-[3fr_1fr_100px_120px_60px] border-b border-[rgba(26,26,26,0.08)] px-6 py-4">
            {[
              "Document Name",
              "Type",
              "Status",
              "Last Modified",
              "Actions",
            ].map((h, i) => (
              <span
                key={h}
                className={`text-[10px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] ${i === 4 ? "text-center" : ""}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {h}
              </span>
            ))}
          </div>

          {filtered.map((file) => (
            <div
              key={file.id}
              className="grid grid-cols-[3fr_1fr_100px_120px_60px] border-b border-[rgba(26,26,26,0.05)] px-6 py-5 hover:bg-[rgba(26,26,26,0.015)] cursor-pointer transition-colors items-center"
            >
              <div className="flex items-center gap-3">
                <FileText
                  size={15}
                  className="text-[rgba(26,26,26,0.35)] shrink-0"
                />
                <span
                  className="text-[14px] font-medium text-[#1a1a1a] truncate"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {file.name}
                </span>
              </div>
              <span
                className="text-[11px] tracking-[0.5px] text-[rgba(26,26,26,0.5)] uppercase"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {file.type}
              </span>
              <div>
                <DocStatusBadge status={file.status} type={file.statusType} />
              </div>
              <span
                className="text-[13px] text-[rgba(26,26,26,0.55)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {file.modified}
              </span>
              <div className="flex justify-center">
                <button className="text-[rgba(26,26,26,0.35)] hover:text-[#1a1a1a] transition-colors">
                  <MoreHorizontal size={16} />
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="py-12 text-center">
              <p
                className="text-[14px] text-[rgba(26,26,26,0.4)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                No files match your search.
              </p>
            </div>
          )}
        </div></div>
      </div>

      {/* Upload Modal */}
      {showUpload && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
          onClick={() => setShowUpload(false)}
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
                Upload Document
              </h2>
              <button
                onClick={() => setShowUpload(false)}
                className="text-[rgba(26,26,26,0.4)] hover:text-[#1a1a1a]"
              >
                <X size={18} />
              </button>
            </div>
            <div className="border-2 border-dashed border-[rgba(26,26,26,0.15)] p-12 text-center mb-6 hover:border-[rgba(26,26,26,0.3)] transition-colors cursor-pointer">
              <Upload
                size={24}
                className="text-[rgba(26,26,26,0.35)] mx-auto mb-3"
              />
              <p
                className="text-[14px] font-medium text-[#1a1a1a] mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Drop files here or click to browse
              </p>
              <p
                className="text-[12px] text-[rgba(26,26,26,0.4)]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                PDF, DOCX, XLSX up to 50MB
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowUpload(false)}
                className="flex-1 border border-[rgba(26,26,26,0.2)] py-3 text-[12px] font-semibold tracking-[0.5px] text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Cancel
              </button>
              <button
                onClick={() => setShowUpload(false)}
                className="flex-1 bg-[#1a1a1a] text-white py-3 text-[12px] font-semibold tracking-[0.5px] hover:bg-[#333] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
