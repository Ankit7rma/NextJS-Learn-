import React, { useEffect, useState } from "react";
import useSWR from "swr";
export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);
  {
    //   useEffect(() => {
    //     setIsLoading(true);
    //     fetch("https://next-js-dd898-default-rtdb.firebaseio.com/Sales.json")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         const transformedSales = [];
    //         for (const key in data) {
    //           transformedSales.push({
    //             id: key,
    //             username: data[key].username,
    //             volume: data[key].volume,
    //           });
    //         }
    //         setSales(transformedSales);
    //         setIsLoading(false);
    //       });
    //   }, []);
  }
  //   if (isLoading) {
  //     return <p>Loading ...</p>;
  //   }

  //   if (!sales) {
  //     return <p>No data yet</p>;
  //   }

  const { data, error } = useSWR(
    "https://next-js-dd898-default-rtdb.firebaseio.com/Sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  //   const { data, error } = useSWR(
  //     "https://next-js-dd898-default-rtdb.firebaseio.com/Sales.json"
  //   );

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load data </p>;
  }

  if (!data && !sales) {
    return <p>Loading ...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username}-${sale.volume}
        </li>
      ))}
    </ul>
  );
}
// Just different syntax for the exact same execution as done on client side using useeffect its is in serverside
export async function getStaticProps() {
  const response = await fetch(
    "https://next-js-dd898-default-rtdb.firebaseio.com/Sales.json"
  );
  const data = await response.json();
  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return { props: { sales: transformedSales }, revalidate: 10 };
}
