import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, User, AlertCircle, FileText, Clock } from 'lucide-react';

const caseData = {
  '1': {
    name: 'De la Cruz v. Manila Enterprises',
    caseNumber: 'CV-2024-001234',
    client: 'Roberto de la Cruz',
    practiceArea: 'Civil Litigation',
    status: 'Discovery',
    priority: 'High',
    assignedTo: 'Atty. Juan dela Rosa',
    openDate: 'Jan 20, 2024',
    description: 'Civil litigation case involving breach of contract and damages claim. Client is seeking ₱20,000,000 in damages for alleged breach of service agreement and business losses.',
    court: 'Regional Trial Court, Makati City',
    judge: 'Hon. Patricia Villanueva',
    opposingCounsel: 'Cruz & Associates Law Firm',
    totalHours: 45.5,
    totalBilled: '₱728,000',
    timeline: [
      { date: 'Mar 5, 2026', title: 'Motion to Dismiss Deadline', type: 'deadline' },
      { date: 'Mar 1, 2026', title: 'Discovery meeting completed', type: 'event' },
      { date: 'Feb 15, 2026', title: 'Initial discovery request filed', type: 'filing' },
      { date: 'Jan 20, 2024', title: 'Case opened', type: 'event' },
    ],
    documents: [
      { id: '1', name: 'Complaint.pdf', type: 'Pleading', date: 'Jan 20, 2024', size: '245 KB' },
      { id: '2', name: 'Motion to Dismiss.pdf', type: 'Motion', date: 'Feb 1, 2024', size: '180 KB' },
      { id: '3', name: 'Discovery Request.pdf', type: 'Discovery', date: 'Feb 15, 2026', size: '156 KB' },
      { id: '4', name: 'Retainer Agreement.pdf', type: 'Contract', date: 'Jan 20, 2024', size: '89 KB' },
    ],
    notes: [
      { date: 'Mar 1, 2026', author: 'Atty. Juan dela Rosa', content: 'Met with client to discuss discovery strategy. Client provided additional documents including business records.' },
      { date: 'Feb 28, 2026', author: 'Atty. Juan dela Rosa', content: 'Prepared motion to dismiss. Waiting for client review and signature.' },
    ],
  },
};

export function CaseDetail() {
  const { id } = useParams();
  const case_ = caseData[id as keyof typeof caseData] || caseData['1'];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/cases" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl text-slate-900">{case_.name}</h1>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                case_.priority === 'High'
                  ? 'bg-red-50 text-red-700'
                  : case_.priority === 'Medium'
                  ? 'bg-yellow-50 text-yellow-700'
                  : 'bg-slate-50 text-slate-700'
              }`}
            >
              {case_.priority} Priority
            </span>
          </div>
          <p className="text-slate-600">{case_.caseNumber}</p>
        </div>
        <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
          Edit Case
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Case Overview */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-lg text-slate-900 mb-4">Case Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-sm text-slate-600">Client</div>
                <Link to="/clients/1" className="text-blue-600 hover:text-blue-700">
                  {case_.client}
                </Link>
              </div>
              <div>
                <div className="text-sm text-slate-600">Practice Area</div>
                <div className="text-slate-900">{case_.practiceArea}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Status</div>
                <span className="inline-block px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">
                  {case_.status}
                </span>
              </div>
              <div>
                <div className="text-sm text-slate-600">Assigned To</div>
                <div className="text-slate-900">{case_.assignedTo}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Court</div>
                <div className="text-slate-900">{case_.court}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Judge</div>
                <div className="text-slate-900">{case_.judge}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Opposing Counsel</div>
                <div className="text-slate-900">{case_.opposingCounsel}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Opened</div>
                <div className="text-slate-900">{case_.openDate}</div>
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-2">Description</div>
              <p className="text-slate-900">{case_.description}</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-lg text-slate-900 mb-4">Case Timeline</h2>
            <div className="space-y-4">
              {case_.timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        item.type === 'deadline' ? 'bg-red-500' : 'bg-blue-500'
                      }`}
                    />
                    {index < case_.timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-200 mt-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">{item.date}</span>
                      {item.type === 'deadline' && (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <div className="mt-1 text-slate-900">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white border border-slate-200 rounded-lg">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-lg text-slate-900">Documents</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Upload Document
              </button>
            </div>
            <div className="divide-y divide-slate-200">
              {case_.documents.map((doc) => (
                <div key={doc.id} className="p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <div>
                        <div className="text-slate-900">{doc.name}</div>
                        <div className="text-sm text-slate-600">
                          {doc.type} • {doc.date} • {doc.size}
                        </div>
                      </div>
                    </div>
                    <button className="text-sm text-blue-600 hover:text-blue-700">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white border border-slate-200 rounded-lg">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-lg text-slate-900">Case Notes</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Add Note
              </button>
            </div>
            <div className="p-6 space-y-4">
              {case_.notes.map((note, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4">
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                    <span>{note.date}</span>
                    <span>•</span>
                    <span>{note.author}</span>
                  </div>
                  <p className="text-slate-900">{note.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Time & Billing */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-lg text-slate-900 mb-4">Time & Billing</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                  <Clock className="w-4 h-4" />
                  Total Hours
                </div>
                <div className="text-2xl text-slate-900">{case_.totalHours}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Total Billed</div>
                <div className="text-2xl text-slate-900">{case_.totalBilled}</div>
              </div>
            </div>
            <Link
              to="/time-tracking"
              className="mt-4 block w-full px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Log Time
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-lg text-slate-900 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <Calendar className="w-4 h-4 text-slate-600" />
                <span className="text-slate-900">Schedule Event</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <FileText className="w-4 h-4 text-slate-600" />
                <span className="text-slate-900">Generate Report</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <User className="w-4 h-4 text-slate-600" />
                <span className="text-slate-900">View Client</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}