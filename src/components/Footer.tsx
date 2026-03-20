import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/praaatap",
      icon: Github,
      color: "hover:text-[#ffffff]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/singhpratap999/",
      icon: Linkedin,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "X",
      href: "https://x.com/itspratap9",
      icon: Twitter,
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "Email",
      href: "mailto:hello@pratap.dev",
      icon: Mail,
      color: "hover:text-[#EA4335]",
    },
  ];

  return (
    <footer className="mt-20 py-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
      <div className="space-y-1 text-center sm:text-left">
        <p className="text-sm font-medium text-fg">
          © {new Date().getFullYear()} Pratap Singh
        </p>
        <p className="text-xs text-fg-muted">
          Building in the open with React.
        </p>
      </div>
      
      <div className="flex items-center gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target={social.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            aria-label={social.name}
            className={`text-fg-muted ${social.color} transition-all duration-300 hover:scale-110 active:scale-95`}
          >
            <social.icon size={20} />
          </a>
        ))}
      </div>
    </footer>
  );
}
