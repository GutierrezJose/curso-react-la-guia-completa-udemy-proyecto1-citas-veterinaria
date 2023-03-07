import React, { useState } from 'react'
import uuid from 'uuid/dist/v4'
export const Formulario = ({crearCita}) => {

    //Crear state de citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })


    const [error, setError] = useState(false);

    //Funcion que se ejecuta cada vez que el usuario escribe en un input
    const actualizarState = (event) => {
        setCita({
            ...cita,
            [event.target.name]: event.target.value
        })
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;


    //Funcion cuando el usuario envia el formulario
    const submitCita = (event) => {
        event.preventDefault();

        //Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            setError(true);
            return;
        }

        //Eliminar el mensaje previo de error
        setError(false);

        //Asignar un ID
        cita.id = uuid();

        //Crear la cita
        crearCita(cita);
        
        //Reiniciar el form
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
    }

    return (
        <>
            <h2>Crear Cita</h2>

            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name='sintomas'
                    className='u-full-width'
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar cita</button>
            </form>
        </>
    )
}
