import React from 'react'
import isEqual from 'fast-deep-equal'
import { Actions, useDispatch, useSelector } from '../../../../store'
import { Button } from '../../../../component'

const Main: React.FC = () => {
  const { name, accessToken } = useSelector((store) => store.account)

  const dispatch = useDispatch()

  const handleClick = React.useCallback(() => {
    dispatch(Actions.account.logout(accessToken))
  }, [])

  return (
    <div>
      <h1>{name}</h1>
      <Button label="로그아웃" onClick={handleClick} buttonType="primary" />
    </div>
  )
}

export default React.memo(Main, isEqual)
