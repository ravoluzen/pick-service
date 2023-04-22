import ActionButton from "../../components/buttons/ActionButton"
import { ContentTile } from "../../components/content/ContentTile"
import VStack from "../../components/layouts/VStack"
import useAppointmentStore from "../../store/appointmentStore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SlotConfirmation = () => {
  const { appointment } = useAppointmentStore()

  async function handleBooking(){
    //post to an endpoint
    toast("Hurray! Appointment Booked!")
  }

  return (
    <VStack className='mt-2 w-full h-full min-h-[60vh] items-center'>
      <ToastContainer position="top-center"/>
      <VStack className='w-full md:w-1/2 m-2 gap-2 rounded border items-center'>
        <ContentTile label="Appointment Date:" content={appointment.date} />
        <ContentTile label="Time Slot:" content={appointment.timeRange} />
        <ContentTile label="Service Provider:" content={appointment.serviceProvider} />
        <ContentTile label="Service:" content={appointment.service} />
      </VStack>
      <ActionButton
        className="w-64"
        title="Confirm Booking"
        onClick={handleBooking}
      />
    </VStack>
  )
}

export default SlotConfirmation