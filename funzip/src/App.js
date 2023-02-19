import { Outlet, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import './App.css';

// 컴포넌트
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

/* Internal libraries */
import Home from './pages/Home/Home';

// 레이아웃 네브바 푸터
const Layout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />

      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* 
            booth
            <Route path="booth/" element={<BoothLayout />}>
              <Route path="" element={<Booth />} />
              <Route path="Search" element={<BoothSearch />} />
            </Route>

            <Route path="booth/:id" element={<BoothDetail />} />
            <Route path="booth/:id/edit" element={<BoothDetailEdit />} />
            <Route
              path="booth/:boothId/comment/:commentId"
              element={<GuestDelete />}
            />
            <Route path="notice" element={<Notice />} />
            <Route path="notice/:id" element={<NoticeDetail />} />
            <Route path="timetable" element={<TimeTable />} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
