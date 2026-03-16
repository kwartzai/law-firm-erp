import React, { createContext, useContext, useState, useEffect } from 'react';

export interface TimeEntry {
  id: string;
  date: string;
  client: string;
  case: string;
  description: string;
  hours: number;
  rate: number;
  amount: number;
  billable: boolean;
  attorney: string;
}

interface TimerContextType {
  isTimerRunning: boolean;
  setIsTimerRunning: (running: boolean) => void;
  timerSeconds: number;
  setTimerSeconds: React.Dispatch<React.SetStateAction<number>>;
  activeCase: string;
  setActiveCase: (caseName: string) => void;
  description: string;
  setDescription: (desc: string) => void;
  hourlyRate: string;
  setHourlyRate: (rate: string) => void;
  timeEntries: TimeEntry[];
  setTimeEntries: React.Dispatch<React.SetStateAction<TimeEntry[]>>;
}

const initialTimeEntries: TimeEntry[] = [
  {
    id: '1',
    date: 'Mar 2, 2026',
    client: 'Roberto de la Cruz',
    case: 'De la Cruz v. Manila Enterprises',
    description: 'Client meeting to discuss discovery strategy',
    hours: 2.5,
    rate: 400,
    amount: 1000,
    billable: true,
    attorney: 'John Doe',
  },
  {
    id: '2',
    date: 'Mar 1, 2026',
    client: 'TechHub Philippines Inc',
    case: 'Labor Case - TechHub PH',
    description: 'Research case law for motion to dismiss',
    hours: 3.0,
    rate: 400,
    amount: 1200,
    billable: true,
    attorney: 'John Doe',
  },
  {
    id: '3',
    date: 'Mar 1, 2026',
    client: 'Maria Santos',
    case: 'Estate Settlement - Santos',
    description: 'Draft estate planning documents',
    hours: 1.5,
    rate: 350,
    amount: 525,
    billable: true,
    attorney: 'Jane Smith',
  },
  {
    id: '4',
    date: 'Feb 29, 2026',
    client: 'Miguel Reyes',
    case: 'Illegal Dismissal - Reyes',
    description: 'Review medical records and prepare case summary',
    hours: 4.0,
    rate: 375,
    amount: 1500,
    billable: true,
    attorney: 'Emily Johnson',
  },
  {
    id: '5',
    date: 'Feb 28, 2026',
    client: 'Roberto de la Cruz',
    case: 'De la Cruz v. Manila Enterprises',
    description: 'Prepare and file motion to dismiss',
    hours: 5.0,
    rate: 400,
    amount: 2000,
    billable: true,
    attorney: 'John Doe',
  },
];

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: React.ReactNode }) {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  
  const [activeCase, setActiveCase] = useState('');
  const [description, setDescription] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>(initialTimeEntries);

  useEffect(() => {
    let interval: number | undefined;

    if (isTimerRunning) {
      interval = window.setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isTimerRunning && timerSeconds !== 0) {
      window.clearInterval(interval);
    }

    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  return (
    <TimerContext.Provider
      value={{
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
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimerContext() {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error('useTimerContext must be used within a TimerProvider');
  }
  return context;
}
