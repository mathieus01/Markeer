import moment from 'moment';
import AvatarMale1 from '../assets/images/avatars/male-1.svg';
import AvatarMale2 from '../assets/images/avatars/male-2.svg';
import AvatarMale3 from '../assets/images/avatars/male-3.svg';
import AvatarMale4 from '../assets/images/avatars/male-4.svg';
import AvatarMale5 from '../assets/images/avatars/male-5.svg';
import AvatarMale6 from '../assets/images/avatars/male-6.svg';
import AvatarFeMale1 from '../assets/images/avatars/female-1.svg';
import AvatarFeMale2 from '../assets/images/avatars/female-2.svg';
import AvatarFeMale3 from '../assets/images/avatars/female-3.svg';
import AvatarFeMale4 from '../assets/images/avatars/female-4.svg';
import AvatarFeMale5 from '../assets/images/avatars/female-5.svg';

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

  static getAvatars(gender, number) {
    const female = [AvatarFeMale1, AvatarFeMale2, AvatarFeMale3, AvatarFeMale4, AvatarFeMale5];
    const male = [AvatarMale1, AvatarMale2, AvatarMale3, AvatarMale4, AvatarMale5, AvatarMale6];

    if (gender === 'M' && number < 6) {
      return male[number];
    }
    if (gender === 'F' && number < 5) {
      return female[number];
    }
  }

  static toogleSidebar = (e) => {
    e.preventDefault();
    var nav = document.querySelector('#sidebar');
    nav.classList.toggle('d-flex');
  };
}
