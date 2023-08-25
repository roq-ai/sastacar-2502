import { BookingInterface } from 'interfaces/booking';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  model: string;
  brand: string;
  color: string;
  year: number;
  price_per_day: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  organization?: OrganizationInterface;
  _count?: {
    booking?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  model?: string;
  brand?: string;
  color?: string;
  organization_id?: string;
}
