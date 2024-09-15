"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { generateGoogleSignedInToken } from "@/app/graphql/queries";
import { token } from "@/constants/config";

const Continents = () => {
  const { loading, error, data } = useQuery(generateGoogleSignedInToken, {
    variables: { token },
  });

  return (
    <section className="flex flex-col items-center max-w-300">
      <h1 className="text-center text-xl my-5 font-semibold">
        Signed Google Verification Token:
      </h1>

      <p>{`query generateGoogleToken ($token: String!) { verifyGoogleToken(token: $token) }`}</p>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p>Error : {error.message}</p>}

      <div className="mt-5 w-3/4 h-40 flex justify-center">
        {data && (
          <div className="flex gap-2 w-full">
            <span className="font-semibold">token:</span>
            <span className="flex-grow break-all">
              {data.verifyGoogleToken}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Continents;
