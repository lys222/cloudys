import { CONFIG } from "site.config"
import React from "react"
import styled from "@emotion/styled"

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <StyledWrapper className={className}>
      <FooterContainer>
        <a
          href={`https://github.com/${CONFIG.profile.github}`}
          target="_blank"
          rel="noreferrer"
        >
          © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
        </a>
        <HitCounter href="https://hits.seeyoufarm.com">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgjbae1212%2Fhit-counter" />
        </HitCounter>
      </FooterContainer>
    </StyledWrapper>
  )
}

export default Footer

const StyledWrapper = styled.div`
  a {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray10};
  }
`
const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 16px;
`;

const HitCounter = styled.a`
  position: absolute;
  right: 16px;
`;