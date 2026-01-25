
export enum InputType {
  SELECT = 'SELECT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  NUMBER = 'NUMBER'
}

export interface OptionVariant {
  id: string;
  label: string;
  price: number;
  description?: string; // Krótki opis widoczny na kafelku
  detailsHtml?: string; // Długi opis HTML do modala
}

export interface ConfigCategory {
  id: string;
  title: string;
  iconName: string;
  inputType: InputType;
  variants?: OptionVariant[]; // For Select/Radio
  basePrice?: number; // For Checkbox
  unitPrice?: number; // For Number input (e.g. per m2)
  unitLabel?: string;
  info?: string; // Additional info (like for AC/PV)
  detailsHtml?: string; // Długi opis dla kategorii (np. dla checkboxów jak Szambo)
}

export interface UserSelection {
  [categoryId: string]: string | boolean | number;
}

export interface HouseDetails {
  builtArea: string; // Powierzchnia zabudowy
  usableArea: string; // Powierzchnia użytkowa
  bedrooms: string | number;  // Liczba sypialni (np. 2 lub "3-4")
}

export interface House {
  id: string;
  name: string;
  status: 'COMPLETED' | 'DRAFT'; // Ceny uzupełnione vs Do uzupełnienia
  image: string;
  images?: string[]; // Galeria zdjęć (webp)
  basePrice: number; // Cena startowa (dla wyświetlania na karcie)
  area: string; // Legacy: np. 70 m2 - wyświetlane jeśli brak 'details'
  details?: HouseDetails; // Nowe pole dla szczegółowej specyfikacji
  description?: string; // Dedykowany opis marketingowy
  floorPlanPdf?: string; // Link do pliku PDF z rzutami
}
