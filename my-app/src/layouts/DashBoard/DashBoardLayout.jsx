import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'

export default function DashBoardLayout(props) {
  const { children } = props
  return (
    <div className=''>
      <Header />
      <div className='grid grid-flow-row grid-cols-12'>
        <aside className='col-span-2'>
          <SideBar />
        </aside>
        <main className='col-span-10 p-2 bg-gray-400'>{children}</main>
      </div>
    </div>
  )
}
