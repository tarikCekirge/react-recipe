import React, { useState } from "react";

const Create = () => {
  const initialValue = { baslik: "", aciklama: "", hazirlanisi: "", resim: "", url: "" };
  const [formData, setFormData] = useState(initialValue);

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialValue);
  };
  return (
    <>
      <div className="container max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-white dark:text-gray-800">Yeni Tarif Ekle</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Başlık</span>
              <input name="baslik" id="baslik" value={formData.baslik} onChange={changeHandler} type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="" />
            </label>
            <label className="block">
              <span className="text-gray-700">Açıklama</span>
              <input name="aciklama" id="aciklama" value={formData.aciklama} onChange={changeHandler} type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="" />
            </label>
            <label className="block">
              <span className="text-gray-700">Hazırlanışı</span>
              <textarea name="hazirlanisi" id="hazirlanisi" value={formData.hazirlanisi} onChange={changeHandler} type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="" />
            </label>
            <label className="block">
              <span className="text-gray-700">Resim</span>
              <input name="resim" id="resim" value={formData.resim} onChange={changeHandler} type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="" />
            </label>
            <label className="block">
              <span className="text-gray-700">Url</span>
              <input name="url" id="url" value={formData.url} onChange={changeHandler} type="text" className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="" />
            </label>
            <button className="block p-3 font-bold bg-white dark:bg-gray-800 rounded-md text-gray-800  dark:text-white">Kaydet</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
