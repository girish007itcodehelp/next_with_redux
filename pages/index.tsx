import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import baseAxios from "@baseApi/base";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const Home: React.FC<product[]> = (props) => {
  const fetchData = async () => {
    try {
      const res = await baseAxios.get("/products");
      console.log(res);
    } catch (err: any) {
      // throw new Error(err);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    // console.log(props);
  }, []);

  return (
    <div className="container px-3">
      <div className="py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3">
        {products.map((item, i) => (
          <div className="card" key={i}>
            <div className="relative w-25 h-40">
              <Image
                src={item.imageSrc}
                objectFit="cover"
                objectPosition={"center"}
                className="w-full myClass object-cover hover:scale-110 transition"
                layout="fill"
                priority={true}
              />
            </div>
            <div className="card-body">
              <div className="card-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt illum quas perferendis optio, delectus molestiae, modi
                officiis, provident dolor voluptates inventore ducimus minima
                cupiditate beatae quidem obcaecati laboriosam praesentium
                magnam?
              </div>
              <div className="card-title">Lorem ipsum dolor</div>
              <div className="card-title"></div>
              <div className="card-title"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

// interface rating

// [
//   {
//     category: String;
//   description: String;
//   id: Number;
//   image: String;
//   price: Number;
//   // rating: ;
//   title: String;
//   }
// ]
export interface Rating {
  rate: number;
  count: number;
}

export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let initialData: product[] = [];
  try {
    const res = await baseAxios.get<product[]>("/products");
    initialData = res.data;
    console.log(res);
  } catch (err: any) {
    // throw new Error(err.message);
  }

  return {
    props: {
      data: initialData,
    }, // will be passed to the page component as props
  };
};
