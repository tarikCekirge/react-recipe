import React, { useState, useRef } from "react";
import { IoMdRemove } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import useFetch from "../../hooks/useFetch";

const Create = () => {
  const initialValue = { baslik: "", aciklama: "", malzemeler: [""], hazirlanisi: "", resim: "", url: "" };
  const [formData, setFormData] = useState(initialValue);
  const addButtonRef = useRef();
  const { data, loading, error, fetchData } = useFetch("http://localhost:3000/tarifler");

  const changeHandler = (e) => {
    const { id, value } = e.target;
    if (id.startsWith("malzeme-")) {
      const index = parseInt(id.split("-")[1]);
      const updatedMalzemeler = [...formData.malzemeler];
      updatedMalzemeler[index] = value;
      setFormData((prevState) => ({ ...prevState, malzemeler: updatedMalzemeler }));
    } else {
      setFormData((prevState) => ({ ...prevState, [id]: value }));
    }
    if (formData.malzemeler.some((item) => item === "")) {
      addButtonRef.current.disabled = true;
    } else {
      addButtonRef.current.disabled = false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetchData("http://localhost:3000/tarifler", "POST", formData);
    setFormData(initialValue);
  };

  const addNewMaterial = () => {
    setFormData((prevState) => ({
      ...prevState,
      malzemeler: [...prevState.malzemeler, ""],
    }));
  };

  const removeMaterial = (index) => {
    const updatedMalzemeler = [...formData.malzemeler];
    updatedMalzemeler.splice(index, 1);
    setFormData((prevState) => ({ ...prevState, malzemeler: updatedMalzemeler }));
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
              <span className="text-gray-700">Malzemeler</span>
              {formData.malzemeler.map((item, key) => (
                <div className="flex items-center gap-2" key={key}>
                  <input type="text" onChange={changeHandler} id={`malzeme-${key}`} name={`malzeme-${key}`} value={item} className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" />
                  <button type="button" onClick={() => removeMaterial(key)}>
                    <IoMdRemove />
                  </button>
                </div>
              ))}
              <button
                className="flex items-center justify-center p-4 gap-2 text-white dark:text-gray-800 font-bold text-sm w-full disabled:opacity-30"
                type="button"
                onClick={addNewMaterial}
                ref={addButtonRef}
                disabled={formData.malzemeler.some((item) => item === "")}
              >
                Yeni Malzeme <IoAddOutline />
              </button>
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
            <button type="submit" className="block p-3 font-bold bg-white dark:bg-gray-800 rounded-md text-gray-800  dark:text-white">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
