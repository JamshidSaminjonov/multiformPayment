import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PlansContext from "../context/PlansContext";
import arrow from "../assets/arrow.svg";
import copy from "../assets/copy.svg";
import yuklash from "../assets/yuklash.svg";
import CopyTextComponent from "../components/compytext";

const SelectPlan = () => {
  const navigate = useNavigate();
  const [toggleYearly, setToggleYearly] = useState(false);
  const [num, setNum] = useState(0);

  const { monthlyPlans } = useContext(PlansContext);
  const { yearlyPlans } = useContext(PlansContext);
  const { selectedMonthlyPlan } = useContext(PlansContext);
  const { selectedYearlyPlan } = useContext(PlansContext);

  const handleToggleYearly = () => {
    setToggleYearly((prev) => !prev);
  };

  const getMonthlyDetails = (id) => {
    selectedMonthlyPlan.title = monthlyPlans[id].title;
    selectedMonthlyPlan.price = monthlyPlans[id].price;

    setNum(id + 1);
  };

  const getYearlyDetails = (id) => {
    selectedYearlyPlan.title = yearlyPlans[id].title;
    selectedYearlyPlan.price = yearlyPlans[id].price;

    setNum(id + 1);
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    if (selectedMonthlyPlan.title !== "" || selectedYearlyPlan.title !== "") {
      navigate("/addons");
    } else {
      alert("Please choose a plan");
    }
  };

  //upload image
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here you can perform further actions like uploading the file to a server
      console.log("Selected file:", selectedFile);
      // Reset the selected file after uploading
      setSelectedFile(null);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="sm:basis-[60%] w-[300px] sm:w-[100%] h-[100%] sm:pr-[80px]">
      <h1 className="mt-10 text-3xl font-[800] mb-2 text-white border w-40 p-2 rounded-lg">
        2-qadam
      </h1>
      <p className="text-white mb-6">
        To‘lovni amalga oshirib, to‘lov chekini “skrenshot” qiling va rasmni
        saytga yuklang
      </p>
      <form onSubmit={handleSumbit} className="flex flex-col relative">
        <div
          className={`${
            toggleYearly ? "hidden" : "block"
          } plansMonthly mb-8 flex flex-col sm:flex-row justify-between cursor-pointer`}
        >
          {monthlyPlans.map((item, idx) => {
            return (
              <div
                onClick={() => getMonthlyDetails(idx)}
                key={item.id}
                className={`plan ${
                  num != idx + 1 ? "bg-white" : "bg-primary-lightBlue"
                } border-2 ${
                  num != idx + 1
                    ? "border-neutral-lightGray"
                    : "border-primary-purplishBlue"
                } rounded-md p-4 flex items-center justify-around mb-4 sm:mb-0 sm:block basis-[31%] transition-all duration-300 hover:border-primary-purplishBlue`}
              >
                <img className="sm:mb-10" src={item.img} alt="plan image" />
              </div>
            );
          })}
        </div>

        <div
          className={`${
            toggleYearly ? "block" : "hidden"
          } plansYearly mb-8 flex flex-col sm:flex-row justify-between cursor-pointer`}
        >
          {yearlyPlans.map((item, idx) => {
            return (
              <div
                onClick={() => getYearlyDetails(idx)}
                key={item.id}
                className={`plan ${
                  num != idx + 1 ? "bg-white" : "bg-primary-lightBlue"
                } border-2 ${
                  num != idx + 1
                    ? "border-neutral-lightGray"
                    : "border-primary-purplishBlue"
                } rounded-md p-4 flex items-center justify-around mb-4 sm:mb-0 sm:block sm:basis-[31%] transition-all duration-300 hover:border-primary-purplishBlue`}
              >
                <img className="sm:mb-10" src={item.img} alt="plan image" />
              </div>
            );
          })}
        </div>

        <div
          className={`bg-neutral-alabaster flex flex-col  items-center py-3 space-x-8 rounded-md`}
        >
          <div
            className={`bg-neutral-alabaster flex  justify-center items-center py-3 space-x-8 rounded-md}`}
          >
            <p className="font-bold text-2xl">Sberbank orqali to‘lov</p>
            <img src={arrow} alt="yuq" />
          </div>
          <div className="border-dashed border-b border-black w-full -translate-x-4"></div>
          <p className="font-bold text-3xl my-2 w-80">3990₽</p>

          <CopyTextComponent />
        </div>
        <div className="flex justify-center my-5">
          <div className="bg-primary-lightBlue py-3 px-5 rounded-lg flex align-center gap-1 mb-2 w-80  justify-center border-dashed border border-black">
            <input type="file" onChange={handleFileChange} className="w-100" />{" "}
            <button
              onClick={handleUpload}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              {" "}
              Chekni yuklash
            </button>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="bg-primary-lightBlue py-3 px-5 rounded-lg flex align-center gap-3  mb-2  justify-center mt-5">
            <div className="w-6 bg-lime-500 rounded-full"></div>
            <p>To‘liq to‘lov qildim</p>
          </div>
          <div className="bg-primary-lightBlue py-3 px-5 rounded-lg flex align-center gap-3  mb-2   justify-center mt-5">
            <div className="w-6 bg-rose-500 rounded-full"></div>
            <p>Qisman to‘lov qildim</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <button
            onClick={() => navigate("/")}
            className="text-primary-marineBlue font-[500] bg-white border-0 rounded-md px-6 py-3 capitalize transition-all duration-300 hover:text-white hover:bg-primary-marineBlue cursor-pointer"
          >
            Orqaga
          </button>

          <button
            className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
            type="sumbit"
            onClick={() => navigate("/thankyou")}
          >
            Tayyor
          </button>
        </div>
      </form>
    </div>
  );
};

export default SelectPlan;
