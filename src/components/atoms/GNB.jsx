import { NavLink, useNavigate } from "react-router-dom";
import Image from "./Image";
import Logo from "/logo.svg";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";

/**
 * GNB 컴포넌트
 *
 * 사장님 사이트에서 전역적으로 상단에 표시되는 네비게이션 바입니다.
 */
const GNB = () => {
  const navigate = useNavigate();
  const { userName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const menus = [
    { label: "매출관리", path: "/sales" },
    { label: "매장관리", path: "/manage" },
  ];

  return (
    <nav className="fixed top-0 z-50 flex w-full h-24 bg-white border-b border-gray-300 min-w-min">
      <div className="w-[1280px] items-center flex-between mx-auto px-4">
        <section className="flex-items-center-8">
          <NavLink to="/">
            <Image src={Logo} alt="뽀득뽀득 사장님 페이지 로고" />
          </NavLink>
          <div>
            {menus.map((menu, index) => (
              <NavLink
                className={({ isActive }) =>
                  `text-xl p-6 rounded-t-xl hover:bg-gray-100 ${
                    isActive ? "border-b-8 border-primary text-primary" : ""
                  }`
                }
                key={index}
                to={menu.path}>
                {menu.label}
              </NavLink>
            ))}
          </div>
        </section>
        <section className="flex-4">
          <div className="text-right">
            <div className="text-xl">{userName} 사장님</div>
            <Button className="text-gray-500" onClick={handleLogout}>
              로그아웃
            </Button>
          </div>
          <Button variant="cta" onClick={handleRegister}>
            입점하기
          </Button>
        </section>
      </div>
    </nav>
  );
};

export default GNB;
