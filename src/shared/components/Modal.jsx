import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { client } from "@/utils/sanity-client-react";
import { useEffect } from "react";
import { setData } from "@/config/factor-slice";

import FirstForm from "../FirstForm";
import SecondeForm from "../SecondeForm";

const query = `*[_type == "cars"]{
  id,
  "slug": slug.current,
  title,
  price,
  "image": image.asset->url
}`;

export default function Modal() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const data = await client.fetch(query);
      return data;
    }
    fetchData().then((data) => dispatch(setData(data)));
  }, [dispatch]);

  const carsData = useSelector((state) => state.data);
  const carId = useSelector((state) => state.id);
  const activeForm = useSelector((state) => state.modals.activeForm);

  const myCar = carsData?.find((item) => item.id === carId);

  return (
    <>
      <input type="checkbox" id="my-modal-categorie" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box md:max-w-xl w-screen md:min-h-[700px] min-h-screen lg:px-8 px-4 rounded-none md:rounded-md dark:bg-primary-dark shadow-3xl">
          <div>
            {activeForm === 1 ? (
              <FirstForm
                carName={myCar?.title}
                carPrice={myCar?.price}
                ml={"ml-3"}
                modalClose="my-modal-categorie"
              >
                <div className="flex md:px-6 px-1.5 md:flex-row flex-col pt-4 items-center justify-between">
                  <h2 className="text-lg md:mb-0 mb-4 font-bold text-gray-900 dark:text-gray-100">
                    {myCar?.title}
                  </h2>

                  <section aria-labelledby="information-heading">
                    <h3 id="information-heading" className="sr-only">
                      Product information
                    </h3>

                    <div className="flex  items-center">
                      <p className="text-gray-900 dark:text-gray-300">
                        {myCar?.price} Dh/Jour
                      </p>

                      <div className="ml-4 border-l border-gray-300 pl-4">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className="h-4 w-4 flex-shrink-0 text-yellow-400"
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">5 out of 5 stars</p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div className="md:flex flex-col w-full border-opacity-50 my-4 hidden">
                  <div className="divider text-sm text-gray-600">
                    Assurez-vous que les informations sont correctes
                  </div>
                </div>
              </FirstForm>
            ) : (
              <SecondeForm />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
