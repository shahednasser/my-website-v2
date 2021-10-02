import { useRef } from "react";
import useOnScreen from "../hooks/useOnScreen";

function SkillImage ({image, alt, additionalClasses = ""}) {
  const ref = useRef(null)
  const inView = useOnScreen(ref)

  return (
    <img ref={ref} src={image} alt={alt} className={`mt-6 w-4/6 hover:scale-125 transform transition-transform animate__animated animate__${inView ? 'fadeIn' : 'fadeOut'} ${additionalClasses}`} />
  );
}

export default SkillImage