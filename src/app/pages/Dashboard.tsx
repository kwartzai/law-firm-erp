import { Users, Briefcase, Clock, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';

const stats = [
  { name: 'Active Clients', value: '127', icon: Users, change: '+12%', changeType: 'positive' },
  { name: 'Open Cases', value: '43', icon: Briefcase, change: '+5%', changeType: 'positive' },
  { name: 'Billable Hours (MTD)', value: '342', icon: Clock, change: '+18%', changeType: 'positive' },
  { name: 'Revenue (MTD)', value: '₱5,127,450', icon: DollarSign, change: '+23%', changeType: 'positive' },
];

const recentCases = [
  { id: '1', name: 'De la Cruz v. Manila Enterprises', client: 'Roberto de la Cruz', status: 'Discovery', priority: 'High', nextDeadline: 'Mar 5, 2026' },
  { id: '2', name: 'Estate Settlement - Santos', client: 'Maria Santos', status: 'In Progress', priority: 'Medium', nextDeadline: 'Mar 8, 2026' },
  { id: '3', name: 'Labor Case - TechHub PH', client: 'TechHub Philippines Inc', status: 'Mediation', priority: 'High', nextDeadline: 'Mar 4, 2026' },
  { id: '4', name: 'Illegal Dismissal - Reyes', client: 'Miguel Reyes', status: 'Pre-trial', priority: 'Medium', nextDeadline: 'Mar 15, 2026' },
];

const upcomingDeadlines = [
  { id: '1', title: 'File Motion to Dismiss', case: 'De la Cruz v. Manila Enterprises', date: 'Mar 4, 2026', daysLeft: 2 },
  { id: '2', title: 'Discovery Deadline', case: 'De la Cruz v. Manila Enterprises', date: 'Mar 5, 2026', daysLeft: 3 },
  { id: '3', title: 'Estate Documents Review', case: 'Estate Settlement - Santos', date: 'Mar 8, 2026', daysLeft: 6 },
  { id: '4', title: 'NLRC Mediation', case: 'Labor Case - TechHub PH', date: 'Mar 10, 2026', daysLeft: 8 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-slate-900">Dashboard</h1>
        <p className="text-slate-600">Overview of your law firm operations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="p-6 bg-white border border-slate-200 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600">{stat.name}</p>
                <p className="mt-2 text-3xl text-slate-900">{stat.value}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600">{stat.change}</span>
              <span className="text-sm text-slate-600">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Cases */}
        <div className="bg-white border border-slate-200 rounded-lg">
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="text-lg text-slate-900">Recent Cases</h2>
            <Link to="/cases" className="text-sm text-blue-600 hover:text-blue-700">
              View all
            </Link>
          </div>
          <div className="divide-y divide-slate-200">
            {recentCases.map((case_) => (
              <Link
                key={case_.id}
                to={`/cases/${case_.id}`}
                className="block p-4 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm text-slate-900">{case_.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{case_.client}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      case_.priority === 'High'
                        ? 'bg-red-50 text-red-700'
                        : 'bg-yellow-50 text-yellow-700'
                    }`}
                  >
                    {case_.priority}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-slate-600">Status: {case_.status}</span>
                  <span className="text-slate-600">Due: {case_.nextDeadline}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white border border-slate-200 rounded-lg">
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <h2 className="text-lg text-slate-900">Upcoming Deadlines</h2>
            <Link to="/calendar" className="text-sm text-blue-600 hover:text-blue-700">
              View calendar
            </Link>
          </div>
          <div className="divide-y divide-slate-200">
            {upcomingDeadlines.map((deadline) => (
              <div key={deadline.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 p-1 rounded ${deadline.daysLeft <= 3 ? 'bg-red-50' : 'bg-blue-50'}`}>
                    <AlertCircle className={`w-4 h-4 ${deadline.daysLeft <= 3 ? 'text-red-600' : 'text-blue-600'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm text-slate-900">{deadline.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{deadline.case}</p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-slate-600">
                      <span>{deadline.date}</span>
                      <span className={deadline.daysLeft <= 3 ? 'text-red-600' : ''}>
                        {deadline.daysLeft} days left
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}