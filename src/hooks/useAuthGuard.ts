/* eslint-disable @typescript-eslint/no-restricted-imports */
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { selectIsAuthenticated } from "../features/user/userSlice"

export const useAuthGuard = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [])
}
