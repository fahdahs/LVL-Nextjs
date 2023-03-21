import { CheckIcon, StarIcon } from "@heroicons/react/24/solid";
import SelectCars from "./components/SelectCars";

export default function FirstForm() {
  return (
    <div className="sm:col-span-8 lg:col-span-7">
      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
        Dacia logan essence
      </h2>

      <section aria-labelledby="information-heading" className="mt-4">
        <h3 id="information-heading" className="sr-only">
          Product information
        </h3>

        <div className="flex items-center">
          <p className="text-lg text-gray-900 sm:text-xl">195 DH</p>

          <div className="ml-4 border-l border-gray-300 pl-4">
            <h4 className="sr-only">Reviews</h4>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className="h-5 w-5 flex-shrink-0 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">5 out of 5 stars</p>
            </div>
          </div>
        </div>
      </section>
      {/**INPUTS HERE */}
      
      <SelectCars />
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <section aria-labelledby="options-heading" className="mt-6"></section>
    </div>
  );
}
