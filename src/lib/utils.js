import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleFileUpload = (e, setImage, setBase64Img) => {
  console.log(e[0]);
  const file = e[0];
  const reader = new FileReader();

  reader.onloadend = () => {
    // Get the ArrayBuffer
    const arrayBuffer = reader.result;

    // Convert ArrayBuffer to Base64 for image preview
    const bytes = new Uint8Array(arrayBuffer);
    let binary = '';
    bytes.forEach((byte) => binary += String.fromCharCode(byte));
    const base64String = btoa(binary);
    const dataUrl = `data:${file.type};base64,${base64String}`;
    console.log(base64String);
    console.log(dataUrl);
    setImage(arrayBuffer); // For display
    setBase64Img(dataUrl); // Uncomment if you need the buffer
  };

  // Read the file as ArrayBuffer instead of DataURL
  reader.readAsArrayBuffer(file);
};

