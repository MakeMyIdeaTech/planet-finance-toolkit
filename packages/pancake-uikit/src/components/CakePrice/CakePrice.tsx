import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../Svg";
import { formatAmount } from "../../util/formatInfoNumbers";
import LogoPlanet from "../Images/planetlogo.svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle" }) => {
  let price = formatAmount(cakePriceUsd, { notation: 'standard' });
  return cakePriceUsd ? (
    <PriceLink
      href="https://blue.planetfinance.io/"
      target="_blank"
    >
      <img src={LogoPlanet} alt="Logo" width="24px"/>
      <Text color={"rgba(255,255,255,1)"} bold ml="6px">{`$${price}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
