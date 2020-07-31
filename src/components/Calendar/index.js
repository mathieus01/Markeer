import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';

import { Container } from './styles';

function Calendar({ handleDateClick }) {
  return (
    <Container className='h-100'>
      <FullCalendar
        themeSystem='bootstrap'
        selectable={true}
        plugins={[dayGridPlugin, bootstrapPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        initialView='dayGridMonth'
      />
    </Container>
  );
}

export default Calendar;
