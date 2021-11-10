import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ScrollButton = styled.div`
  position: fixed;
  bottom: 100px;
  right: 0px;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
  background-color: rgba(41, 44, 55, 0.5);
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 20px 0 20px;
  &:hover {
    background-color: rgb(41, 44, 55);
    cursor: pointer;
  }
`;
const ArrowImg = styled.img`
  width: 30px;
  height: 30px;
  transform: rotate(180deg);
  marginleft: -15px !important;
  marginbottom: 5px !important;
`;

const TopScroll = ({ btn_text, arrow_sign, options }) => {
  const [is_visible, setIsVisible] = useState(false);
  const [is_hovered, setIsHovered] = useState(false);
  let listener = () => {};
  useEffect(() => {
    // if (window?.document?.defaultView?.pageYOffset > 0) setIsVisible(true);
    if (window?.document?.defaultView?.pageYOffset > 0) setIsVisible(true);
    listener = window.addEventListener("scroll", (e) => {
      let offset = e?.srcElement?.defaultView?.pageYOffset;
      if (offset > 200) setIsVisible(true);
      else {
        setIsVisible(false);
        setIsHovered(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleMouseMove = (value) => {
    setIsHovered(value);
  };
  return (
    is_visible && (
      <ScrollButton
        {...options}
        onClick={handleOnClick}
        onMouseEnter={() => handleMouseMove(true)}
        onMouseLeave={() => handleMouseMove(false)}
      >
        {is_hovered ? btn_text : arrow_sign}
      </ScrollButton>
    )
  );
};

TopScroll.defaultProps = {
  btn_text: "Click to the Top Scroll",
  arrow_sign: (
    <ArrowImg src="https://raw.githubusercontent.com/megarohas/react_top_scroll/main/assets/top_arrow.png" />
  ),
  // arrow_sign: "⬆️"
};

TopScroll.propTypes = {
  btn_text: PropTypes.string,
  arrow_sign: PropTypes.string,
  options: PropTypes.object,
};

export default TopScroll;
