import { MdOutlineStart } from "react-icons/md";
import { Location } from "react-router-dom";
import { INavLink } from "@inubekit/inubekit";
import { ICardData } from "@ptypes/home/ICardData";

const createNavLink = (
  option: ICardData,
  defaultIcon: JSX.Element,
  location?: Location,
) => ({
  id: option?.id ?? "",
  label: option?.publicCode ?? "",
  icon: option?.icon ?? defaultIcon,
  path: option?.url ?? "",
  isActive: location ? location.pathname === option?.url : false,
});

const mainNavigation = (optionsCards: ICardData[], location?: Location) => {
  const linkNav = optionsCards.reduce<Record<string, INavLink>>(
    (acc, option) => {
      const navLink = createNavLink(option, <MdOutlineStart />, location);
      acc[navLink.id] = navLink;
      return acc;
    },
    {},
  );

  return {
    nav: {
      reactPortalId: "portals",
      title: "MENU",
      sections: [
        {
          subtitle: "",
          links: Object.values(linkNav),

          isOpen: false,
          onClose: () => {
            console.log();
          },
          onToggle: () => {
            console.log();
          },
        },
      ],
    },
    breakpoint: "848px",
  };
};

export { mainNavigation };

// const navigation = {
//   nav: {
//     reactPortalId: "portal",
//     title: "MENU",
//     sections: [
//       {
//         subtitle: "Privilegios",
//         links: [
//           {
//             path: "/privileges/positions",
//             label: "Cargos Inube",
//             icon: <MdOutlineStart />,
//             id: "/positions",
//           },
//           {
//             path: "/privileges/users",
//             label: "Usuarios",
//             id: "/users",
//             icon: <MdOutlineBusinessCenter />,
//           },
//         ],
//         isOpen: false,
//         onClose: () => {},
//         onToggle: () => {},
//       },
//     ],
//     actions: [
//       {
//         id: "logout",
//         label: "Cerrar sesión",
//         icon: <MdLogout />,
//         action: () => {
//           localStorage.clear();
//           logout({
//             logoutParams: {
//               returnTo: enviroment.REDIRECT_URI,
//             },
//           });
//         },
//       },
//     ],
//     footerLabel: "©2025 - Inube",
//     displaySubtitles: true,
//     collapse: true,
//   },
//   breakpoint: "700px",
// };

// return navigation;
// };
