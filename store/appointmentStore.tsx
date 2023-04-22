import create from 'zustand';
import { AppointmentProps } from '../models/index'

type AppState = {
  appointment: AppointmentProps;
  setAppointment: (appointment: AppointmentProps) => void;
};

const useAppointmentStore = create<AppState>((set) => ({
  appointment: {
    date: '',
    timeRange: '',
    serviceProvider: '',
    service: '',
  },
  setAppointment: (appointment) => set({ appointment }),
}));

export default useAppointmentStore;
