import moment from 'moment';
export default class Util {
  static stringToDate(date) {
    if (!date) return null;
    const [day, month, year] = date.split('/');

    return new Date(year, month - 1, day);
  }

  static stringToDateAmerican(date) {
    if (!date) return null;
    const [year, month, day] = date.split('-');

    return new Date(year, month - 1, day);
  }

  static dateToString(date) {
    moment(date).format('DD/MM/YYYY');
  }

  static genders() {
    const genders = [
      { label: 'Masculino', value: 'M' },
      { label: 'Feminino', value: 'F' },
    ];

    return genders;
  }

  static surgeryTypes() {
    const types = [
      { label: 'Urgencia', value: '0' },
      { label: 'Emergencia', value: '1' },
      { label: 'Eletiva', value: '2' },
    ];
    return types;
  }

  static surgeryToAppoitments(surgeries) {
    return surgeries.map((surgery) => {
      return {
        title: surgery.patient.name,
        startDate: surgery.date,
        endDate: moment(surgery.date).add(2, 'hour'),
        id: surgery.id,
        location: surgery.location,
      };
    });
  }
}
