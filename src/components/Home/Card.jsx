import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../stores/cards/cardAction";
import { deleter, getCinemas } from "../../stores/crud/crudAction";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCards());
  }, []);

  useEffect(() => {
    dispatch(getCinemas());
  }, []);
  const { cards } = useSelector((state) => state.cards);
  const { allCinema } = useSelector((state) => state.cinema);
  return (
    <div className="body">
      {allCinema?.map((elem) => (
        <>
          <button onClick={() => dispatch(deleter({ id: elem.id, navigate }))}>
            Delete
          </button>
          <button onClick={() => navigate(`/edit/${elem.id}`)}>Edit</button>
          <button onClick={() => navigate(`/details/${elem.id}`)}>
            Details
          </button>
          <div className="wrapper" key={elem.id}>
            <div className="cols">
              <div
                className="col"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="container">
                  <div className="front">
                    <img
                      key={elem.id}
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
