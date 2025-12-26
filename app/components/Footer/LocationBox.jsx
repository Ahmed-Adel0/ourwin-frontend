"use client";

import { MapPin, Clock, Navigation } from "lucide-react";

const LocationBox = () => {
  const openGoogleMaps = () => {
    const lat = 31.4285;
    const lng = 31.8184;
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full bg-[#032131] rounded-2xl border border-[#45B7BA]/20 shadow-xl p-5 md:p-6">
      {/* Header with gradient */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-6 bg-gradient-to-b from-[#45B7BA] to-[#2F8FA0] rounded-full"></div>
          <h3 className="text-lg font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0]">
              Our Location
            </span>
          </h3>
        </div>
        <p className="text-xs text-gray-300">
          Visit our office in Damietta New City
        </p>
      </div>

      {/* Location info with icons */}
      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-3 bg-black/20 rounded-xl p-3 border border-[#1f2a30]">
          <div className="p-2 bg-gradient-to-br from-[#45B7BA]/20 to-[#2F8FA0]/20 border border-[#45B7BA]/30 rounded-lg">
            <MapPin className="w-4 h-4 text-[#45B7BA]" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-300 mb-1">Address</p>
            <p className="text-xs text-gray-400 leading-tight">
              Digital Innovation District
            </p>
            <p className="text-xs text-gray-400">Damietta New City, Egypt</p>
          </div>
        </div>

        <div className="flex items-start gap-3 bg-black/20 rounded-xl p-3 border border-[#1f2a30]">
          <div className="p-2 bg-gradient-to-br from-[#45B7BA]/20 to-[#2F8FA0]/20 border border-[#45B7BA]/30 rounded-lg">
            <Clock className="w-4 h-4 text-[#45B7BA]" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-300 mb-1">
              Business Hours
            </p>
            <p className="text-xs text-gray-400">Sunday - Thursday</p>
            <p className="text-xs text-gray-400">9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      {/* Button with consistent styling */}
      <button
        onClick={openGoogleMaps}
        className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#45B7BA] to-[#2F8FA0] text-black font-semibold rounded-lg hover:shadow-[0_0_15px_rgba(69,183,186,0.3)] transition-all duration-300 text-sm"
      >
        <Navigation className="w-4 h-4" />
        Open in Google Maps
      </button>
    </div>
  );
};

export default LocationBox;
