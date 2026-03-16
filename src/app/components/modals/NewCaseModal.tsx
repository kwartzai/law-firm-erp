import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../ui/dialog';
import { Plus } from 'lucide-react';

interface CaseData {
  id: string;
  name: string;
  caseNumber: string;
  client: string;
  practiceArea: string;
  status: string;
  priority: string;
  assignedTo: string;
  openDate: string;
  nextDeadline: string;
}

interface NewCaseModalProps {
  casesData: CaseData[];
  trigger?: React.ReactNode;
  defaultClient?: string;
}

export function NewCaseModal({ casesData, trigger, defaultClient }: NewCaseModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            New Case
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Case</DialogTitle>
          <DialogDescription>
            Create a new case file. Add details like priority and practice area.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label htmlFor="case-name" className="text-sm font-medium">Case Name</label>
            <input id="case-name" className="w-full px-3 py-2 border rounded-lg" placeholder="e.g. Dela Cruz v. Santos" />
          </div>
          <div className="space-y-2">
            <label htmlFor="case-number" className="text-sm font-medium">Case Number</label>
            <input id="case-number" className="w-full px-3 py-2 border rounded-lg" placeholder="e.g. CV-2024-001" />
          </div>
          <div className="space-y-2">
            <label htmlFor="client" className="text-sm font-medium">Client</label>
            <select id="client" className="w-full px-3 py-2 border rounded-lg bg-white" defaultValue={defaultClient || ""}>
              <option value="">Select Client...</option>
              {Array.from(new Set(casesData.map(c => c.client))).map(client => (
                <option key={client} value={client}>{client}</option>
              ))}
              {defaultClient && !casesData.some(c => c.client === defaultClient) && (
                <option key={defaultClient} value={defaultClient}>{defaultClient}</option>
              )}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="practice-area" className="text-sm font-medium">Practice Area</label>
              <select id="practice-area" className="w-full px-3 py-2 border rounded-lg bg-white">
                <option>Civil Litigation</option>
                <option>Corporate Law</option>
                <option>Labor Law</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="priority" className="text-sm font-medium">Priority</label>
              <select id="priority" className="w-full px-3 py-2 border rounded-lg bg-white">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Case</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
