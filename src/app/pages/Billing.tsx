import { Search, Plus, Download, Send } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../components/ui/dialog';

const invoices = [
  {
    id: 'INV-2026-001',
    client: 'Roberto de la Cruz',
    case: 'De la Cruz v. Manila Enterprises',
    date: 'Feb 28, 2026',
    dueDate: 'Mar 28, 2026',
    amount: 248000,
    status: 'Sent',
  },
  {
    id: 'INV-2026-002',
    client: 'TechHub Philippines Inc',
    case: 'Labor Case - TechHub PH',
    date: 'Feb 28, 2026',
    dueDate: 'Mar 28, 2026',
    amount: 616000,
    status: 'Paid',
  },
  {
    id: 'INV-2026-003',
    client: 'Maria Santos',
    case: 'Estate Settlement - Santos',
    date: 'Feb 25, 2026',
    dueDate: 'Mar 25, 2026',
    amount: 140000,
    status: 'Overdue',
  },
  {
    id: 'INV-2026-004',
    client: 'Miguel Reyes',
    case: 'Illegal Dismissal - Reyes',
    date: 'Feb 20, 2026',
    dueDate: 'Mar 20, 2026',
    amount: 350000,
    status: 'Paid',
  },
  {
    id: 'INV-2026-005',
    client: 'GlobalTrade Manila Corp',
    case: 'Corporate Advisory',
    date: 'Feb 15, 2026',
    dueDate: 'Mar 15, 2026',
    amount: 492000,
    status: 'Sent',
  },
];

export function Billing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const statuses = ['All', 'Draft', 'Sent', 'Paid', 'Overdue'];

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.case.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalInvoiced = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalPaid = invoices.filter(inv => inv.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0);
  const totalOutstanding = invoices.filter(inv => inv.status !== 'Paid').reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Billing & Invoices</h1>
          <p className="text-slate-600">Manage invoices and track payments</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              Create Invoice
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Invoice</DialogTitle>
              <DialogDescription>
                Fill in the details for the new invoice.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label htmlFor="client" className="text-sm font-medium">Client</label>
                <select id="client" className="w-full px-3 py-2 border rounded-lg bg-white">
                  <option value="">Select Client...</option>
                  {Array.from(new Set(invoices.map(i => i.client))).map(client => (
                    <option key={client} value={client}>{client}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="amount" className="text-sm font-medium">Amount</label>
                <input id="amount" type="number" className="w-full px-3 py-2 border rounded-lg" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <label htmlFor="dueDate" className="text-sm font-medium">Due Date</label>
                <input id="dueDate" type="date" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <textarea id="description" className="w-full px-3 py-2 border rounded-lg" placeholder="Invoice details..."></textarea>
              </div>
            </div>
            <DialogFooter>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Invoice</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="text-sm text-slate-600">Total Invoiced</div>
          <div className="mt-2 text-3xl text-slate-900">₱{totalInvoiced.toLocaleString()}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="text-sm text-slate-600">Total Paid</div>
          <div className="mt-2 text-3xl text-green-600">₱{totalPaid.toLocaleString()}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="text-sm text-slate-600">Outstanding</div>
          <div className="mt-2 text-3xl text-orange-600">₱{totalOutstanding.toLocaleString()}</div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white border border-slate-200 rounded-lg">
        <div className="p-4 border-b border-slate-200 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search invoices..."
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

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Invoice #</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Client</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Case</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Date</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Due Date</th>
                <th className="px-4 py-3 text-right text-sm text-slate-600">Amount</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Status</th>
                <th className="px-4 py-3 text-right text-sm text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 text-slate-900">{invoice.id}</td>
                  <td className="px-4 py-4 text-slate-900">{invoice.client}</td>
                  <td className="px-4 py-4 text-slate-600">{invoice.case}</td>
                  <td className="px-4 py-4 text-slate-900">{invoice.date}</td>
                  <td className="px-4 py-4 text-slate-900">{invoice.dueDate}</td>
                  <td className="px-4 py-4 text-right text-slate-900">
                    ₱{invoice.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        invoice.status === 'Paid'
                          ? 'bg-green-50 text-green-700'
                          : invoice.status === 'Sent'
                          ? 'bg-blue-50 text-blue-700'
                          : invoice.status === 'Overdue'
                          ? 'bg-red-50 text-red-700'
                          : 'bg-slate-50 text-slate-700'
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 text-slate-600 hover:text-slate-900">
                        <Download className="w-4 h-4" />
                      </button>
                      {invoice.status !== 'Paid' && (
                        <button className="p-1 text-slate-600 hover:text-slate-900">
                          <Send className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}