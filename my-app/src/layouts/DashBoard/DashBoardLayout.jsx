import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'

export default function DashBoardLayout() {
  return (
    <div className='h-screen over overflow-y-auto'>
      <Header />
      <div className='grid grid-flow-row grid-cols-12 '>
        <aside className='col-span-2 '>
          <SideBar />
        </aside>
        <main className='col-span-10 p-2 bg-gray-400'>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
