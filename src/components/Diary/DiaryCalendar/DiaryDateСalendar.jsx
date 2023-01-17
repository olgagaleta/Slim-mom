import {
  DiaryPageDatetimeStyled,
  DiaryPageConteiner,
  DiaryProductsCalendarStyled,
} from './DiaryDateСalendar.styled';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import 'moment/locale/uk';
import 'moment/locale/en-gb';
import calendar from '../../../icons/calendar.svg';

export default function DiaryDateСalendar() {
  const inputProps = {
    style: {
      color: '#212121',
      fontFamily: 'Verdana',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '30px',
      lineHeight: '41px',
      border: 'none',
      width: '220px',
    },
    // className: "",
    // placeholder: 'N/A',
    // disabled: true,
    // onMouseLeave: () => alert("You went to the input but it was disabled")
  };

  //   const formatDate = date => date.toLocaleDateString('fr-ca');

  //   const onChange = data => {
  //     postReq(data._d);
  //   };

  return (
    <DiaryPageConteiner>
      <DiaryPageDatetimeStyled
        inputProps={inputProps}
        closeOnSelect={true}
        // locale={locale}
        initialValue={moment().format('L')}
        dateFormat="DD.MM.YYYY"
        timeFormat={false}
        // onChange={onChange}
      />
      <DiaryProductsCalendarStyled src={calendar} alt="calendar" />
    </DiaryPageConteiner>
  );
}
