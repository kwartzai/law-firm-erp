import { useParams, useNavigate } from "react-router";
import { ChevronLeft, FileText, Clock, FileWarning, DollarSign, Calendar as CalendarIcon, Scale, Upload } from "lucide-react";

export function CaseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for a single case
  const caseData = {
    id: id,
    name: "Estate of Francisco Dela Cruz",
    sub: "PROBATE • RTC-MKT-2026-0148",
    client: "Lourdes Dela Cruz",
    status: "IN PROGRESS",
    statusType: "inprogress",
    attorney: "Atty. Juan dela Rosa",
    deadline: "Mar 5, 2026",
    description: "Extrajudicial settlement of estate and payment of estate tax amnesty. Property located in San Lorenzo Village, Makati.",
    totalBilled: "₱125,000",
    hoursLogged: "14.5"
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
      <button 
        onClick={() => navigate("/cases")}
        className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.5px] uppercase text-[rgba(26,26,26,0.5)] hover:text-[#1a1a1a] transition-colors mb-6"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <ChevronLeft size={14} /> Back to Cases
      </button>

      {/* Header Profile */}
      <div className="bg-white border border-[rgba(26,26,26,0.1)] p-8 mb-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
            <h1 className="text-[32px] sm:text-[40px] text-[#1a1a1a] mb-2" style={{ fontFamily: "'Lora', serif", fontWeight: 700, lineHeight: 1 }}>
              {caseData.name}
            </h1>
            <p className="text-[14px] text-[rgba(26,26,26,0.55)] mb-4 tracking-[0.3px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              {caseData.sub}
            </p>
            <div className="flex items-center gap-4">
               <span className="inline-flex items-center px-2.5 py-1 text-[9px] font-bold tracking-[0.5px] uppercase bg-[#1a1a1a] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                {caseData.status}
              </span>
              <span className="text-[13px] text-[rgba(26,26,26,0.65)]" style={{ fontFamily: "'Inter', sans-serif" }}>
                 Client: <span className="font-medium text-[#1a1a1a] cursor-pointer hover:underline" onClick={() => navigate('/clients/1')}>{caseData.client}</span>
              </span>
            </div>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-8 border-l border-[rgba(26,26,26,0.1)] pl-8 h-full">
            <div>
              <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Assigned</p>
              <p className="text-[15px] font-medium text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>{caseData.attorney}</p>
            </div>
             <div>
              <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-2 flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}><FileWarning size={12}/> Next Deadline</p>
              <p className="text-[15px] font-medium text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>{caseData.deadline}</p>
            </div>
        </div>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Left/Main Column */}
           <div className="lg:col-span-2 flex flex-col gap-8">
               
               {/* Description */}
               <div className="bg-white border border-[rgba(26,26,26,0.1)] p-8">
                  <h2 className="text-[18px] text-[#1a1a1a] mb-4" style={{ fontFamily: "'Lora', serif" }}>Case Description</h2>
                  <p className="text-[14px] leading-relaxed text-[rgba(26,26,26,0.7)]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {caseData.description}
                  </p>
               </div>

               {/* Associated Documents */}
               <div className="bg-white border border-[rgba(26,26,26,0.1)]">
                   <div className="border-b border-[rgba(26,26,26,0.08)] px-6 py-5 flex justify-between items-center">
                       <h2 className="text-[18px] text-[#1a1a1a]" style={{ fontFamily: "'Lora', serif" }}>Recent Documents</h2>
                       <div className="flex items-center gap-4">
                           <button className="flex items-center gap-1.5 text-[11px] font-medium text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)] border border-[rgba(26,26,26,0.2)] px-3 py-1.5 transition-colors uppercase tracking-[0.5px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                               <Upload size={12} /> Upload
                           </button>
                           <button className="text-[11px] font-medium text-[rgba(26,26,26,0.5)] hover:text-[#1a1a1a] transition-colors uppercase tracking-[1px]" style={{ fontFamily: "'Inter', sans-serif" }} onClick={() => navigate('/documents')}>View All</button>
                       </div>
                   </div>
                   <div className="divide-y divide-[rgba(26,26,26,0.05)]">
                       {[
                           { name: "Draft_Petition_Estate.docx", type: "PLEADING", date: "Mar 12, 2026" },
                           { name: "Tax_Amnesty_Computation.xlsx", type: "COMPUTATION", date: "Mar 10, 2026" }
                       ].map((doc, i) => (
                           <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-[rgba(26,26,26,0.015)] transition-colors cursor-pointer">
                               <div className="flex items-center gap-3">
                                   <FileText size={15} className="text-[rgba(26,26,26,0.4)]" />
                                   <div>
                                       <p className="text-[14px] font-medium text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>{doc.name}</p>
                                       <p className="text-[10px] tracking-[0.5px] uppercase text-[rgba(26,26,26,0.4)] mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{doc.type}</p>
                                   </div>
                               </div>
                               <span className="text-[12px] text-[rgba(26,26,26,0.5)]" style={{ fontFamily: "'Inter', sans-serif" }}>{doc.date}</span>
                           </div>
                       ))}
                   </div>
               </div>
           </div>

           {/* Right Column */}
           <div className="flex flex-col gap-8">
               {/* Financials/Time */}
                <div className="bg-white border border-[rgba(26,26,26,0.1)] p-6">
                    <h3 className="text-[11px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>Time & Billing</h3>
                    <div className="flex flex-col gap-5">
                       <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2 text-[13px] text-[rgba(26,26,26,0.6)]" style={{ fontFamily: "'Inter', sans-serif" }}>
                               <Clock size={14} /> Hours Logged
                           </div>
                           <span className="text-[15px] font-medium text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>{caseData.hoursLogged}h</span>
                       </div>
                       <div className="flex items-center justify-between">
                           <div className="flex items-center gap-2 text-[13px] text-[rgba(26,26,26,0.6)]" style={{ fontFamily: "'Inter', sans-serif" }}>
                               <DollarSign size={14} /> Unbilled Amount
                           </div>
                           <span className="text-[15px] font-medium text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>{caseData.totalBilled}</span>
                       </div>
                    </div>
                </div>

                {/* Approaching Events */}
                <div className="bg-white border border-[rgba(26,26,26,0.1)] p-6">
                    <h3 className="text-[11px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>Upcoming</h3>
                    <div className="flex gap-3">
                        <div className="mt-0.5">
                            <CalendarIcon size={14} className="text-[#1a1a1a]" />
                        </div>
                        <div>
                            <p className="text-[13px] font-medium text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>Estate Tax Deadline</p>
                            <p className="text-[12px] text-[rgba(26,26,26,0.55)] mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>{caseData.deadline}</p>
                        </div>
                    </div>
                </div>
           </div>
       </div>
    </div>
  );
}
