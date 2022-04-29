import { keyframes } from "styled-components";

const section_1 = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const section_1_2 = keyframes`
  0% { transform: translate3d(0, -80%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const section_2_text = keyframes`
  from { transform: translate3d(-100%, 0, 0); }
  to { transform: translate3d(0, 0, 0); }
`;

export { section_1, section_1_2, section_2_text };
