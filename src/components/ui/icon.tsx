import * as FaIcons from "react-icons/fa"; // hoặc "react-icons/your-set"

export function Icon({ name, size = 24, color = "#a9adb8", ...props }: { 
  name: keyof typeof FaIcons;
  size?: number;
  color?: string;
  [key: string]: any;
}) {
  const IconComponent = FaIcons[name];

  if (!IconComponent) {
    // Nếu tên icon không đúng thì render fallback hoặc null
    return <span>Icon not found</span>;
  }

  return <IconComponent size={size} color={color} {...props} />;
}
