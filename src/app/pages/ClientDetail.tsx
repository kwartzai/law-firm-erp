import { useParams, Link } from 'react-router';
import { ArrowLeft, Mail, Phone, MapPin, Building, Calendar, DollarSign, FileText, Briefcase } from 'lucide-react';

const clientData = {
  '1': {
    name: 'Roberto de la Cruz',
    email: 'roberto.delacruz@email.com',
    phone: '+63 917 123 4567',
    address: '123 Bonifacio St, Makati City, Metro Manila',
    type: 'Individual',
    status: 'Active',
    dateAdded: 'Jan 15, 2024',
    totalBilled: '₱1,845,230',
    outstandingBalance: '₱0',
    cases: [
      { id: '1', name: 'De la Cruz v. Manila Enterprises', status: 'Discovery', startDate: 'Jan 20, 2024' },
      { id: '5', name: 'Property Dispute - BGC Land', status: 'In Progress', startDate: 'Feb 10, 2024' },
    ],
    recentActivity: [
      { date: 'Mar 1, 2026', description: 'Meeting scheduled for discovery phase', type: 'Meeting' },
      { date: 'Feb 28, 2026', description: 'Filed motion to dismiss', type: 'Filing' },
      { date: 'Feb 25, 2026', description: 'Invoice #INV-1234 paid', type: 'Payment' },
    ],
  },
};

export function ClientDetail() {
  const { id } = useParams();
  const client = clientData[id as keyof typeof clientData] || clientData['1'];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/clients" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl text-slate-900">{client.name}</h1>
          <p className="text-slate-600">{client.type} Client</p>
        </div>
        <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
          Edit Client
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-lg text-slate-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <div className="text-sm text-slate-600">Email</div>
                  <div className="text-slate-900">{client.email}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <div className="text-sm text-slate-600">Phone</div>
                  <div className="text-slate-900">{client.phone}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <div className="text-sm text-slate-600">Address</div>
                  <div className="text-slate-900">{client.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-slate-400 mt-0.5" />
                <div>
                  <div className="text-sm text-slate-600">Client Since</div>
                  <div className="text-slate-900">{client.dateAdded}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cases */}
          <div className="bg-white border border-slate-200 rounded-lg">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h2 className="text-lg text-slate-900">Active Cases</h2>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                New Case
              </button>
            </div>
            <div className="divide-y divide-slate-200">
              {client.cases.map((case_) => (
                <Link
                  key={case_.id}
                  to={`/cases/${case_.id}`}
                  className="block p-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-slate-400 mt-0.5" />
                      <div>
                        <h3 className="text-slate-900">{case_.name}</h3>
                        <p className="mt-1 text-sm text-slate-600">Started: {case_.startDate}</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">
                      {case_.status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white border border-slate-200 rounded-lg">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg text-slate-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {client.recentActivity.map((activity, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      {index < client.recentActivity.length - 1 && (
                        <div className="w-0.5 h-full bg-slate-200 mt-1" />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="text-sm text-slate-600">{activity.date}</div>
                      <div className="mt-1 text-slate-900">{activity.description}</div>
                      <div className="mt-1">
                        <span className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded">
                          {activity.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Financial Summary */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-lg text-slate-900 mb-4">Financial Summary</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-sm text-slate-600 mb-1">
                  <DollarSign className="w-4 h-4" />
                  Total Billed
                </div>
                <div className="text-2xl text-slate-900">{client.totalBilled}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600 mb-1">Outstanding Balance</div>
                <div className="text-2xl text-slate-900">{client.outstandingBalance}</div>
              </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Create Invoice
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-slate-200 rounded-lg p-6">
            <h2 className="text-lg text-slate-900 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <FileText className="w-4 h-4 text-slate-600" />
                <span className="text-slate-900">Generate Report</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <Mail className="w-4 h-4 text-slate-600" />
                <span className="text-slate-900">Send Email</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2 text-left border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                <Calendar className="w-4 h-4 text-slate-600" />
                <span className="text-slate-900">Schedule Meeting</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}