import Layout from "../components/Layout";
const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
    href: "#",
    price: "₹61,999",
    color: "Orange",
    imageAlt: "Nike Air Force 1 07 LV8",
    quantity: 1,
  },
];

const UserDashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-5 lg:py-8 bg-gray-100">
        {/* Top  */}
        <div className="top ">
          {/* main  */}
          <div className="py-5 rounded-xl border border-blue-gray-100">
            {/* image  */}
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            {/* text  */}
            <div className="">
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Name :</span> Abrahan Piloto
              </h1>
              <h1 className=" text-center text-lg">
                <span className=" font-bold">Email :</span> test@gmail.com
              </h1>
            </div>
          </div>
        </div>

        {/* bottom  */}
        <div className="bottom">
          {/* main 1 */}
          <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
            {/* text  */}
            <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>

            {/* main 2 */}
            <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-gray-400 md:flex-row">
              {/* main 3  */}
              <div className="w-full bg-black md:max-w-xs">
                {/* left  */}
                <div className="p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                    <div className="mb-4">
                      <div className="text-sm font-semibold text-white">
                        Orden Id
                      </div>
                      <div className="text-sm font-medium text-white">
                        #74557994327
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold text-white">
                        Fecha
                      </div>
                      <div className="text-sm font-medium text-white">
                        4 Marzo, 2025
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold text-white">
                        Monto Total
                      </div>
                      <div className="text-sm font-medium text-white">
                        S/ 84,499
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-semibold text-white">
                        Estado de la orden
                      </div>
                      <div className="text-sm font-bold text-green-400">
                        Confirmada
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* right  */}
              <div className="flex-1">
                <div className="p-8">
                  <ul className="-my-7 divide-y divide-gray-200">
                    {products.map((product) => (
                      <li
                        key={product.id}
                        className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                      >
                        <div className="flex flex-1 items-stretch">
                          <div className="flex-shrink-0">
                            <img
                              className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                              src={product.imageSrc}
                              alt={product.imageSrc}
                            />
                          </div>

                          <div className="ml-5 flex flex-col justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-bold text-gray-900">
                                {product.name}
                              </p>
                              <p className="mt-1.5 text-sm font-medium text-gray-500">
                                {product.color}
                              </p>
                            </div>

                            <p className="mt-4 text-sm font-medium text-gray-500">
                              x {product.quantity}
                            </p>
                          </div>
                        </div>

                        <div className="ml-auto flex flex-col items-end justify-between">
                          <p className="text-right text-sm font-bold text-gray-900">
                            {product.price}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
