import wedo from "../ourvision.png"
export default function OurVision() {
    const base_path_icon = "/assets/images/icons"
    const json_data = [
        {
            img: "cv.svg",
            heading: "Building Trust",
            text: "We aim to transform creator-audience relationships by fostering genuine trust and meaningful collaboration.",
        },
        {
            img: "icon1.svg",
            heading: "Empowering Growth",
            text: "Through innovative financial tools, we empower creators and audiences to grow together.",
        },
        {
            img: "secure.svg",
            heading: "Redefining Connections",
            text: "Our goal is to create sustainable, impactful interactions that redefine how creators and supporters connect.",
        },
    ]
    return (
        <div className="relative md:mt-[140px]">
            <div className="bg-primary-sea-green-300 md:px-0 md:mt-0 mt-[50px] px-4 relative before:hidden md:before:block py-10 before:w-[250px] before:h-full before:bg-white before:absolute before:right-0 before:top-0
 ">
                <div className=" md:pt-[170px] md:pb-[260px] pb-[204px] md:pl-20 relative z-20">
                    <h2 className="font-bold xl:text-[2.38rem] text-[1.50rem] mb-[10px] text-black">
                        Our <span className="font-bold text-[#1DBF73]">Vision</span>
                    </h2>
                    <p className="lg:text-[0.94rem] text-[0.75rem] text-[#222222] md:pb-9 pb-5">
                        Inspiring trust, fostering growth, and reshaping connections between creators and audiences. </p>
                    <div className="flex gap-7 md:flex-row flex-col">
                        {
                            json_data.map((item) => {
                                return (
                                    <div className="md:max-w-[330px] bg-white pb-5 pt-7 pl-10 pr-4 rounded-lg shadow-custom">
                                        <div className="h-10 w-10 rounded-full overflow-hidden">
                                            <img src={`${base_path_icon}/${item.img}`} alt="profile" className="!h-full w-full" />
                                        </div>
                                        <div className="text-primary-dark py-[14px] text-xl font-medium">{item.heading}</div>
                                        <p className="text-primary-dark text-base">
                                            {item.text}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="md:max-h-[700px] md:w-[580px] md:absolute top-1/2 -translate-y-1/2 right-0 md:pl-5 md:px-0 px-4">
                <img src={wedo} alt="machli" className="w-full h-full object-cover" />
            </div>
        </div>
    )
}