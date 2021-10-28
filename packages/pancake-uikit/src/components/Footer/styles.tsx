import styled from "styled-components";
import { darkColors } from "../../theme/colors";
import { Box, Flex } from "../Box";
import SocialLinks from "./Components/SocialLinks";

export const StyledFooter = styled(Flex)`
  position: relative;
  background: ${darkColors.backgroundAlt};
  z-index: 99;
  opacity: 1;
  float: left;
  width: 100%;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
  }
`;

export const StyledListItem = styled.li`
  font-size: 16px;
  margin-bottom: 8px;
  text-transform: capitalize;

  &:first-child {
    color: ${darkColors.secondary};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const StyledIconMobileContainer = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledToolsContainer = styled(Flex)`
  border-color: ${darkColors.cardBorder};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  padding: 24px 0;
  margin-bottom: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    border-top-width: 0;
    border-bottom-width: 0;
    padding: 0 0;
    margin-bottom: 0;
  }
`;

export const StyledSocialLinks = styled(SocialLinks)`
  border-bottom: 1px solid ${darkColors.cardBorder};
`;

export const BackgroundCircleImg = styled.img`
  float: left;
  position: absolute;
  z-index: 0;
  box-shadow: 0px 3px 5px #00000033;
  top: -20px;
  left: 100px;
  width: 200px;
  height: 200px;
  transform: matrix(1, 0.05, -0.05, 1, 0, 0);
  opacity: 0.2;
`;

export const BackgroundCircleImgMobile = styled.img`
  float: right;
  position: absolute;
  z-index: 0;
  box-shadow: 0px 3px 5px #00000033;
  top: 30px;
  right: -90px;
  width: 200px;
  height: 200px;
  transform: matrix(1, 0.05, -0.05, 1, 0, 0);
  opacity: 0.2;
`;
