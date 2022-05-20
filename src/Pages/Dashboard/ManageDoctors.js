import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctore] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>no</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeleteDoctore={setDeleteDoctore}
                            ></DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteDoctor && <DeleteConfirmModal deleteDoctor={deleteDoctor} refetch={refetch} setDeleteDoctore={setDeleteDoctore}></DeleteConfirmModal>

            }
        </div>
    );
};

export default ManageDoctors;