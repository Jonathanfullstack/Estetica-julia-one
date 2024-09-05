import { FaWhatsapp } from "react-icons/fa";
import { WhatsAppButtonContainer } from "./styles";

export function WhatsAppButton() {
  return (
    <WhatsAppButtonContainer>
      <a
        href="https://wa.me/5519994045641"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </WhatsAppButtonContainer>
  );
}
