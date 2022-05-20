import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeleteDoctore }) => {
    const { name, img, speciality } = doctor;


    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt={`doctor ${name}`} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDeleteDoctore(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>

    );
};

export default DoctorRow;