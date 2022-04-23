import React from "react";
import { events } from "../../mocks";
import moment from "moment";
import "moment/locale/ru";

const Event = ({id}) => {
  const[form, setForm] = React.useState({
    theme: '',
    comment: '',
    date: new Date()
  });

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setForm({...form, [name]: value});
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  const defaultEvent = {
      theme: '',
      comment: '',
      date: '',
      favorite: false,
      archive: false,
  }
  
  const findedEvent = events.find(n => n._id === id)
  
  const event = findedEvent ? Object.assign({}, findedEvent) : defaultEvent

  const formatDate = moment(event.date).format('YYYY-MM-DDThh:mm:ss')

  return (
    <form className="board__form" onSubmit={handleSubmit}>
    <h2 className="board__title">{id ? "Редактирование" : "Добавление"} события</h2>
    <fieldset className="board__field board__field--theme">
      <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
      <textarea
        type="text"
        className="board__input board__input--theme"
        onChange={handleFieldChange}
        name="theme"
        required
        defaultValue={event.theme}
      ></textarea>
    </fieldset>
    <fieldset className="board__field board__field--comment">
      <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
      <textarea
        type="text"
        className="board__input board__input--comment"
        onChange={handleFieldChange}
        name="comment"
        defaultValue={event.comment}
        required
      ></textarea>
    </fieldset>
    <fieldset className="board__field board__field--date">
      <label htmlFor="date" className="board__label board__label--date">Дата:</label>
      <input
        type="datetime-local"
        className="board__input board__input--date"
        onChange={handleFieldChange}
        name="date"
        defaultValue={formatDate}
      />
    </fieldset>
    <div className="btns">
      <button type="submit" className="btn-submit">Добавить</button>
      <button type="reset" className="btn-reset">Очистить</button>
    </div>
  </form>
)
    
}


export default Event;