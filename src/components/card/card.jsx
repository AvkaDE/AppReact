import React from "react";

const Card = ({data}) => {
    return (
        <article className="card">
              <div className="card__form">
                <div className="card__inner">
                  <div className="card__control">
                    <button type="button" className="card__btn card__btn--edit">
                      Редактировать
                    </button>
                    <button type="button" className="card__btn card__btn--archive">
                      В архив
                    </button>
                    <button
                      type="button"
                      className="card__btn card__btn--favorites"
                    >
                      В избранное
                    </button>
                    <button
                      type="button"
                      className="card__btn card__btn--remove"
                    >
                      Удалить
                    </button>
                  </div>

                  <div className="card__textarea-wrap">
                    <p className="card__text--theme">{data.title}</p>
                    <p className="card__text--comment">{data.body}</p>
                  </div>

                  <div className="card__settings">
                    <span className="card__date">{data.date}</span>
                  </div>
                </div>
              </div>
            </article>
    )
}

export default Card;