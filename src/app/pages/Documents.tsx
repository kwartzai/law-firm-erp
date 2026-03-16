import { Search, Plus, FileText, File, Download, Folder } from 'lucide-react';
import { useState } from 'react';
import { UploadDocumentModal } from '../components/modals/UploadDocumentModal';

const documents = [
  {
    id: '1',
    name: 'Complaint.pdf',
    type: 'Pleading',
    case: 'De la Cruz v. Manila Enterprises',
    client: 'Roberto de la Cruz',
    date: 'Jan 20, 2024',
    size: '245 KB',
    category: 'Legal Documents',
  },
  {
    id: '2',
    name: 'Motion to Dismiss.pdf',
    type: 'Motion',
    case: 'De la Cruz v. Manila Enterprises',
    client: 'Roberto de la Cruz',
    date: 'Feb 1, 2024',
    size: '180 KB',
    category: 'Legal Documents',
  },
  {
    id: '3',
    name: 'Discovery Request.pdf',
    type: 'Discovery',
    case: 'De la Cruz v. Manila Enterprises',
    client: 'Roberto de la Cruz',
    date: 'Feb 15, 2026',
    size: '156 KB',
    category: 'Legal Documents',
  },
  {
    id: '4',
    name: 'Last Will and Testament - Santos.pdf',
    type: 'Will',
    case: 'Estate Settlement - Santos',
    client: 'Maria Santos',
    date: 'Feb 5, 2024',
    size: '210 KB',
    category: 'Estate Documents',
  },
  {
    id: '5',
    name: 'Employment Records - Reyes.pdf',
    type: 'Evidence',
    case: 'Illegal Dismissal - Reyes',
    client: 'Miguel Reyes',
    date: 'Feb 10, 2024',
    size: '1.2 MB',
    category: 'Evidence',
  },
  {
    id: '6',
    name: 'Contract Agreement - TechHub.pdf',
    type: 'Contract',
    case: 'Labor Case - TechHub PH',
    client: 'TechHub Philippines Inc',
    date: 'Jan 15, 2024',
    size: '340 KB',
    category: 'Contracts',
  },
  {
    id: '7',
    name: 'Retainer Agreement - De la Cruz.pdf',
    type: 'Agreement',
    case: 'De la Cruz v. Manila Enterprises',
    client: 'Roberto de la Cruz',
    date: 'Jan 20, 2024',
    size: '89 KB',
    category: 'Client Documents',
  },
  {
    id: '8',
    name: 'Deposition Transcript.pdf',
    type: 'Transcript',
    case: 'De la Cruz v. Manila Enterprises',
    client: 'Roberto de la Cruz',
    date: 'Feb 20, 2026',
    size: '456 KB',
    category: 'Legal Documents',
  },
];

const categories = ['All', 'Legal Documents', 'Contracts', 'Evidence', 'Estate Documents', 'Client Documents'];

export function Documents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.case.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || doc.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Documents</h1>
          <p className="text-slate-600">Manage all case documents and files</p>
        </div>
        <UploadDocumentModal documents={documents} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-sm text-slate-600">Total Documents</div>
              <div className="text-2xl text-slate-900">{documents.length}</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-50 rounded-lg">
              <File className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-sm text-slate-600">Legal Documents</div>
              <div className="text-2xl text-slate-900">
                {documents.filter((d) => d.category === 'Legal Documents').length}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-50 rounded-lg">
              <Folder className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-sm text-slate-600">Contracts</div>
              <div className="text-2xl text-slate-900">
                {documents.filter((d) => d.category === 'Contracts').length}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-50 rounded-lg">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <div className="text-sm text-slate-600">Evidence</div>
              <div className="text-2xl text-slate-900">
                {documents.filter((d) => d.category === 'Evidence').length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="bg-white border border-slate-200 rounded-lg">
        <div className="p-4 border-b border-slate-200 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  categoryFilter === category
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Document</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Type</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Case</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Client</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Date</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Size</th>
                <th className="px-4 py-3 text-right text-sm text-slate-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredDocuments.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-900">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded">
                      {doc.type}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-900">{doc.case}</td>
                  <td className="px-4 py-4 text-slate-900">{doc.client}</td>
                  <td className="px-4 py-4 text-slate-900">{doc.date}</td>
                  <td className="px-4 py-4 text-slate-600">{doc.size}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1 text-slate-600 hover:text-slate-900">
                        <Download className="w-4 h-4" />
                      </button>
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