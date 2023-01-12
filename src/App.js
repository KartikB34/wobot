import { useState } from "react";

function App() {

  const [select, setSelect] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] p-4 md:p-0">
      
      <div className="md:w-full md:pl-[60px] mb-16 mt-12 md:mb-0">
        <img src="./logo.svg" alt="logo" />
      </div>

      <form onSubmit={handleSubmit} className="p-4 z-30 bg-white md:px-[91px] md:py-[40px] flex flex-col items-center rounded-xl shadow-xl">

        <img src="./solidlines.svg" alt="lines" />
        <p className="text-xl mt-[30px]">It's a delight to have you</p>
        <p className="text-xl">onboard</p>
        
        <p className="mt-[30px]">Help us know you better</p>
        <p>(This is how we optimize Wobot as per your business needs)</p>

        <div className="w-full mt-[30px]">
          <p>Company name</p>
          <input type="text" required={true} placeholder="e.g. Example Inc" className="border w-full border-[#CED4DA] px-4 py-1 outline-gray-400" />
        </div>

        <div className="w-full mt-[30px]">
          <p>Industry</p>
          <select required={true} name="Industry" id="Industry" className="border w-full border-[#CED4DA] px-4 py-1 outline-gray-400">
            <option value="select">Select</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="w-full mt-[30px]">
          <p>Company size</p>
          <div className="flex justify-between mt-4 flex-wrap">
            <div onClick={()=>setSelect(1)} className={`px-1 my-1 hover:cursor-pointer ${select===1? "bg-[#3766E8] text-white": "bg-[#F0F0F0]"}`}>1-10</div>
            <div onClick={()=>setSelect(2)} className={`px-1 my-1 hover:cursor-pointer ${select===2? "bg-[#3766E8] text-white": "bg-[#F0F0F0]"}`}>21-50</div>
            <div onClick={()=>setSelect(3)} className={`px-1 my-1 hover:cursor-pointer ${select===3? "bg-[#3766E8] text-white": "bg-[#F0F0F0]"}`}>51-200</div>
            <div onClick={()=>setSelect(4)} className={`px-1 my-1 hover:cursor-pointer ${select===4? "bg-[#3766E8] text-white": "bg-[#F0F0F0]"}`}>201-500</div>
            <div onClick={()=>setSelect(5)} className={`px-1 my-1 hover:cursor-pointer ${select===5? "bg-[#3766E8] text-white": "bg-[#F0F0F0]"}`}>500+</div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#3766E8] mt-[30px] w-full py-2 rounded-md font-semibold text-white hover:text-[#3766E8] hover:bg-white border border-[#3766E8]"
        >
          Get started
        </button>

      </form>

      <img src="./line.svg" alt="line" className="absolute left-0"/>
      <img src="./line.svg" alt="line" className="absolute right-0"/>

      <div className="w-full text-center my-12">
        <p>Terms of use  |  Privacy policy </p>
      </div>
    </div>
  );
}

export default App;
