import "./react_top_scroll.scss";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

const TopScroll = ({ btn_text, arrow_sign, options }) => {
  const [is_visible, setIsVisible] = useState(false);
  const [is_hovered, setIsHovered] = useState(false);
  let listener = () => {};
  useEffect(() => {
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
      <div
        {...options}
        className="rts-top_scroll-btn"
        onClick={handleOnClick}
        onMouseEnter={() => handleMouseMove(true)}
        onMouseLeave={() => handleMouseMove(false)}
      >
        {is_hovered ? btn_text : arrow_sign}
      </div>
    )
  );
};

TopScroll.defaultProps = {
  btn_text: "Click to the Top Scroll",
  arrow_sign: (
    <img
      style={{
        width: "30px",
        height: "30px",
        transform: "rotate(180deg)",
        marginLeft: "-15px",
        marginBottom: "5px",
      }}
      src="/top_arrow.png"
    />
  ),
  // arrow_sign: "⬆️"
};

TopScroll.propTypes = {
  btn_text: PropTypes.string,
  arrow_sign: PropTypes.string,
  options: PropTypes.object,
};

export default TopScroll;
