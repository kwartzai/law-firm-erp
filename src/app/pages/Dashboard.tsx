import { useNavigate } from "react-router";
import { TrendingUp, Minus, AlertCircle, Calendar } from "lucide-react";

const stats = [
  {
    label: "Active Clients",
    value: "124",
    trend: "+12% THIS MONTH",
    trendUp: true,
  },
  {
    label: "Open Cases",
    value: "86",
    trend: "STABLE",
    trendUp: null,
  },
  {
    label: "Billable Hours",
    value: "312.5",
    trend: "+18.2% VS LAST MONTH",
    trendUp: true,
  },
];

const recentCases = [
  {
    name: "Estate Settlement of F. Dela Cruz",
    client: "Dela Cruz Family",
    status: "ACTIVE",
    statusType: "active",
    activity: "2h ago",
  },
  {
    name: "Labor Compliance Review",
    client: "Maharlika Foods Corp.",
    status: "REVIEW",
    statusType: "review",
    activity: "Yesterday",
  },
  {
    name: "Trademark Opposition - Sampaguita",
    client: "Sampaguita Beauty, Inc.",
    status: "DISCOVERY",
    statusType: "discovery",
    activity: "Mar 14",
  },
  {
    name: "Land Titling Petition",
    client: "Laguna Prime Holdings",
    status: "ON-HOLD",
    statusType: "onhold",
    activity: "Mar 12",
  },
];

const deadlines = [
  {
    tag: "URGENT",
    tagColor: "#dc2626",
    title: "Petition Filing: Dela Cruz Estate",
    location: "RTC Makati, Branch 148",
    time: "TOMORROW, 10:00 AM",
    borderColor: "#dc2626",
  },
  {
    tag: "SCHEDULED",
    tagColor: "#1a1a1a",
    title: "Mandatory Conference: Maharlika Foods",
    location: "NLRC NCR, Quezon City",
    time: "WEDNESDAY, 2:00 PM",
    borderColor: "rgba(26,26,26,0.15)",
  },
  {
    tag: "INTERNAL",
    tagColor: "#1a1a1a",
    title: "Contract Review",
    location: "BGC Supply Agreement, Taguig",
    time: "FRIDAY, EOD",
    borderColor: "rgba(26,26,26,0.15)",
  },
];

function StatusBadge({ status, type }: { status: string; type: string }) {
  if (type === "active") {
    return (
      <span className="inline-flex items-center px-2 py-1 bg-[#1a1a1a] text-white text-[10px] font-bold tracking-[-0.3px] uppercase">
        {status}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2 py-1 border border-[rgba(26,26,26,0.2)] text-[#1a1a1a] text-[10px] font-bold tracking-[-0.3px] uppercase">
      {status}
    </span>
  );
}

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
      {/* Page Header */}
      <div className="mb-8">

        <p
          className="text-[11px] tracking-[2.4px] uppercase text-[rgba(26,26,26,0.5)] font-semibold mb-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Overview
        </p>
        <h1
          className="text-[32px] sm:text-[48px] text-[#1a1a1a]"
          style={{
            fontFamily: "'Lora', serif",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          Bonifacio & Jacinto Law
        </h1>
      </div>

      {/* Stats Cards */}
      <div className="bg-white border border-[rgba(26,26,26,0.1)] shadow-sm grid grid-cols-1 sm:grid-cols-3 mb-10">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-6 sm:px-10 py-8 sm:py-10 flex flex-col justify-between ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-[rgba(26,26,26,0.1)]" : ""}`}
          >
            <div>
              <p
                className="text-[14px] text-[rgba(26,26,26,0.6)] mb-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {stat.label}
              </p>
              <p
                className="text-[36px] text-[#1a1a1a]"
                style={{ fontFamily: "'Lora', serif", lineHeight: 1.1 }}
              >
                {stat.value}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-8">
              {stat.trendUp === true && (
                <>
                  <TrendingUp size={11} className="text-[#15803d]" />
                  <span
                    className="text-[11px] tracking-[0.6px] font-semibold text-[#15803d]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.trend}
                  </span>
                </>
              )}
              {stat.trendUp === null && (
                <>
                  <Minus size={11} className="text-[rgba(26,26,26,0.4)]" />
                  <span
                    className="text-[11px] tracking-[0.6px] font-semibold text-[rgba(26,26,26,0.4)]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.trend}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
        {/* Recent Cases */}
        <div>
          <div className="flex items-end justify-between mb-8">
            <h2
              className="text-[24px] text-[#0f172a]"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Recent Cases
            </h2>
            <button
              onClick={() => navigate("/cases")}
              className="text-[11px] font-bold tracking-[1.2px] uppercase text-[#0f172a] border-b border-[#1a1a1a] pb-[2px] hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View All Cases
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto"><div className="min-w-[480px]">
            <div className="border-b border-[rgba(26,26,26,0.1)] pb-px">
              <div className="grid grid-cols-[2fr_1fr_120px_100px] py-3">
                {["Case Name", "Client", "Status", "Activity"].map((h, i) => (
                  <span
                    key={h}
                    className={`text-[10px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] ${i === 3 ? "text-right" : ""}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Table Rows */}
            {recentCases.map((c, i) => (
              <div
                key={c.name}
                className="grid grid-cols-[2fr_1fr_120px_100px] py-5 border-b border-[rgba(26,26,26,0.05)] hover:bg-white hover:shadow-sm transition-all cursor-pointer group"
                onClick={() => navigate("/cases")}
              >
                <span
                  className="text-[16px] font-medium text-[#1a1a1a] group-hover:text-[#0f172a]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {c.name}
                </span>
                <span
                  className="text-[14px] text-[rgba(26,26,26,0.7)] italic"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {c.client}
                </span>
                <div>
                  <StatusBadge status={c.status} type={c.statusType} />
                </div>
                <span
                  className="text-[14px] text-[rgba(26,26,26,0.6)] text-right"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {c.activity}
                </span>
              </div>
            ))}
          </div></div>
        </div>

        {/* Deadlines Sidebar */}
        <div>
          <h2
            className="text-[24px] text-[#0f172a] mb-6"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Deadlines
          </h2>

          <div className="flex flex-col gap-0">
            {deadlines.map((d, i) => (
              <div
                key={d.title}
                className={`border-l-2 pl-4 pb-6 ${i < deadlines.length - 1 ? "mb-0" : ""}`}
                style={{ borderColor: d.borderColor }}
              >
                <div className="flex items-center gap-1 mb-2">
                  {d.tag === "URGENT" && (
                    <AlertCircle size={10} className="text-[#dc2626]" />
                  )}
                  <span
                    className="text-[10px] font-semibold tracking-[1px] uppercase"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color:
                        d.tagColor === "#dc2626"
                          ? "#dc2626"
                          : "rgba(26,26,26,0.5)",
                    }}
                  >
                    {d.tag}
                  </span>
                </div>
                <p
                  className="text-[15px] font-medium text-[#1a1a1a] mb-1 leading-snug"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {d.title}
                </p>
                <p
                  className="text-[12px] text-[rgba(26,26,26,0.55)] mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {d.location}
                </p>
                <p
                  className="text-[10px] font-semibold tracking-[0.8px] uppercase text-[rgba(26,26,26,0.4)]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {d.time}
                </p>
              </div>
            ))}
          </div>

          {/* Calendar CTA */}
          <div className="bg-[#1a1a1a] p-6 mt-2 flex flex-col items-center text-center">
            <Calendar size={24} className="text-white mb-4 opacity-70" />
            <p
              className="text-[14px] text-white leading-snug mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              You have 4 more matters on your docket this week.
            </p>
            <button
              onClick={() => navigate("/calendar")}
              className="border border-white text-white text-[11px] font-semibold tracking-[1.5px] uppercase px-6 py-3 hover:bg-white hover:text-[#1a1a1a] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              View Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
