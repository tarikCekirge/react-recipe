import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card";

const Home = () => {
  const { data, loading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData("http://localhost:3000/tarifler");
  }, [fetchData]);
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{data && data.map((item) => <Card key={item.id} item={item} />)}</div>
    </>
  );
};

export default Home;
