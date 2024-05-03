import { NavLink } from "react-router-dom";
import { MdHomeFilled, MdCategory, MdShop2, MdContacts } from "react-icons/md";

const Navbar = () => {
  return (
    <nav
    // className={`${containerStyles}`}
    >
      <NavLink to="/">
        <div className="flexCenter gap-x-1">
          <MdHomeFilled />
          Home
        </div>
      </NavLink>
      <NavLink to="/mens">
        <div className="flexCenter gap-x-1">
          <MdCategory />
          Mens
        </div>
      </NavLink>
      <NavLink to="/womens">
        <div className="flexCenter gap-x-1">
          <MdShop2 />
          Womens
        </div>
      </NavLink>
      <NavLink to="/kids">
        <div className="flexCenter gap-x-1">
          <MdContacts />
          Kids
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
