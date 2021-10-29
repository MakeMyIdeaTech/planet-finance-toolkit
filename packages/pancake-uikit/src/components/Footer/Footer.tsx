import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledToolsContainer,
  BackgroundCircleImg,
  BackgroundCircleImgMobile
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import BackgroundPlanet from "../Images/bg-planet-icon.45e584d8.svg";
import Logo from "../Images/planettextsvg.svg";
import { Button } from "../Button";
import { Colors } from "../..";
import { useMatchBreakpoints } from "../../hooks";

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  const { isMobile } = useMatchBreakpoints();
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center" style={{border: "1px solid #FFFFFF26"}}>
      <Flex style={{zIndex:99, position:"relative"}} flexDirection="column" width={["100%", null, "1200px;"]} position="relative">
        { isMobile?
          <BackgroundCircleImgMobile src="/images/footermobile.png" />
          :
          <BackgroundCircleImg src="/images/bg-planet-icon.45e584d8.png" />
        }
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <img src={Logo} alt="Logo" width="130px" />;
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          
          <Box display={["none", null, "block"]}>
            <img src={Logo} alt="Logo" width="160px" />;
          </Box>
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    color={isHighlighted ? baseColors.warning : darkColors.text}
                    bold={false}
                    style={{opacity:0.4}}
                  >
                    {label}
                  </Link>
                </StyledListItem>
              ))}
            </StyledList>
          ))}
        </Flex>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
