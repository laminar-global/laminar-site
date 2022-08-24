import React, {useState} from 'react';
import AnnouncementIcon from '../svg/AnnouncementIcon';
import DismissButton from './DismissButton';

function AnnouncementBanner() {
    const [banner, setBanner] = useState();
    if(banner) {
        document.getElementById('announcement-banner').classList.add('hidden');
    }
    return (
        <div className="bg-primary" id="announcement-banner">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap">
                <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-primary-darker">
                    <AnnouncementIcon />
                </span>
                <p className="ml-3 font-medium text-white">
                    <span className="md:hidden"><span className="font-semibold">IBC 2022:</span> Meet us in Amsterdam</span>
                    <span className="hidden md:inline"><span className="font-semibold">IBC 2022:</span> Meet us in Amsterdam</span>
                </p>
                </div>
                <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a href="https://laminarglobal.pipedrive.com/scheduler/vXl8ABSA/meet-us-at-ibc-22" target="_blank" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-semibold text-primary bg-white uppercase font-display hover:bg-primary-darker hover:text-white transition-all duration-200">
                    Book A Meeting
                </a>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <DismissButton dismissBanner={banner => setBanner(banner)} />
                </div>
            </div>
            </div>
        </div>
        )
}
  
export default AnnouncementBanner;