import { Link, Outlet, useLocation } from "react-router-dom"

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className="bg-black text-white w-full min-h-screen flex flex-col">
      {/* 고정 위치 홈 버튼 */}
      {!isHome && (
        <div className="fixed top-3 left-3 md:top-5 md:left-5">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house-icon lucide-house">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
          </Link>
        </div>
      )}

      {/* 메인 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col justify-center items-center px-1 py-10">
        <h1 className="font-extrabold text-8xl md:text-9xl lg:text-12xl uppercase pt-5">Habit</h1>
        <div className="w-full max-w-4xl mt-10">
          <Outlet />
        </div>
      </div>
      {/* 푸터 */}
      <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-auto">
        <p>&copy; 2025 Habit Tracker. All rights reserved.</p>
      </footer>
    </div>
  )
}
