
const Calendar = (props) => {
    const [value, onChange, onClick] = useState(new Date());
    
    return (
      <div>
        <Calendar onChange={onChange} value={value} onClick={close}/>
      </div>
    );
  }
  
  export default Calendar;