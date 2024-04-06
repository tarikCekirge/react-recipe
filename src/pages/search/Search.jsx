import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const { data, loading, error, fetchData } = useFetch();

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const url = "http://localhost:3000/tarifler?q=" + query;

  useEffect(() => {
    fetchData(url);
    console.log(data);
  }, [url]);

  return (
    <>
      {query && <h2 className="text-2xl font-bold mb-4 text-white dark:text-gray-800">Aranan Kelime: {query}</h2>}
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}

      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{data && data.map((item) => <Card key={item.id} item={item} />)}</div>
    </>
  );
};

export default Search;
