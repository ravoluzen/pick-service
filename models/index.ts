export interface StackProps {
    className?: string,
    children: React.ReactNode
}

export interface ButtonProps {
    title: string,
    onClick: () => void,
    className?: string,
}

export interface AppointmentProps {
    date: string;
    timeRange: string;
    serviceProvider: string;
    service: string;
  };