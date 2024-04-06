import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContexts } from "../contexts/ThemeContexts";

const Card = (props) => {
  const { color } = useContext(ThemeContexts);
  const { id, baslik, aciklama, resim, url } = props.item;

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img className="rounded-t-lg" src={`img/${resim}`} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">{baslik}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">{aciklama}</p>
          <Link style={{ backgroundColor: color }} to={`tarifler/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg hover:opacity-80">
            Devamı
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
