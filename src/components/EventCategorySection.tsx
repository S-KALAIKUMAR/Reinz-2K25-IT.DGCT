
import { memo } from 'react';
import { EventType } from '@/utils/eventData';
import { EventCard } from '@/components/EventCard';

// Define props interface for EventCategorySection
export interface EventCategorySectionProps {
  title: string;
  description: string;
  events: EventType[];
  categoryId: string;
}

// Memoized event card for performance
const MemoizedEventCard = memo(EventCard);

// Event Category Section Component
export const EventCategorySection = memo(({ title, description, events, categoryId }: EventCategorySectionProps) => (
  <section id={categoryId} className="py-12 w-full">
    <div className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="chip mb-4 animate-on-scroll opacity-0">{title}</span>
        <h2 className="heading-lg mb-6 animate-on-scroll opacity-0">
          {title}
        </h2>
        <p className="subtitle animate-on-scroll opacity-0">
          {description}
        </p>
      </div>
      
      {/* Event Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="animate-on-scroll opacity-0 hover:scale-105 transition-all duration-300">
            <MemoizedEventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  </section>
));

EventCategorySection.displayName = 'EventCategorySection';
