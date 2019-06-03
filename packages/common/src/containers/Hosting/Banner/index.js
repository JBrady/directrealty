import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Icon from "react-icons-kit";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Input from "reusecore/src/elements/Input";
import Select from "reusecore/src/elements/Select";
import Container from "../../../components/UI/Container";
// import ParticlesComponent from "../../Hosting/Particle";
import BannerWrapper, {
  SearchWrapper,
  List,
  DiscountWrapper,
  DiscountLabel
} from "./banner.style";

import { search } from "react-icons-kit/feather/search";

import { DOMAIN_NAMES, DOMAIN_PRICE } from "../../../data/Hosting/data";

const BannerSection = ({
  row,
  title,
  description,
  button,
  textArea,
  searchArea,
  discountAmount,
  discountText
}) => {
  return (
    <BannerWrapper id="banner_section">
      {/* <ParticlesComponent /> */}
      <Container className="banner_container">
        <Box {...row}>
          <Box {...textArea}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content="(619) 471-7444" />
                <Text {...discountText} content=" - Contact Us Today!" />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading {...title} content="Buy or Sell Your Home...Direct." />
            <Text
              {...description}
              content="Honesty, hard work, and professionalism are the foundation of our real estate success."
            />
          </Box>

          {/* <Box {...searchArea}>
            <SearchWrapper>
              <Input
                inputType="text"
                placeholder="Enter an address, neighborhood, city or zip code"
                iconPosition="right"
                className="domain_search_input"
                aria-label="domain_search_input"
              />
              <Select
                options={DOMAIN_NAMES}
                placeholder=".com"
                className="domain_search_select"
                aria-label="domain_search_input"
              />
              <Button
                {...button}
                icon={<Icon icon={search} size={24} />}
                className="domain_search_button"
              />
            </SearchWrapper>
            <List>
              {DOMAIN_PRICE.map((item, index) => (
                <li key={`domain-list-${index}`}>
                  {item.url ? (
                    <Link href={item.url}>
                      <a>{item.content}</a>
                    </Link>
                  ) : (
                    <>{item.content}</>
                  )}
                </li>
              ))}
            </List>
          </Box> */}
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  searchArea: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  textArea: {
    width: ["100%", "100%", "90%", "100%", "70%"]
  },
  title: {
    fontSize: ["26px", "32px", "42px", "46px", "55px"],
    fontWeight: "400",
    color: "#ffffff",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px", "25px", "25px", "25px"],
    lineHeight: "1.31",
    textAlign: "center"
  },
  description: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#ffffff",
    lineHeight: "1.75",
    mb: "0",
    textAlign: "center"
  },
  button: {
    title: "Search",
    type: "button",
    fontSize: "18px",
    fontWeight: "500",
    color: "#fff",
    pl: "22px",
    pr: "22px",
    colors: "primaryWithBg",
    iconPosition: "left"
  },
  searchArea: {
    className: "search_area",
    width: ["100%", "100%", "80%", "100%", "70%"],
    mt: ["45px", "50px", "60px", "60px", "60px"]
  },
  discountAmount: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "600",
    color: "#eb4d4b",
    mb: 0,
    as: "span",
    mr: "0.4em"
  },
  discountText: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "400",
    color: "#0f2137",
    mb: 0,
    as: "span"
  }
};

export default BannerSection;
