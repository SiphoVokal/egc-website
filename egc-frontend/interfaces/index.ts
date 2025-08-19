export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'white' 
  action?: () => void
}

export interface CardLinkProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
}

export interface VideoCardProps {
  videoId: string;
  title: string;
  href: string;
}

export interface NavbarProps {
  minimal?: boolean;
}

export interface ValueCardProps {
  cardNumber: string;
  title: string; 
  description: string;
}

export interface EventsCardProps {
  imageSrc: string;
  title: string;
  date: string;
}

export interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  time?: string;
}

export interface ServiceTimeProps {
  handleOpenMap: () => void;
  handleOpenYoutube: () => void;
}

export interface MinistryCardProps {
  title: string;
  description: string;
  imageSrc: string;
}