import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition,
} from "react-transition-group";
import "./card.css";

const CARDS = {
  visa: "^4",
  amex: "^(34|37)",
  mastercard: "^5[1-5]",
  discover: "^6011",
  unionpay: "^62",
  troy: "^9792",
  diners: "^(30[0-5]|36)",
};

const cardBackgroundName = () => {
  let random = Math.floor(Math.random() * 25 + 1);
  return `${random}.jpeg`;
};

const BACKGROUND_IMG = cardBackgroundName();

const Card = ({
  cardHolder,
  cardNumber,
  cardMonth,
  cardYear,
  cardCvv,
  isCardFlipped,
  currentFocusedElm,
  onCardElementClick,
  cardNumberRef,
  cardHolderRef,
  cardDateRef,
}) => {
  const [style, setStyle] = useState(null);

  const cardType = (cardNumber) => {
    const number = cardNumber;
    let re;
    for (const [card, pattern] of Object.entries(CARDS)) {
      re = new RegExp(pattern);
      if (number.match(re) != null) {
        return card;
      }
    }

    return "visa"; // default type
  };

  const useCardType = useMemo(() => {
    return cardType(cardNumber);
  }, [cardNumber]);

  const outlineElementStyle = (element) => {
    return element
      ? {
          width: `${element.offsetWidth}px`,
          height: `${element.offsetHeight}px`,
          transform: `translateX(${element.offsetLeft}px) translateY(${element.offsetTop}px)`,
        }
      : null;
  };

  useEffect(() => {
    if (currentFocusedElm) {
      const style = outlineElementStyle(currentFocusedElm.current);
      setStyle(style);
    }
  }, [currentFocusedElm]);

  const maskCardNumber = (cardNumber) => {
    let cardNumberArr = cardNumber.split("");
    cardNumberArr.forEach((val, index) => {
      if (index > 4 && index < 14) {
        if (cardNumberArr[index] !== " ") {
          cardNumberArr[index] = "*";
        }
      }
    });

    return cardNumberArr;
  };

  return (
    <div className={"card-item " + (isCardFlipped ? "-active" : "")}>
      <div className="card-item__side -front">
        <div
          className={`card-item__focus ${currentFocusedElm ? `-active` : ``}`}
          style={style}
        />
        <div className="card-item__cover">
          <img
            alt=""
            src={`/card-background/${BACKGROUND_IMG}`}
            className="card-item__bg"
          />
        </div>

        <div className="card-item__wrapper">
          <div className="card-item__top">
            <img src={"data:image/jpeg;base64,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"} alt="" className="card-item__chip" />
            <div className="card-item__type">
              <img
                alt={useCardType}
                src={`/card-type/${useCardType}.png`}
                className="card-item__typeImg"
              />
            </div>
          </div>

          <label
            className="card-item__number"
            ref={cardNumberRef}
            onClick={() => onCardElementClick("cardNumber")}
          >
            <TransitionGroup className="slide-fade-up" component="div">
              {cardNumber ? (
                maskCardNumber(cardNumber).map((val, index) => (
                  <CSSTransition
                    classNames="slide-fade-up"
                    timeout={250}
                    key={index}
                  >
                    <div className="card-item__numberItem">{val}</div>
                  </CSSTransition>
                ))
              ) : (
                <CSSTransition classNames="slide-fade-up" timeout={250}>
                  <div className="card-item__numberItem">#</div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </label>
          <div className="card-item__content">
            <label
              className="card-item__info"
              onClick={() => onCardElementClick("cardHolder")}
              ref={cardHolderRef}
            >
              <div className="card-item__holder">Card Holder</div>
              <div className="card-item__name">
                <TransitionGroup component="div" className="slide-fade-up">
                  {cardHolder === "FULL NAME" ? (
                    <CSSTransition classNames="slide-fade-up" timeout={250}>
                      <div>FULL NAME</div>
                    </CSSTransition>
                  ) : (
                    cardHolder.split("").map((val, index) => (
                      <CSSTransition
                        timeout={250}
                        classNames="slide-fade-right"
                        key={index}
                      >
                        <span className="card-item__nameItem">{val}</span>
                      </CSSTransition>
                    ))
                  )}
                </TransitionGroup>
              </div>
            </label>
            <div
              className="card-item__date"
              onClick={() => onCardElementClick("cardDate")}
              ref={cardDateRef}
            >
              <label className="card-item__dateTitle">Expires</label>
              <label className="card-item__dateItem">
                <SwitchTransition in-out>
                  <CSSTransition
                    classNames="slide-fade-up"
                    timeout={200}
                    key={cardMonth}
                  >
                    <span>{!cardMonth ? "MM" : cardMonth} </span>
                  </CSSTransition>
                </SwitchTransition>
              </label>
              /
              <label htmlFor="cardYear" className="card-item__dateItem">
                <SwitchTransition out-in>
                  <CSSTransition
                    classNames="slide-fade-up"
                    timeout={250}
                    key={cardYear}
                  >
                    <span>
                      {!cardYear ? "YY" : cardYear.toString().substr(-2)}
                    </span>
                  </CSSTransition>
                </SwitchTransition>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="card-item__side -back">
        <div className="card-item__cover">
          <img
            alt=""
            src={`/card-background/${BACKGROUND_IMG}`}
            className="card-item__bg"
          />
        </div>
        <div className="card-item__band" />
        <div className="card-item__cvv">
          <div className="card-item__cvvTitle">CVV</div>
          <div className="card-item__cvvBand">
            <TransitionGroup>
              {cardCvv.split("").map((val, index) => (
                <CSSTransition
                  classNames="zoom-in-out"
                  key={index}
                  timeout={250}
                >
                  <span>*</span>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
          <div className="card-item__type">
            <img
              alt="card-type"
              src={"/card-type/visa.png"}
              className="card-item__typeImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
