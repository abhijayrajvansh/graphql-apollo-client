"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { getContinentsName } from "@/app/graphql/queries";

const Continents = () => {
  const { loading, error, data } = useQuery(getContinentsName);

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-center  font-semibold">Continents Names:</h1>
      {loading && <p className="text-center">Loading...</p>}

      {error && <p>Error : {error.message}</p>}

      <div className="w-40 mt-5">
        {
          data && data.continents.map((cont: {name: string}) => {
            return (
              <li>{cont.name}</li>
            )
          })
        }
      </div>  
    </section>
  );
};

export default Continents;
