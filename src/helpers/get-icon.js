import {
  Box,
  Cloud,
  Code,
  Database,
  Github,
  Globe,
  Monitor,
  Package,
  Server,
  User,
  Wrench,
} from "lucide-react";

export const getIcon = (text) => {
  let name = text.toLowerCase();
  name = name.replace(/ /g, "-"); // Replace spaces with hyphens

  switch (name) {
    case "languages":
      return Code;
    case "frontend":
      return Monitor;
    case "backend":
      return Server;
    case "database":
      return Database;
    case "cloud":
      return Cloud;
    case "tools":
      return Wrench;
    case "soft-skills":
      return User;
    case "npm":
      return Package;
    case "github":
      return Github;
    case "play-store":
      return Package;
    case "app-store":
      return Package;
    case "website":
      return Globe;
    default:
      return Box;
  }
};
