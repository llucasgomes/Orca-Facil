import { Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";

import { Container_input, Container_input1 } from "./styled";

export const Input = ({ tipo, place, setHide }) => {
  const [eyes, setEyes] = useState(true);

  const HandleView = () => {
    if (tipo == "password") {
      setHide("text");
      setEyes(!eyes);
    } else {
      setHide("password");
      setEyes(!eyes);
    }
  };

  return (
    <Container_input1>
      <Container_input type={tipo} placeholder={place} required />;
      {tipo == "password" || tipo == "text" ? (
        eyes ? (
          <EyeSlash
            size={20}
            weight="duotone"
            className="olho"
            onClick={() => HandleView()}
          />
        ) : (
          <Eye
            size={20}
            weight="duotone"
            className="olho"
            onClick={() => HandleView()}
          />
        )
      ) : null}
    </Container_input1>
  );
};
