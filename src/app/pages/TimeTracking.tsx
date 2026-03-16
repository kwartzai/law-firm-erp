import { Play, Square, Plus, Calendar, Save } from 'lucide-react';
import { useTimerContext } from '../context/TimerContext';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../components/ui/dialog';
import { useState } from 'react';

export function TimeTracking() {
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const {
    isTimerRunning,
    setIsTimerRunning,
    timerSeconds,
    setTimerSeconds,
    activeCase,
    setActiveCase,
    description,
    setDescription,
    hourlyRate,
    setHourlyRate,
    timeEntries,
    setTimeEntries
  } = useTimerContext();

  const handleStartTimer = () => {
    if (!activeCase) {
      setValidationMessage("Please select a Client / Case before starting the timer.");
      return;
    }
    if (!description.trim()) {
      setValidationMessage("Please provide a description of the work before starting.");
      return;
    }
    
    setIsTimerRunning(!isTimerRunning);
  };

  const handleLogAndReset = () => {
    if (timerSeconds === 0) return;

    const hours = Number((timerSeconds / 3600).toFixed(2));
    const rate = Number(hourlyRate) || 0;
    const amount = hours * rate;

    const caseParts = activeCase.split(' - ');
    const caseName = caseParts[0] || 'Unknown Case';
    const clientName = caseParts[1] || 'Unknown Client';

    const newEntry = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      client: clientName,
      case: caseName,
      description,
      hours,
      rate,
      amount,
      billable: true,
      attorney: 'Jane Smith', // Mock current user
    };

    setTimeEntries([newEntry, ...timeEntries]);
    
    // Reset Timer
    setIsTimerRunning(false);
    setTimerSeconds(0);
    setDescription('');
  };

  const totalHours = timeEntries.reduce((sum, entry) => sum + entry.hours, 0);
  const totalAmount = timeEntries.reduce((sum, entry) => sum + entry.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Time Tracking</h1>
          <p className="text-slate-600">Track billable hours and manage time entries</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              Manual Entry
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Manual Time Entry</DialogTitle>
              <DialogDescription>
                Record your billable hours manually.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label htmlFor="case-client" className="text-sm font-medium">Case / Client</label>
                <select id="case-client" className="w-full px-3 py-2 border rounded-lg bg-white">
                  <option value="">Select Case...</option>
                  {Array.from(new Set(timeEntries.map(t => `${t.case} - ${t.client}`))).map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">Date</label>
                  <input id="date" type="date" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="duration" className="text-sm font-medium">Duration (hrs)</label>
                  <input id="duration" type="number" step="0.5" className="w-full px-3 py-2 border rounded-lg" placeholder="1.0" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="rate" className="text-sm font-medium">Hourly Rate (₱)</label>
                  <input id="rate" type="number" className="w-full px-3 py-2 border rounded-lg" placeholder="400" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">Description</label>
                <textarea id="description" className="w-full px-3 py-2 border rounded-lg" placeholder="What did you work on?"></textarea>
              </div>
            </div>
            <DialogFooter>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Entry</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Timer Card */}
      <div className="bg-white border border-slate-200 rounded-lg p-6">
        <h2 className="text-lg text-slate-900 mb-4">Time Timer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-sm text-slate-600 mb-2">Client / Case</label>
              <select 
                value={activeCase}
                onChange={(e) => setActiveCase(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a case...</option>
                <option value="De la Cruz v. Manila Enterprises - Roberto de la Cruz">De la Cruz v. Manila Enterprises - Roberto de la Cruz</option>
                <option value="Estate Settlement - Maria Santos">Estate Settlement - Maria Santos</option>
                <option value="Labor Case - TechHub Philippines Inc">Labor Case - TechHub Philippines Inc</option>
                <option value="Illegal Dismissal - Miguel Reyes">Illegal Dismissal - Miguel Reyes</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm text-slate-600 mb-2">Hourly Rate (₱)</label>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-slate-600 mb-2">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="What are you working on?"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-6xl text-slate-900 mb-6 font-mono">
              {Math.floor(timerSeconds / 3600)}:{String(Math.floor((timerSeconds % 3600) / 60)).padStart(2, '0')}:{String(timerSeconds % 60).padStart(2, '0')}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleStartTimer}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  isTimerRunning
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {isTimerRunning ? (
                  <>
                    <Square className="w-5 h-5" />
                    Pause Timer
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    {timerSeconds > 0 ? 'Resume Timer' : 'Start Timer'}
                  </>
                )}
              </button>
              
              {timerSeconds > 0 && (
                <button
                  onClick={handleLogAndReset}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Save className="w-5 h-5" />
                  Log & Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="text-sm text-slate-600">Total Hours (This Week)</div>
          <div className="mt-2 text-3xl text-slate-900">{totalHours.toFixed(1)}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="text-sm text-slate-600">Billable Hours</div>
          <div className="mt-2 text-3xl text-slate-900">{totalHours.toFixed(1)}</div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-6">
          <div className="text-sm text-slate-600">Total Amount</div>
          <div className="mt-2 text-3xl text-slate-900">₱{totalAmount.toLocaleString()}</div>
        </div>
      </div>

      {/* Time Entries */}
      <div className="bg-white border border-slate-200 rounded-lg">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg text-slate-900">Recent Time Entries</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Date</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Client / Case</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Description</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Attorney</th>
                <th className="px-4 py-3 text-right text-sm text-slate-600">Hours</th>
                <th className="px-4 py-3 text-right text-sm text-slate-600">Rate</th>
                <th className="px-4 py-3 text-right text-sm text-slate-600">Amount</th>
                <th className="px-4 py-3 text-left text-sm text-slate-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {timeEntries.map((entry) => (
                <tr key={entry.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 text-slate-900">{entry.date}</td>
                  <td className="px-4 py-4">
                    <div className="text-slate-900">{entry.client}</div>
                    <div className="text-sm text-slate-600">{entry.case}</div>
                  </td>
                  <td className="px-4 py-4 text-slate-900 max-w-xs">
                    {entry.description}
                  </td>
                  <td className="px-4 py-4 text-slate-900">{entry.attorney}</td>
                  <td className="px-4 py-4 text-right text-slate-900">{entry.hours}</td>
                  <td className="px-4 py-4 text-right text-slate-900">₱{entry.rate.toLocaleString()}</td>
                  <td className="px-4 py-4 text-right text-slate-900">
                    ₱{entry.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        entry.billable
                          ? 'bg-green-50 text-green-700'
                          : 'bg-slate-50 text-slate-700'
                      }`}
                    >
                      {entry.billable ? 'Billable' : 'Non-billable'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={!!validationMessage} onOpenChange={(open) => !open && setValidationMessage(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Action Required</DialogTitle>
            <DialogDescription>
              {validationMessage}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <button
              onClick={() => setValidationMessage(null)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              OK
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}