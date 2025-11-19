import Link from "next/link";

const CopyrightBar = () => {
  return (
    <div className="bg-[#052636] py-6 mt-8">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
        <p className="mb-2 sm:mb-0">© 2025 Outwin. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopyrightBar;
