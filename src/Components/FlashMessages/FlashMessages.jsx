import { Flashmessage } from "./FloatingAlerts.Styled";
import useFlashMessageStore from "./useFlashMessageStore";

const FlashMessages = () => {
  const { flashMessages, flashDuration } = useFlashMessageStore();

  return (
    flashMessages &&
    flashMessages.map((msg, i) => (
      <Flashmessage flashDuration={flashDuration} key={i}>
        <span>{msg}</span>
      </Flashmessage>
    ))
  );
};

export default FlashMessages;
