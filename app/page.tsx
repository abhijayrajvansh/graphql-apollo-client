import Continents from "@/components/Continents";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col container mx-auto">
      <h1 className="font-semibold text-2xl text-center my-5"> graphql client implementation</h1>
      <Continents />
    </section>
  );
};

export default page;
