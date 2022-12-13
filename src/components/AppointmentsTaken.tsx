import { collection, getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../main";

export const AppointmentsTaken = () => {
    const [appointments, setAppointments] = useState<any[]>();

    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.currentUser) {
            navigate('/login');
        }

        const fetchData = async () => {
            // const user = await getDocs(query(collection(db, 'users_practitioners'), where('uid', '==', auth.currentUser?.uid)));

            const q = query(collection(db, 'rdv'), where('idPratitioner', '==',  auth.currentUser?.uid));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            let rdv: any[] = [];
            querySnapshot.forEach((docu) => {
                rdv.push(docu.data());
            });
            setAppointments(rdv);
        }

        fetchData();
    }, [])

    return (
        <div>
            <h1>Appointments taken by client</h1>
            {appointments?.map((appointment) => {
                return <div>
                    <p>Id client : {appointment.idClient}</p>
                    <p>Date : {appointment.date}</p>
                </div>
            })}
        </div>
    )
}