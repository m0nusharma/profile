import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvas({title, children , show, handleclose, monuPlacement}) {

  return (
    
      <Offcanvas show={show} onHide={handleclose} placement={monuPlacement} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='overflow-hidden'>
          {children}
        </Offcanvas.Body>
      </Offcanvas>
  );
}

export default OffCanvas;