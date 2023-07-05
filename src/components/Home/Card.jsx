import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleter, getCinemas } from '../../stores/crud/crudAction';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ADMIN, API_CRUD } from '../../helpers/consts';
import Admin from '../Admin/Admin';

const Card = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCinemas());
  }, []);

  const { allCinema } = useSelector(state => state.cinema);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchMovies();
    dispatch(getCinemas());
  }, [page, limit, allCinema]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${API_CRUD}movies/`, {
        params: {
          limit: limit,
          offset: (page - 1) * limit,
        },
      });

      setMovies(response.data.results);
      setTotalPages(Math.ceil(response.data.count / limit));
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const { user } = useSelector(state => state.auth);

  return (
    <div className='body'>
      {movies?.map(elem => (
        <>
          {user == ADMIN && (
            <>
              <button
                className='card_btn'
                onClick={() => dispatch(deleter({ id: elem.id, navigate }))}
              >
                Delete
              </button>
              <button className='card_btn' onClick={() => navigate(`/edit/${elem.id}`)}>
                Edit
              </button>
            </>
          )}
          <button className='card_btn' onClick={() => navigate(`/details/${elem.id}`)}>
            Купить билет
          </button>
          <div className='wrapper' key={elem.id}>
            <div className='cols'>
              <div className='col' ontouchstart="this.classList.toggle('hover');">
                <div className='container'>
                  <div className='front'>
                    <img
                      key={elem.id}
                      src={elem.image}
                      alt='error'
                      style={{ width: '100%', maxWidth: '80rem' }}
                    />
                    <div className='inner'>
                      <p>{elem.title}</p>
                    </div>
                  </div>
                  <div className='back'>
                    <img
                      src={elem.image}
                      alt='error'
                      style={{ width: '100%', maxWidth: '80rem' }}
                    />
                    <div className='inner'>
                      <iframe
                        width='700'
                        height='500'
                        src={elem.link}
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
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
      <div className='pagination_btn'>
        <button onClick={handlePrevPage} disabled={page === 1} className='pag_btn'>
          Previous
        </button>
        <span style={{ color: 'white' }}>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page === totalPages} className='pag_btn'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Card;
