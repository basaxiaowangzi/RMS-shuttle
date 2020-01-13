// 邮箱注册
import mailboxRoute from './mailboxRoute'
import statistics from './statistics'
import info from './info'
import member from './member'
import operate from './operate'
import permission from './permission'
import product from './product'
import setting from './setting'

export default [
  ...mailboxRoute,
  ...statistics,
  ...info,
  ...member,
  ...operate,
  ...permission,
  ...product,
  ...setting
]