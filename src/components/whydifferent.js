import wedo from "../whywedifferent.png"
export default function WhyDifferent() {
    return (
        <div className={`flex flex-col justify-between lg:gap-[40px] lg:flex-row  items-center md:pt-[140px] pt-[85px]`}>

            <div className="max-w-[450px]">
                <h2 className="font-bold xl:text-[2.38rem] text-[1.50rem] mb-[10px] text-black">
                    How We Are <span className="font-bold text-[#1DBF73]">Different</span>
                </h2>

                <div className="flex flex-col mt-[20px] gap-[20px]">

                    <div className="gap-[10px] flex flex-col">
                        <p className="lg:text-[1.25rem] text-[1rem] font-semibold text-[#222222]">
                            Innovative Promise Bonds                        </p>
                        <p className="lg:text-[0.94rem] text-[0.75rem] text-[#222222]">
                            A unique financial model designed to support creators and ensure accountability.                        </p>
                    </div>
                    <div className="gap-[10px] flex flex-col">
                        <p className="lg:text-[1.25rem] text-[1rem] font-semibold text-[#222222]">
                            Community-Driven Approach                        </p>
                        <p className="lg:text-[0.94rem] text-[0.75rem] text-[#222222]">
                            Built for creators, by creators, with a focus on trust and transparency.</p>                    </div>
                    <div className="gap-[10px] flex flex-col">
                        <p className="lg:text-[1.25rem] text-[1rem] font-semibold text-[#222222]">
                            Dynamic Marketplace                        </p>
                        <p className="lg:text-[0.94rem] text-[0.75rem] text-[#222222]">
                            Built for creators, by creators, with a focus on trust and transparency.                        </p>
                    </div>

                    <div className="gap-[10px] flex flex-col">
                        <p className="lg:text-[1.25rem] text-[1rem] font-semibold text-[#222222]">
                            Level-Up System                        </p>
                        <p className="lg:text-[0.94rem] text-[0.75rem] text-[#222222]">
                            Our platform rewards dedication and performance, unlocking greater opportunities as you grow.                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 max-h-[580px] max-w-[630px] md:pl-10 pt-6">
                <img src={wedo} alt="machli" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}