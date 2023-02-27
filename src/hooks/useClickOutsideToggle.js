import { useEffect, useRef, useState } from "react";

// This custom hook handles the toggle action when clicking outside an element
const useClickOutsideToggle = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  // Add an event listener for when the mouse is clicked outside of the element
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    // Remove the event listener when the hook is unmounted
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return { expanded, setExpanded, ref };
};

// Export the custom hook
export default useClickOutsideToggle;
