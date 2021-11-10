import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { ScrollButton, ArrowImg } from "./styled_components.js";

const TopScroll = ({ btn_text, arrow_sign, options }) => {
  const [is_visible, setIsVisible] = useState(false);
  const [is_hovered, setIsHovered] = useState(false);
  let listener = () => {
    let offset = e?.srcElement?.defaultView?.pageYOffset;
    if (offset > 200) setIsVisible(true);
    else {
      setIsVisible(false);
      setIsHovered(false);
    }
  };

  useEffect(() => {
    if (window?.document?.defaultView?.pageYOffset > 0) setIsVisible(true);
    window.addEventListener("scroll", listener);
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
