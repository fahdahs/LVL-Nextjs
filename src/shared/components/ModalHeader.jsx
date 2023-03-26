import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { client } from "@/utils/sanity-client-react";
import { useEffect } from "react";
import { setData } from "@/config/factor-slice";

import FirstForm from "../FirstForm";
import SecondeForm from "../SecondeForm";
import SelectCars from "./SelectCars";

const query = `*[_type == "cars"]{
  id,
  "slug": slug.current,
  title,
  price,
  "image": image.asset->url
}`;

export default function ModalHeader() {
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
      <input type="checkbox" id="my-modal-Header" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box md:max-w-xl w-screen md:min-h-[700px] min-h-screen lg:px-8 px-4 rounded-none md:rounded-md dark:bg-primary-dark shadow-3xl">
          <div className="md:px-6 px-1.5">
          </div>
          <div>
            {activeForm === 1 ? (
              <FirstForm
                carName={myCar?.title}
                carPrice={myCar?.price}
                modalClose={"my-modal-Header"}
              >
                <SelectCars />
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
