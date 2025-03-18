
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string; // Format: 'YYYY-MM-DDTHH:MM:SS'
  className?: string;
}

export function CountdownTimer({ targetDate, className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className={`flex items-center justify-center gap-2 md:gap-4 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="glass flex flex-col items-center justify-center p-2 md:p-3 w-16 md:w-20 h-16 md:h-20 rounded-lg">
            <span className="text-xl md:text-2xl font-medium leading-none">
              {unit.value.toString().padStart(2, '0')}
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="hidden md:block text-lg font-medium mx-1 mt-3"></span>
          )}
        </div>
      ))}
    </div>
  );
}
