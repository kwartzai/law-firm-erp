import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../ui/dialog';
import { Plus } from 'lucide-react';

interface DocumentData {
  id: string;
  name: string;
  type: string;
  case: string;
  client: string;
  date: string;
  size: string;
  category: string;
}

interface UploadDocumentModalProps {
  documents: DocumentData[];
  trigger?: React.ReactNode;
  defaultCase?: string;
}

export function UploadDocumentModal({ documents, trigger, defaultCase }: UploadDocumentModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            Upload Document
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
          <DialogDescription>
            Upload a new document to the system.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label htmlFor="file" className="text-sm font-medium">File</label>
            <input id="file" type="file" className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="space-y-2">
            <label htmlFor="case" className="text-sm font-medium">Associated Case</label>
            <select id="case" className="w-full px-3 py-2 border rounded-lg bg-white" defaultValue={defaultCase || ""}>
              <option value="">Select Case...</option>
              {Array.from(new Set(documents.map(d => d.case))).map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
              {defaultCase && !documents.some(d => d.case === defaultCase) && (
                <option key={defaultCase} value={defaultCase}>{defaultCase}</option>
              )}
            </select>
            <p className="text-xs text-slate-500 italic mt-1">
              Document will automatically be associated with the selected case and its client.
            </p>
          </div>
          <div className="space-y-2">
            <label htmlFor="doc-name" className="text-sm font-medium">Document Name</label>
            <input id="doc-name" className="w-full px-3 py-2 border rounded-lg" placeholder="Document Name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="doc-tags" className="text-sm font-medium">Tags</label>
            <input id="doc-tags" className="w-full px-3 py-2 border rounded-lg" placeholder="e.g. signed, draft, confidential (comma separated)" />
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">Category</label>
            <select id="category" className="w-full px-3 py-2 border rounded-lg bg-white">
              <option>Legal Documents</option>
              <option>Contracts</option>
              <option>Evidence</option>
              <option>Estate Documents</option>
              <option>Client Documents</option>
            </select>
          </div>
        </div>
        <DialogFooter>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Upload</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
