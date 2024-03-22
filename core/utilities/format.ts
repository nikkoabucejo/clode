export const convertedSpaceName = (name: string) => {
  return name.toString().split(" ").join("-").toLowerCase();
};

export const unconvertedSpaceName = (name: string) => {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
