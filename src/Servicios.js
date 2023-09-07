import React from 'react';

function Servicios() {
  return (

    <div className='container'>
        <div class="row ">
            <div className='card'>
                <div className='card-title'>Registro de Servicios</div>
                <div className='card-body'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='form-group'>
                                <label>Servicio</label>
                                <input type='text' name='txt_servicio' className='form-control'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>Lista de botones</div>
            </div>
        </div>

    </div>


  );
}

export default Servicios;
