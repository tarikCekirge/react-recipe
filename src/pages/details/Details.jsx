import React, { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Details = () => {
  const { data, loading, error, fetchData } = useFetch();
  const { id } = useParams();
  const url = "http://localhost:3000/tarifler/" + id;

  useEffect(() => {
    fetchData(url);
    console.log(data);
  }, [url]);
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-full md:col-span-4">
              <img src={`/img/${data.resim}`} alt="" />
            </div>
            <div className="col-span-full md:col-span-8">
              <h1 className="text-2xl font-bold mb-1">{data.baslik}</h1>
              <p>{data.aciklama}</p>
              <hr className="my-3" />
              <ul>
                {data.malzemeler.map((malzeme, index) => {
                  return <li key={index}> {malzeme}</li>;
                })}
              </ul>
            </div>
            <div className="col-span-full">
              <p>{data.hazirlanisi}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
