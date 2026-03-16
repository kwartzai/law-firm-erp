import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '../components/ui/dialog';

const events = [
  {
    id: '1',
    title: 'Client Meeting - De la Cruz',
    type: 'Meeting',
    case: 'De la Cruz v. Manila Enterprises',
    time: '10:00 AM',
    duration: '1 hour',
    location: 'Conference Room A',
    attendees: ['Atty. Juan dela Rosa', 'Roberto de la Cruz'],
    date: 'Mar 2, 2026',
  },
  {
    id: '2',
    title: 'RTC Hearing',
    type: 'Court',
    case: 'Illegal Dismissal - Reyes',
    time: '2:00 PM',
    duration: '2 hours',
    location: 'RTC Makati, Branch 142',
    attendees: ['Atty. Sofia Cruz', 'Miguel Reyes'],
    date: 'Mar 3, 2026',
  },
  {
    id: '3',
    title: 'Discovery Deadline',
    type: 'Deadline',
    case: 'De la Cruz v. Manila Enterprises',
    time: '5:00 PM',
    duration: 'All day',
    location: 'N/A',
    attendees: ['Atty. Juan dela Rosa'],
    date: 'Mar 5, 2026',
  },
  {
    id: '4',
    title: 'NLRC Mediation',
    type: 'Mediation',
    case: 'Labor Case - TechHub PH',
    time: '11:00 AM',
    duration: '3 hours',
    location: 'NLRC NCR Quezon City',
    attendees: ['Atty. Juan dela Rosa', 'TechHub Philippines Inc'],
    date: 'Mar 10, 2026',
  },
  {
    id: '5',
    title: 'Estate Settlement Review',
    type: 'Meeting',
    case: 'Estate Settlement - Santos',
    time: '3:00 PM',
    duration: '1.5 hours',
    location: 'Office',
    attendees: ['Atty. Carla Mendoza', 'Maria Santos'],
    date: 'Mar 8, 2026',
  },
];

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 2)); // March 2, 2026
  const [view, setView] = useState<'month' | 'week' | 'day'>('week');

  const upcomingEvents = events.slice(0, 5);

  const handlePrev = () => {
    const newDate = new Date(currentDate);
    if (view === 'month') newDate.setMonth(newDate.getMonth() - 1);
    if (view === 'week') newDate.setDate(newDate.getDate() - 7);
    if (view === 'day') newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const handleNext = () => {
    const newDate = new Date(currentDate);
    if (view === 'month') newDate.setMonth(newDate.getMonth() + 1);
    if (view === 'week') newDate.setDate(newDate.getDate() + 7);
    if (view === 'day') newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const handleToday = () => {
    setCurrentDate(new Date(2026, 2, 2)); // Hardcoded today for demo purposes
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };

  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days = [];

    // Empty cells for days before the 1st
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="min-h-24 bg-slate-50 border border-slate-200 rounded-lg"></div>);
    }

    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `Mar ${i}, 2026`; // Simplified for demo to match hardcoded event dates
      const dayEvents = events.filter(e => e.date === dateStr);
      
      days.push(
        <div key={`day-${i}`} className="min-h-24 bg-white border border-slate-200 rounded-lg p-2">
          <div className="text-sm text-slate-900 mb-1">{i}</div>
          <div className="space-y-1">
            {dayEvents.slice(0, 3).map(event => (
              <div key={event.id} className="text-xs truncate bg-blue-50 text-blue-700 p-1 rounded">
                {event.time} {event.title}
              </div>
            ))}
            {dayEvents.length > 3 && (
              <div className="text-xs text-slate-500 pl-1">+{dayEvents.length - 3} more</div>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="p-4">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-sm text-slate-600 py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days}
        </div>
      </div>
    );
  };

  const renderWeekView = () => {
    // For demo purposes, we'll hardcode the week of March 2, 2026
    const weekDays = [null, 2, 3, 4, 5, 6, 7];
    
    return (
      <div className="p-4">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-sm text-slate-600 py-2">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`border border-slate-200 rounded-lg p-2 min-h-24 ${
                day === 2 ? 'bg-blue-50 border-blue-200' : 'bg-white'
              }`}
            >
              {day && (
                <>
                  <div className={`text-sm mb-2 ${day === 2 ? 'text-blue-700' : 'text-slate-900'}`}>
                    {day}
                  </div>
                  <div className="space-y-1">
                    {events
                      .filter((e) => e.date === `Mar ${day}, 2026`)
                      .map((event) => (
                        <div
                          key={event.id}
                          className={`text-xs p-1 rounded cursor-pointer ${
                            event.type === 'Court'
                              ? 'bg-red-100 text-red-700'
                              : event.type === 'Deadline'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          <div className="truncate">{event.title}</div>
                          <div>{event.time}</div>
                        </div>
                      ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDayView = () => {
    const dateStr = `Mar ${currentDate.getDate()}, 2026`; // Simplified for demo
    const dayEvents = events.filter(e => e.date === dateStr).sort((a, b) => a.time.localeCompare(b.time));

    return (
      <div className="p-4">
        <h3 className="text-lg font-medium text-slate-900 mb-6">{currentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</h3>
        
        {dayEvents.length === 0 ? (
          <div className="text-center py-12 text-slate-500 border border-dashed border-slate-300 rounded-lg">
            No events scheduled for this day.
          </div>
        ) : (
          <div className="space-y-4">
            {dayEvents.map(event => (
              <div key={event.id} className="flex gap-4 border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="w-24 shrink-0">
                  <div className="font-medium text-slate-900">{event.time}</div>
                  <div className="text-sm text-slate-500">{event.duration}</div>
                </div>
                <div className="w-1 bg-slate-200 rounded-full flex-shrink-0">
                  <div className={`w-full h-full rounded-full ${
                    event.type === 'Court' ? 'bg-red-500' :
                    event.type === 'Deadline' ? 'bg-orange-500' :
                    event.type === 'Mediation' ? 'bg-purple-500' : 'bg-blue-500'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-base font-medium text-slate-900">{event.title}</h4>
                    <span className="text-xs font-medium px-2 py-1 rounded bg-slate-100 text-slate-600">
                      {event.type}
                    </span>
                  </div>
                  <div className="text-sm text-blue-600 mb-2">{event.case}</div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    {event.location !== 'N/A' && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {event.attendees.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Calendar</h1>
          <p className="text-slate-600">Manage deadlines, hearings, and appointments</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              New Event
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>
                Schedule a new court hearing, deadline, or meeting.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Event Title</label>
                <input id="title" className="w-full px-3 py-2 border rounded-lg" placeholder="Event title" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">Date</label>
                  <input id="date" type="date" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium">Time</label>
                  <input id="time" type="time" className="w-full px-3 py-2 border rounded-lg" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium">Event Type</label>
                <select id="type" className="w-full px-3 py-2 border rounded-lg bg-white">
                  <option>Meeting</option>
                  <option>Court</option>
                  <option>Deadline</option>
                  <option>Mediation</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="case" className="text-sm font-medium">Associated Case</label>
                <select id="case" className="w-full px-3 py-2 border rounded-lg bg-white">
                  <option value="">Select Case...</option>
                  {Array.from(new Set(events.map(e => e.case))).map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">Location</label>
                <input id="location" className="w-full px-3 py-2 border rounded-lg" placeholder="e.g. Conference Room A" />
              </div>
            </div>
            <DialogFooter>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Event</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-lg">
          {/* Calendar Header */}
          <div className="p-4 border-b border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg text-slate-900">
                {view === 'day' 
                  ? currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                  : formatMonthYear(currentDate)
                }
              </h2>
              <div className="flex items-center gap-2">
                <button onClick={handlePrev} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button onClick={handleToday} className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200">
                  Today
                </button>
                <button onClick={handleNext} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>
            <div className="flex gap-2">
              {(['month', 'week', 'day'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-4 py-2 rounded-lg text-sm capitalize transition-colors ${
                    view === v
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar Content */}
          {view === 'month' && renderMonthView()}
          {view === 'week' && renderWeekView()}
          {view === 'day' && renderDayView()}
        </div>

        {/* Upcoming Events */}
        <div className="bg-white border border-slate-200 rounded-lg">
          <div className="p-4 border-b border-slate-200">
            <h2 className="text-lg text-slate-900">Upcoming Events</h2>
          </div>
          <div className="p-4 space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="border border-slate-200 rounded-lg p-3 hover:border-blue-300 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-slate-900">{event.title}</h3>
                  <span
                    className={`px-2 py-0.5 text-xs rounded ${
                      event.type === 'Court'
                        ? 'bg-red-50 text-red-700'
                        : event.type === 'Deadline'
                        ? 'bg-orange-50 text-orange-700'
                        : event.type === 'Mediation'
                        ? 'bg-purple-50 text-purple-700'
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    {event.type}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  {event.location !== 'N/A' && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees.length} attendees</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-slate-600">{event.case}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}