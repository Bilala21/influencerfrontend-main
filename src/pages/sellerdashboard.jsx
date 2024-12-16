import { useEffect, useState } from "react";
import UserInfo from "../components/userinfo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { BASE_URL } from "../baseURL";
import SellerBondAnalyticsChart from "../components/sellercomponents/sellersplinechart";
import SellerBondListingTable from "../components/sellercomponents/sellerbondlisting";
import SellerMissionListingTable from "../components/sellercomponents/sellermissionlistingtable";
import SellerNotificationCards from "../components/sellercomponents/sellercards";
import OfferListingTable from "../components/sellercomponents/offerlistingtable";
import SellerUserInfo from "../components/sellercomponents/sellerinfo";
import SellerLineChartComponent from "../components/sellerlinechartcomponent";
import SellerPieChartComponent from "../components/sellercirclechart";
import SellerHalfPieChartComponent from "../components/sellerhalfcircle";
import SellerMissionStatsChart from "../components/sellermultiline";


export default function SellerDashboard() {
    const [state, setState] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchDashboardData();
    }, [])
    const fetchDashboardData = async () => {
        try {
            let token = localStorage.getItem('buyerToken')
            let headers = {
                headers: {
                    authorization: `Bearer ${token}`
                }
            }
            let response = await axios.get(`${BASE_URL}/get-buyerdashboardData`, headers)
            console.log("RESPONSE")
            console.log(response.data)
            setState(response.data)
            setLoading(false)
        } catch (e) {
            if (e?.response?.data?.error) {
                toast.dismiss()
                toast.error(e?.response?.data?.error, { containerId: "containerE" })

            } else {
                toast.dismiss()
                toast.error("Client error please try again", { containerId: "containerE" })
            }
            return;
        }
    }
    return (
        <>
            <ToastContainer containerId="containerE" limit={1} />
            <div className="bg-primary-gray-300 p-[60px] pt-8">
                <div className="w-full">
                    <h1 className="font-bold text-[32px]">Dashboard</h1>
                    <div className="text-base text-primary-dark mb-14">Your hub for managing projects, bonds, and account activity.</div>
                    <SellerNotificationCards loading={loading} state={state} />
                    <div className="grid grid-cols-2 lg:grid-cols-5 mt-[30px] gap-[30px]">
                        <div className=" lg:col-span-3 bg-white">
                            <SellerLineChartComponent />
                        </div>
                        <div className=" lg:col-span-2 bg-white ">
                            <SellerPieChartComponent state={state} loading={loading} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-12 mt-[30px] gap-[30px]">
                        <div className=" lg:col-span-4 bg-white ">
                            <SellerHalfPieChartComponent state={state} loading={loading} />
                        </div>
                        <div className=" lg:col-span-8 bg-white ">
                            <SellerMissionStatsChart state={state} loading={loading} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}