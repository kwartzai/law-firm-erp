import { Link } from 'react-router';
import { Search, Plus, Mail, Phone, Building } from 'lucide-react';
import { useState } from 'react';

const clientsData = [
  {
    id: '1',
    name: 'Roberto de la Cruz',
    email: 'roberto.delacruz@email.com',
    phone: '+63 917 123 4567',
    type: 'Individual',
    activeCases: 2,
    status: 'Active',
    totalBilled: '₱1,845,230',
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria.santos@email.com',
    phone: '+63 918 234 5678',
    type: 'Individual',
    activeCases: 1,
    status: 'Active',
    totalBilled: '₱512,500',
  },
  {
    id: '3',
    name: 'TechHub Philippines Inc',
    email: 'legal@techhub.ph',
    phone: '+63 2 8123 4567',
    type: 'Corporate',
    activeCases: 3,
    status: 'Active',
    totalBilled: '₱5,128,750',
  },
  {
    id: '4',
    name: 'Miguel Reyes',
    email: 'mreyes@email.com',
    phone: '+63 919 456 7890',
    type: 'Individual',
    activeCases: 1,
    status: 'Active',
    totalBilled: '₱923,400',
  },
  {
    id: '5',
    name: 'GlobalTrade Manila Corp',
    email: 'contact@globaltrade.ph',
    phone: '+63 2 8567 8901',
    type: 'Corporate',
    activeCases: 2,
    status: 'Active',
    totalBilled: '₱3,487,200',
  },
  {
    id: '6',
    name: 'Jennifer Magsino',
    email: 'jmagsino@email.com',
    phone: '+63 920 678 9012',
    type: 'Individual',
    activeCases: 1,
    status: 'Active',
    totalBilled: '₱615,600',
  },
];

export function Clients() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'All' | 'Individual' | 'Corporate'>('All');

  const filteredClients = clientsData.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'All' || client.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Clients</h1>
          <p className="text-slate-600">Manage your client relationships</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          Add Client
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-lg">
        {/* Search and Filters */}
        <div className="p-4 border-b border-slate-200 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search clients by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            {(['All', 'Individual', 'Corporate'] as const).map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === option
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Clients List */}
        <div className="divide-y divide-slate-200">
          {filteredClients.map((client) => (
            <Link
              key={client.id}
              to={`/clients/${client.id}`}
              className="block p-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                    {client.type === 'Corporate' ? (
                      <Building className="w-6 h-6 text-slate-600" />
                    ) : (
                      <span className="text-slate-600 font-medium">
                        {client.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-slate-900">{client.name}</h3>
                      <span className="px-2 py-0.5 text-xs bg-slate-100 text-slate-700 rounded">
                        {client.type}
                      </span>
                    </div>
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Mail className="w-4 h-4" />
                        {client.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Phone className="w-4 h-4" />
                        {client.phone}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-600">{client.activeCases} Active Cases</div>
                  <div className="mt-1 text-slate-900">{client.totalBilled}</div>
                  <div className="mt-1">
                    <span className="px-2 py-1 text-xs bg-green-50 text-green-700 rounded-full">
                      {client.status}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}