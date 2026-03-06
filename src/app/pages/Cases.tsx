import { Link } from 'react-router';
import { Search, Plus, Filter } from 'lucide-react';
import { useState } from 'react';

const casesData = [
  {
    id: '1',
    name: 'De la Cruz v. Manila Enterprises',
    caseNumber: 'CV-2024-001234',
    client: 'Roberto de la Cruz',
    practiceArea: 'Civil Litigation',
    status: 'Discovery',
    priority: 'High',
    assignedTo: 'Atty. Juan dela Rosa',
    openDate: 'Jan 20, 2024',
    nextDeadline: 'Mar 5, 2026',
  },
  {
    id: '2',
    name: 'Estate Settlement - Santos',
    caseNumber: 'SP-2024-005678',
    client: 'Maria Santos',
    practiceArea: 'Estate Settlement',
    status: 'In Progress',
    priority: 'Medium',
    assignedTo: 'Atty. Carla Mendoza',
    openDate: 'Feb 1, 2024',
    nextDeadline: 'Mar 8, 2026',
  },
  {
    id: '3',
    name: 'Labor Case - TechHub PH',
    caseNumber: 'NLRC-2024-002345',
    client: 'TechHub Philippines Inc',
    practiceArea: 'Labor Law',
    status: 'Mediation',
    priority: 'High',
    assignedTo: 'Atty. Juan dela Rosa',
    openDate: 'Jan 10, 2024',
    nextDeadline: 'Mar 4, 2026',
  },
  {
    id: '4',
    name: 'Illegal Dismissal - Reyes',
    caseNumber: 'NLRC-2024-003456',
    client: 'Miguel Reyes',
    practiceArea: 'Labor Law',
    status: 'Pre-trial',
    priority: 'Medium',
    assignedTo: 'Atty. Sofia Cruz',
    openDate: 'Jan 25, 2024',
    nextDeadline: 'Mar 15, 2026',
  },
  {
    id: '5',
    name: 'Property Dispute - BGC Land',
    caseNumber: 'LRC-2024-004567',
    client: 'Roberto de la Cruz',
    practiceArea: 'Property Law',
    status: 'In Progress',
    priority: 'Low',
    assignedTo: 'Atty. Carla Mendoza',
    openDate: 'Feb 10, 2024',
    nextDeadline: 'Mar 20, 2026',
  },
];

export function Cases() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const statuses = ['All', 'Discovery', 'In Progress', 'Mediation', 'Pre-trial'];

  const filteredCases = casesData.filter((case_) => {
    const matchesSearch =
      case_.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      case_.caseNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      case_.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || case_.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Cases</h1>
          <p className="text-slate-600">Manage all case files and proceedings</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          New Case
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg">
        {/* Search and Filters */}
        <div className="p-4 border-b border-slate-200 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search cases by name, case number, or client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  statusFilter === status
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Cases List */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Case</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Client</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Practice Area</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Status</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Priority</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Assigned To</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Next Deadline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredCases.map((case_) => (
                <tr key={case_.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4">
                    <Link to={`/cases/${case_.id}`} className="block">
                      <div className="text-slate-900 hover:text-blue-600">{case_.name}</div>
                      <div className="text-sm text-slate-600">{case_.caseNumber}</div>
                    </Link>
                  </td>
                  <td className="px-4 py-4 text-slate-900">{case_.client}</td>
                  <td className="px-4 py-4 text-slate-900">{case_.practiceArea}</td>
                  <td className="px-4 py-4">
                    <span className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">
                      {case_.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        case_.priority === 'High'
                          ? 'bg-red-50 text-red-700'
                          : case_.priority === 'Medium'
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-slate-50 text-slate-700'
                      }`}
                    >
                      {case_.priority}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-900">{case_.assignedTo}</td>
                  <td className="px-4 py-4 text-slate-900">{case_.nextDeadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}