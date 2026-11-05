export interface SpecialtyArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  signs: string[];
  approach: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  modality: 'presencial' | 'online';
  area: string;
  preferredTime: 'manha' | 'tarde' | 'noite';
  message: string;
}
