import React from "react";
import small from "../assets/small.svg";
import big from "../assets/big.svg";

const ThankYou = () => {
  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px] flex flex-col justify-center items-center">
      <img
        src={small}
        alt="checkmark"
        className="translate-y-36 -translate-x-44"
      />
      <img
        src={big}
        alt="checkmark"
        className="translate-y-44 translate-x-44"
      />
      <div className="border-2 p-5 text-center border-white rounded-lg">
        <h1 className="mt-2 text-3xl font-[800] mb-2 text-white">
          Tabriklaymiz!
        </h1>
        <p className="text-white mt-3 text-center">
          Ro‘xatdan o‘tish muvaffaqiyatli yakunlandi
        </p>
      </div>
      <p className="text-white mt-3  ml-12 mr-auto my-8">
        Siz bilan operatorlarimiz <br />
        48 soat ichida bog‘lanishadi
      </p>

      <div
        className={`bg-primary-lightBlue flex flex-col  items-center py-3 space-x-8 w-100 rounded-md`}
      >
        <div
          className={` flex  justify-right items-center py-3 space-x-8 rounded-md}`}
        >
          <p className="font-bold text-2xl">Tasdiqlandi</p>
        </div>
        <div className="border-dashed border-b border-black w-full -translate-x-4"></div>

        <div className="bg-primary-lightBlue py-3 px-5 rounded-lg flex align-center justify-between gap-5 mb-2">
          <p>
            Kurs: <span className="font-bold">Kino va rus tili</span>
            <br />
            Ism: <span className="font-bold">Allabergan Egamberdiyev</span>
            <br />
            Telefon: <span className="font-bold">+998 (78) 113-13-93</span>
            <br />
            Tarif:
            <span className="font-bold"> Premium </span>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
