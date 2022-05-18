import React from 'react';

const UserRow = ({ user, index }) => {
    const { email } = user;
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </tr>

    );
};

export default UserRow;