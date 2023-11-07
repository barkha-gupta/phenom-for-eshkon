import Image from "next/image";
import Link from "next/link";
import { roles } from "@/data/data";
const Dropdown = () => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
        <h4>Role</h4>
        <Image
          src="/images/da.jpg"
          alt="down-arrow-icon"
          width={20}
          height={20}
        />
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
