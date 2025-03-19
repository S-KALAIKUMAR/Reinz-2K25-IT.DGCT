import React from 'react';

interface EventBannerProps {
  imageSrc: string;
  
}

export const EventBanner: React.FC<EventBannerProps> = () => {
    return (
        <div className="w-full  flex flex-col items-center">
            <img src={'/images/ban.jpg'} alt="Event Banner" className="w-full h-auto object-contain" />
        </div>
    );
};
