import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getCookie, setCookie } from "cookies-next"
import { useEffect } from "react"
import { queryKey } from "src/constants/queryKey"

type Scheme = "light" | "dark"
type SetScheme = (scheme: Scheme) => void

const useScheme = (): [Scheme, SetScheme] => {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: queryKey.scheme(),
    enabled: false,
    initialData: "light",
  })

  const scheme = data === "light" ? "light" : "dark"

  const setScheme = (scheme: "light" | "dark") => {
    setCookie("scheme", scheme)
    
    // document.querySelector(".logo-img")?.setAttribute("color", scheme == "light" ? "white" : "black")
    // document.querySelector(".logo-img")?.setAttribute("fill", "currentColor");
    // document.querySelector(".profile-img")?.setAttribute("color", scheme == "light" ? "white" : "black")
    document.querySelector(".profile-img")?.setAttribute("fill", scheme == "light" ? "white" : "black")


    queryClient.setQueryData(queryKey.scheme(), scheme)
  }

  useEffect(() => {
    if (!window) return

    const scheme = getCookie("scheme")
    setScheme(scheme === "light" ? "light" : "dark")
  }, [])

  return [scheme, setScheme]
}

export default useScheme
