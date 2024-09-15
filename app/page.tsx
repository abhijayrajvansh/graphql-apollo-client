import React from "react";
import GoogleVerificationToken from '@/components/GoogleVerificationToken';

const page = () => {
  return (
    <section className="flex flex-col container items-center mx-auto">
      <h1 className="font-semibold text-3xl text-center my-5"> graphql client implementation</h1>
      <GoogleVerificationToken />
    </section>  
  );
};

export default page;
