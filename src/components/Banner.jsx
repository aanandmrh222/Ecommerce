import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="relative bg-indigo-600">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-white">
            <span className="md:hidden">Summer sale now on!</span>
            <span className="hidden md:inline">
              Big news! Summer sale is now live — up to 50% off on all products.
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <a
                href="/categories"
                className="font-bold text-white hover:text-indigo-50 flex items-center justify-center sm:inline-flex"
              >
                Shop now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
