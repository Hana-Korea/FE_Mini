import { Outlet } from 'react-router-dom'
import { UserRole } from '../types/user'
import NoticeForm from '../components/NoticeForm'
import { useAccessTokenInfo } from '../store/slices/userSlice'

function Admin() {
  const { user } = useAccessTokenInfo()

  console.log('payload', user.userPayload)

  return user.userPayload ? (
    UserRole[user.userPayload.role] === UserRole.ADMIN ? (
      <Outlet />
    ) : (
      <NoticeForm noticeType="notAllow" title="Access Denied" />
    )
  ) : (
    <></>
  )
}

export default Admin
