import IconEmail from "@/components/icons/Email.astro";
import IconFacebook from "@/components/icons/Facebook.astro";
import IconInstagram from "@/components/icons/Instagram.astro";
import IconWhatsApp from "@/components/icons/WhatsApp.astro";

export const REDES = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+50488934752?text=Buen día Mónica, quisiera saber más información sobre sus servicios.",
    icon: IconWhatsApp,
    isDisable: false,
    title: "Escríbenos por WhatsApp",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100067779445668&mibextid=ZbWKwL",
    icon: IconFacebook,
    isDisable: false,
    title: "Visítanos en Facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mocatohn/",
    icon: IconInstagram,
    isDisable: false,
    title: "Escríbenos por Instagram.",
  },
  ,
  {
    name: "Email",
    href: "#",
    icon: IconEmail,
    isDisable: true,
    title: "Envíanos un correo",
  },
];
