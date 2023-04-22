import { useState } from 'react';
import Calendar from 'react-calendar';
import ActionButton from '../../components/buttons/ActionButton';
import { SlotTile } from '../../components/input/SlotTile';
import HStack from '../../components/layouts/HStack';
import VStack from '../../components/layouts/VStack';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAppointmentStore from '../../store/appointmentStore';
import { AppointmentProps } from '../../models';
import data from '../../utils/data.json'
import '../../node_modules/react-calendar/dist/Calendar.css'


const SlotSelection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<AppointmentProps>(
    {
      date:"", 
      timeRange:"", 
      serviceProvider: "", 
      service:""}
  );
  const { setAppointment } = useAppointmentStore();
  const router = useRouter();

  const handleDateChange = (date:any) => {
    console.log(date, "date")
    setSelectedDate(date);
    setSelectedSlot({} as AppointmentProps);
  };

  const handleSlotClick = (slot: AppointmentProps) => {
    setSelectedSlot({
      date: selectedDate.toString(),
      timeRange: slot.timeRange,
      serviceProvider: slot.serviceProvider,
      service: slot.service
    })
  };

  const onCancel = () => {
    setSelectedDate(new Date())
    setSelectedSlot({} as AppointmentProps)
  }

  const onNext = () => {
    console.log(selectedSlot.timeRange)
    if(selectedSlot.timeRange === undefined){
      toast.error('Please select a slot and proceed.')
    } else {
      setAppointment(selectedSlot)
      router.push('/slotSelection/confirm')
    }

  }

  return (
    <VStack className='items-center w-[100vw] h-[100vh]'>
      <ToastContainer position='top-center'/>
      <VStack className='items-center w-full md:w-3/5 h-full gap-4'>
        <h1 className='m-4 text-lg md:text-xl font-bold text-purple-600 text-center'>Book services online with no hassle!</h1>
        <Calendar
          tileClassName='mt-2 active:bg-purple-600 p-3'
          className='aspect-square rounded-lg p-2 shadow-lg'
          value={selectedDate}
          onChange={handleDateChange} 
        />
        <h2 className='mt-2 font-bold'>Select available time slots:</h2>
        <VStack className='w-full border rounded-md gap-2 md:flex-row md:gap-4 flex-wrap items-center justify-center'>
          {data.map((slot) => (
              <SlotTile 
                  key={slot.timeRange} 
                  onClick={() => handleSlotClick(slot as AppointmentProps)} 
                  timeRange={slot.timeRange} 
                  service={slot.service}
                  serviceProvider={slot.serviceProvider}
                  active={slot.timeRange === selectedSlot?.timeRange}
              />
          ))}
        </VStack>
        <HStack>
          <ActionButton
              className='bg-white border-2 border-purple-600 text-black hover:text-red-500 hover:bg-white' 
              title="Cancel"
              onClick={onCancel}
          />
          <ActionButton
              title="Next"
              onClick={onNext}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default SlotSelection;