import IconEmail from "@/components/icons/Email.astro";
import IconFacebook from "@/components/icons/Facebook.astro";
import IconInstagram from "@/components/icons/Instagram.astro";
import IconWhatsApp from "@/components/icons/WhatsApp.astro";

export const REDES = [
  {
    name: "WhatsApp",
    href: "",
    icon: IconWhatsApp,
    isDisable: false,
    title: "Escríbenos por WhatsApp",
  },
  {
    name: "Facebook",
    href: "",
    icon: IconFacebook,
    isDisable: false,
    title: "Visítanos en Facebook",
  },
  {
    name: "Instagram",
    href: "#",
    icon: IconInstagram,
    isDisable: false,
    title: "Escríbenos por Instagram.",
  },
  ,
  {
    name: "Email",
    href: "#",
    icon: IconEmail,
    isDisable: false,
    title: "Envíanos un correo",
  },
];
