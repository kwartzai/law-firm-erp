import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

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
  const [currentDate] = useState(new Date(2026, 2, 2)); // March 2, 2026
  const [view, setView] = useState<'month' | 'week' | 'day'>('week');

  const upcomingEvents = events.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Calendar</h1>
          <p className="text-slate-600">Manage deadlines, hearings, and appointments</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          New Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-lg">
          {/* Calendar Header */}
          <div className="p-4 border-b border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg text-slate-900">
                March 2026
              </h2>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200">
                  Today
                </button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
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

          {/* Week View */}
          <div className="p-4">
            <div className="grid grid-cols-7 gap-2 mb-4">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-sm text-slate-600 py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {/* Week starting March 2, 2026 (Monday) */}
              {[null, 2, 3, 4, 5, 6, 7].map((day, index) => (
                <div
                  key={index}
                  className={`border border-slate-200 rounded-lg p-2 min-h-24 ${
                    day === 2 ? 'bg-blue-50 border-blue-200' : 'bg-white'
                  }`}
                >
                  {day && (
                    <>
                      <div
                        className={`text-sm mb-2 ${
                          day === 2 ? 'text-blue-700' : 'text-slate-900'
                        }`}
                      >
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