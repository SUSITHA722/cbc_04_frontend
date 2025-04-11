import { Link, Route, Routes } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";

export default function AdminPage() {
    return (
        <div className="w-full h-screen bg-gray-400 flex p-2">
           <div className="h-full w-[300px] ">
               <Link to="/admin/products" className="p-2 flex items-center"><AiFillProduct className="mr-2" />Products</Link>
               <Link to="/admin/orders" className="p-2 flex items-center"><MdProductionQuantityLimits className="mr-2"/>Orders</Link>
               <Link to="/admin/users" className="p-2 flex items-center"><FaUsers className="mr-2"/>Users</Link>
        
           </div>
           <div className="h-full bg-white w-[calc(100vw-300px)] rounded-lg">
                 <Routes path="/*">
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>

                 </Routes>

           </div>
        </div>
    )
}