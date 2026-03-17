import { useParams, useNavigate } from "react-router";
import { ChevronLeft, Scale, Users, FileText, Clock, Settings, Building, Send, Upload } from "lucide-react";

export function ClientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for a single client
  const client = {
    id: id,
    name: "Maria Angelica Santos",
    company: "Santos Realty Holdings",
    email: "m.santos@santosrealty.com.ph",
    phone: "+63 917 123 4567",
    address: "Makati City, Metro Manila",
    activeCases: 3,
    totalBilled: "₱1,250,400.00",
    joinDate: "Jan 12, 2024",
    status: "ACTIVE"
  };

  const recentCases = [
    { name: "Estate of Francisco Dela Cruz", sub: "PROBATE • RTC-MKT-2026-0148", status: "IN PROGRESS", type: "inprogress" },
    { name: "Santos Realty Merger", sub: "CORPORATE • SEC-2026-0422", status: "CLOSED", type: "closed" }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
      {/* Back Navigation */}
      <button 
        onClick={() => navigate("/clients")}
        className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.5px] uppercase text-[rgba(26,26,26,0.5)] hover:text-[#1a1a1a] transition-colors mb-6"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <ChevronLeft size={14} /> Back to Clients
      </button>

      {/* Header Profile */}
      <div className="bg-white border border-[rgba(26,26,26,0.1)] p-8 mb-8 flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="flex gap-6 items-start">
          <div className="w-20 h-20 bg-[rgba(26,26,26,0.08)] flex items-center justify-center shrink-0">
             <span className="text-[24px] font-medium" style={{ fontFamily: "'Lora', serif" }}>MS</span>
          </div>
          <div>
            <h1 className="text-[32px] text-[#1a1a1a] mb-2" style={{ fontFamily: "'Lora', serif", fontWeight: 700, lineHeight: 1 }}>
              {client.name}
            </h1>
            <div className="flex items-center gap-2 text-[14px] text-[rgba(26,26,26,0.6)] mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
              <Building size={14} /> {client.company}
            </div>
            <div className="flex gap-4">
               <span className="inline-flex items-center px-2.5 py-1 text-[9px] font-bold tracking-[0.5px] uppercase bg-[#1a1a1a] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                {client.status}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-8 border-l border-[rgba(26,26,26,0.1)] pl-8 h-full">
            <div>
              <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Active Cases</p>
              <p className="text-[24px] text-[#1a1a1a]" style={{ fontFamily: "'Lora', serif" }}>{client.activeCases}</p>
            </div>
             <div>
              <p className="text-[10px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Total Billed</p>
              <p className="text-[24px] text-[#1a1a1a]" style={{ fontFamily: "'Lora', serif" }}>{client.totalBilled}</p>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        
        {/* Left Column */}
        <div className="flex flex-col gap-8">
            {/* Email Contact Interface */}
            <div className="bg-white border border-[rgba(26,26,26,0.1)] p-8">
              <h2 className="text-[20px] text-[#1a1a1a] mb-6" style={{ fontFamily: "'Lora', serif" }}>Contact Client</h2>
              
              <div className="flex flex-col gap-4">
                <div>
                   <label className="block text-[10px] font-bold tracking-[1.2px] uppercase text-[rgba(26,26,26,0.4)] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>To</label>
                   <input type="text" value={client.email} readOnly className="w-full border border-[rgba(26,26,26,0.15)] px-4 py-2.5 text-[13px] text-[#1a1a1a] bg-gray-50 outline-none" style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                 <div>
                   <label className="block text-[10px] font-bold tracking-[1.2px] uppercase text-[rgba(26,26,26,0.4)] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Subject</label>
                   <input type="text" placeholder="e.g. Update on Estate Settlement..." className="w-full border border-[rgba(26,26,26,0.15)] px-4 py-2.5 text-[13px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }} />
                </div>
                <div>
                   <label className="block text-[10px] font-bold tracking-[1.2px] uppercase text-[rgba(26,26,26,0.4)] mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>Message</label>
                   <textarea rows={6} placeholder="Type your message here..." className="w-full border border-[rgba(26,26,26,0.15)] px-4 py-3 text-[13px] text-[#1a1a1a] outline-none focus:border-[#1a1a1a] resize-none" style={{ fontFamily: "'Inter', sans-serif" }}></textarea>
                </div>
                <div className="flex justify-between items-center mt-2">
                   <button className="flex items-center gap-2 border border-[rgba(26,26,26,0.2)] px-4 py-3 text-[12px] font-semibold tracking-[0.5px] uppercase text-[#1a1a1a] hover:bg-[rgba(26,26,26,0.04)] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <Upload size={13} /> Attach File
                   </button>
                   <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 text-[12px] font-semibold tracking-[0.5px] uppercase hover:bg-[#333] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <Send size={13} /> Send Email
                   </button>
                </div>
              </div>
            </div>

            {/* Cases list */}
            <div className="bg-white border border-[rgba(26,26,26,0.1)]">
                 <div className="border-b border-[rgba(26,26,26,0.08)] px-6 py-5">
                    <h2 className="text-[18px] text-[#1a1a1a]" style={{ fontFamily: "'Lora', serif" }}>Associated Cases</h2>
                 </div>
                 <div className="divide-y divide-[rgba(26,26,26,0.05)]">
                    {recentCases.map((c, i) => (
                         <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-[rgba(26,26,26,0.015)] transition-colors cursor-pointer" onClick={() => navigate('/cases/1')}>
                             <div>
                                <p className="text-[15px] font-medium text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>{c.name}</p>
                                <p className="text-[11px] text-[rgba(26,26,26,0.5)] mt-1 tracking-[0.3px]" style={{ fontFamily: "'Inter', sans-serif" }}>{c.sub}</p>
                             </div>
                              <span className={`inline-flex items-center px-2 py-1 text-[9px] font-bold tracking-[0.5px] uppercase ${c.type === 'inprogress' ? 'bg-[#1a1a1a] text-white' : 'border border-[rgba(26,26,26,0.12)] text-[rgba(26,26,26,0.4)]'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                                {c.status}
                              </span>
                         </div>
                    ))}
                 </div>
            </div>
        </div>

        {/* Right Column - Client Info */}
        <div className="flex flex-col gap-6">
           {/* Contact Info */}
            <div className="bg-white border border-[rgba(26,26,26,0.1)] p-6">
                <h3 className="text-[11px] font-bold tracking-[1.5px] uppercase text-[rgba(26,26,26,0.4)] mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>Contact Information</h3>
                
                <div className="flex flex-col gap-4">
                   <div>
                       <p className="text-[10px] font-semibold tracking-[1px] uppercase text-[rgba(26,26,26,0.4)] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Email Address</p>
                       <p className="text-[14px] text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>{client.email}</p>
                   </div>
                    <div>
                       <p className="text-[10px] font-semibold tracking-[1px] uppercase text-[rgba(26,26,26,0.4)] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Phone Number</p>
                       <p className="text-[14px] text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>{client.phone}</p>
                   </div>
                    <div>
                       <p className="text-[10px] font-semibold tracking-[1px] uppercase text-[rgba(26,26,26,0.4)] mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Primary Address</p>
                       <p className="text-[14px] text-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>{client.address}</p>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
