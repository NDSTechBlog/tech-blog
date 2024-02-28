import Link from "next/link"
import Image from "next/image"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"
import useScheme from "src/hooks/useScheme"

const Logo = () => {
  const [scheme] = useScheme();

  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      {/* {CONFIG.blog.title} */}
      <Image src={scheme === "light" ? CONFIG.blog.titleImage : CONFIG.blog.titleImageDark} fill alt="" style={{ width: "200px", height: "auto" }} />
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)``
