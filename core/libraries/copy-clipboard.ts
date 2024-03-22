import { toast } from "react-hot-toast";

const handleCopyTextToClipboard = async (
  text: string,
  toastMessage: string,
) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(toastMessage, {
      id: "clipboard",
    });
  } catch (error) {
    toast.error("Unable to copy text to clipboard.");
  }
};

export default handleCopyTextToClipboard;
