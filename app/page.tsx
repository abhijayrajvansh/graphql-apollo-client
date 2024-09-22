import Home from "@/components/Home";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col container items-center mx-auto">
      <h1 className="font-semibold text-3xl text-center my-5">graphql + typescript client implementation</h1>
      <Home />
    </section>  
  );
};

export default page;
