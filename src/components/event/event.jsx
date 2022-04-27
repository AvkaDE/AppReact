import { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/ru";
import { events } from "../../store/index";
import { useHistory } from "react-router-dom";


const Event = ({ id }) => {
  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setItem({ ...item, [name]: value });
  }

  const history = useHistory()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!id) {
      events.addEvent(item)
      history.push('/')
    } else {
      events.editEvent({
        id: item._id,
        ...item,
        favorite: item.favorite,
        archive: item.archive,
      })
      history.push('/')
    }
  }

  const [item, setItem] = useState({
    theme: '',
    comment: '',
    date: new Date().toISOString(),
    favorite: false,
    archive: false,
});

  useEffect(() => {
    if (id) {
      events.getEvent(id)
        .then(
          (result) => {
            setItem(result);
          }
        )
    } 
  }, [id])

  const formatDate = moment(item.date).format('YYYY-MM-DDThh:mm')

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
          defaultValue={item.theme}
        ></textarea>
      </fieldset>
      <fieldset className="board__field board__field--comment">
        <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
        <textarea
          type="text"
          className="board__input board__input--comment"
          onChange={handleFieldChange}
          name="comment"
          defaultValue={item.comment}
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
          value={formatDate}
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