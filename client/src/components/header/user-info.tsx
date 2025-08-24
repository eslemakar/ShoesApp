import { useRef, useState, type FC } from "react";
import useUser from "../../hooks/useUser";
import { FaUserAlt as User, FaSearch as Search } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const UserInfo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { logout } = useAuth();
  const dropdownRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [user]);

  return (
    <div className="flex gap-6 xl:gap-10">
      <button className="cursor-pointer md:text-xl xl:text-2xl max-md:hidden">
        <Search />
      </button>

      {/* Dropdown butonuna ref eklendi */}
      <button
        ref={dropdownRef}
        className="relative cursor-pointer md:text-xl xl:text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User />
        {user && isOpen && (
          <div className="absolute top-10 -left-17 bg-white shadow-lg rounded-md z-[99] flex flex-col">
            <div className="header-button font-semibold cursor-default">
              {user.firstName} {user.lastName}
            </div>
            {user.role === "admin" && (
              <Link to="/admin" className="header-button">
                Admin Paneli
              </Link>
            )}
            <div
              onClick={() => logout.mutate()}
              className="header-button cursor-pointer"
            >
              Çıkış Yap
            </div>
          </div>
        )}
      </button>

      <button className="bg-my-yellow text-sm md:text-base xl:text-lg size-[20px] md:size-[24px] xl:size-[32px] rounded-full grid place-items-center">
        0
      </button>
    </div>
  );
};

export default UserInfo;
