// مكوّن الاشتراك في القائمة البريدية داخل الفوتر

const NewsletterForm = () => {
  return (
    <div className="bg-[#185E73] p-6 rounded-xl shadow-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <h4 className="text-sm font-semibold text-white/70 uppercase mb-1">
            NEWSLETTER
          </h4>
          <h3 className="text-xl font-bold uppercase">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-3 rounded-l-lg bg-white/10 border-none text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-[#45B7BA]"
          />
          <button className="bg-[#45B7BA] text-black hover:cursor-pointer font-bold p-3 rounded-r-lg hover:bg-[#2c989c] transition-colors">
            ↗
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
