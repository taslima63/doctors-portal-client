import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const BookingModal = ({ treatment, date, setTreatment, refetch }) => {

    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast(`Appoinment is set ,${formattedDate} at ${slot}`);
                }
                else {
                    toast.error(`You already have an Appoinment on,${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch();
                setTreatment(null);
            });
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-secondary text-lg">Booking For: {name}</h3>
                    <form action="" onSubmit={handleBooking} className='mt-10 grid cols-span-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input type="text" name="name" value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" readOnly />
                        <input type="email" name="email" value={user?.email || ''} className="input input-bordered w-full max-w-xs" readOnly />
                        <input type="text" name="phone" placeholder='Your Phone Number' className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>

        </div >
    );
};

export default BookingModal;