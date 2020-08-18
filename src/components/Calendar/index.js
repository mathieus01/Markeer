import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

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
        locale={ptBrLocale}
      />
    </Container>
  );
}

export default Calendar;
