import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../stores/cards/cardAction";

const Card = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);
  const { cards } = useSelector((state) => state.cards);
  console.log();
  return (
    <div className="body">
      {cards.map((elem) => (
        <>
          <div className="wrapper">
            <div className="cols">
              <div
                className="col"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="container">
                  <div className="front">
                    <img
                      src={elem.image}
                      alt="error"
                      style={{ width: "100%", maxWidth: "80rem" }}
                    />
                    <div className="inner">
                      <p>{elem.title}</p>
                    </div>
                  </div>
                  <div className="back">
                    <img
                      src={elem.image}
                      alt="error"
                      style={{ width: "100%", maxWidth: "80rem" }}
                    />
                    <div className="inner">
                      <iframe
                        width="1000"
                        height="500"
                        src={elem.link}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
