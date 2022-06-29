import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import baseAxios from "@baseApi/base";
import { Key, useEffect } from "react";
import getStore from "redux/store";
import { getProducts, MultProducts } from "redux/slices/homeProductsSlice";
import { useDispatch, useSelector } from "react-redux";

const Home: React.FC = () => {
  // const { data } = props;
  // const dispatch = useDispatch();
  // let data: any = [];
  const data = useSelector(MultProducts);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div className="container px-3">
      <div className="py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3">
        {data?.map((item: any, i: Key) => (
          <div className="card" key={i}>
            <div className="relative w-25 h-40">
              <Image
                src={item.image}
                objectFit="cover"
                objectPosition={"center"}
                className="w-full myClass object-cover hover:scale-110 transition"
                layout="fill"
                priority={true}
              />
            </div>
            <div className="card-body">
              <div className="card-title">{item.title}</div>
              <div className="font-bold text-slate-400">${item.price}</div>
              <div className="flex justify-between">
                <div className="text-sm text-slate-200 font-semibold">
                  {item.rating.rate}
                </div>
                <div className="font-semibold text-slate-200 text-sm">
                  {item.rating.count}
                </div>
              </div>
              <button className="btn-primary"> Add to Cart</button>
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

// export interface product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: Rating;
// }

// export interface props {
//   data: product[];
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   let initialData: product[] = [];
//   try {
//     const res = await baseAxios.get<product[]>("/products");
//     initialData = res.data;
//     console.log(res);
//   } catch (err: any) {
//     throw new Error(err.message);
//   }

//   return {
//     props: {
//       data: initialData,
//     }, // will be passed to the page component as props
//   };
// };
export const getServerSideProps: GetServerSideProps = async (context) => {
  const store = getStore();
  await store.dispatch(getProducts());
  return {
    props: {
      initialState: store.getState(),
    },
  };
};
