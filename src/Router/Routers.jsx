import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Acconut from "../Components/Account";
import Bill from "../Pages/Bill";
import Edit from "../Pages/Edit";
import Charge from "../Pages/Charge ";
import BuyerUserRegistration from "../Pages/Buyer-User-Registration";
import AccessManagement from "../Pages/Access-Management";
import CreateAccess from "../Pages/Create-Access";
import UserInformation from "../Pages/User-Information";
import StoreRegistration from "../Pages/Store-Registration";
import OrganizationRegistration from "../Pages/Organization-Registration";
import WarehouseHandling from "../Pages/Warehouse-Handling";
import WarehouseInformation from "../Pages/Warehouse-Information";
import Orders from "../Pages/Orders";
import Archive from "../Pages/Archive";
import Notices from "../Pages/Notices";
import ProgramManagement from "../Pages/Program-Management";
import Advertise from "../Pages/Advertise";
import DiscountCode from "../Pages/Discount-Code";
import DataMonitoring from "../Pages/Data-Monitoring";
import EmployeeManagement from "../Pages/Employee-Management";
import Dispacher from "../Pages/Dispacher";
import StoreWarehouse from "../Pages/Store-arehouse";
import SystemUserRegistration from "../Pages/System-User-Registration";
import History from "../Pages/History";
import ProductRegistration from "../Pages/Product-Registration";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route index element={<Acconut />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dispacher" element={<Dispacher />} />
        <Route
          path="/Product-Registration"
          element={<ProductRegistration />}
        />
        <Route path="/Bill" element={<Bill />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Charge" element={<Charge />} />
        <Route
          path="/Buyer-User-Registration"
          element={<BuyerUserRegistration />}
        />
        <Route
          path="/System-User-Registration"
          element={<SystemUserRegistration />}
        />
        <Route path="/Access-Management" element={<AccessManagement />} />
        <Route path="/Create-Access" element={<CreateAccess />} />
        <Route path="/User-Information" element={<UserInformation />} />
        <Route path="/Store-Registration" element={<StoreRegistration />} />
        <Route
          path="/Organization-Registration"
          element={<OrganizationRegistration />}
        />
        <Route path="/Warehouse-Handling" element={<WarehouseHandling />} />
        <Route
          path="/Warehouse-Information"
          element={<WarehouseInformation />}
        />
        <Route path="/History" element={<History />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Archive" element={<Archive />} />
        <Route path="/Notices" element={<Notices />} />
        <Route path="/Program-Management" element={<ProgramManagement />} />
        <Route path="/Advertise" element={<Advertise />} />
        <Route path="/Discount-Code" element={<DiscountCode />} />
        <Route path="/Data-Monitoring" element={<DataMonitoring />} />
        <Route path="/Employee-Management" element={<EmployeeManagement />} />
        <Route path="/Store-ٌarehouse" element={<StoreWarehouse />} />
      </Routes>
    </>
  );
};

export default Routers;
