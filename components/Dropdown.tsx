import Image from "next/image";
import Link from "next/link";
import { roles } from "@/data/data";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
        <h4>Role</h4>
        <MdOutlineKeyboardArrowDown size={25}/>
      </div>
      <ul>
        {roles.map((role) => (
          <Link key={role.id} href={`/${role.route_link}`}>
            <li key={role.id}>
              <span>
                <div>
                  <Image
                    className="dropdown-li-img"
                    src={role.imageUrl}
                    alt="role"
                    width={40}
                    height={40}
                  />
                </div>
              </span>
              <span> {role.title} </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
