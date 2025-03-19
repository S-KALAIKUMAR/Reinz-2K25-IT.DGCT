import { LucideProps } from "lucide-react";

const WhatsAppIcon = ({ size = 24, ...props }: LucideProps) => (
  <svg
    {...props}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2A10 10 0 0 0 2 12a10.07 10.07 0 0 0 1.47 5.23L2 22l4.87-1.29A10 10 0 1 0 12 2Z" />
    <path d="M16.34 14.12a4 4 0 0 1-1.43-.27 7.07 7.07 0 0 1-2.38-1.37 7.33 7.33 0 0 1-1.88-2.27 3.58 3.58 0 0 1-.57-1.91 3.67 3.67 0 0 1 .28-1.51 1.57 1.57 0 0 0-.1-1.37 1.57 1.57 0 0 0-1.11-.73 3.78 3.78 0 0 0-1.7 0c-.8.16-1.5.73-1.91 1.51A4.49 4.49 0 0 0 4 9.17a8.44 8.44 0 0 0 .9 3.83 12.26 12.26 0 0 0 3 4 9.7 9.7 0 0 0 5.88 2.5 4.28 4.28 0 0 0 2.91-.73 2.11 2.11 0 0 0 .83-1.73 1.55 1.55 0 0 0-.77-1.24Z" />
  </svg>
);

export default WhatsAppIcon;
