import React, { useState } from 'react';

const New = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <button onClick={() => setShow(true)}>open</button>
      {show ? (
        <div
          style={{ width: '70%', margin: '0 auto', backgroundColor: '#494949', height: '500px' }}
        >
          <button onClick={() => setShow(false)}>close</button>
          <div
            style={{
              width: '60%',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                backgroundColor: '#3d3d3d',
                width: '100%',
                height: '40px',
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <button
                style={{
                  width: '8%',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#7f7f7f',
                }}
              >
                1
              </button>
              <button
                style={{
                  width: '8%',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#7f7f7f',
                }}
              >
                2
              </button>
              <button
                style={{
                  width: '8%',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#7f7f7f',
                }}
              >
                3
              </button>
              <button
                style={{
                  width: '8%',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#7f7f7f',
                }}
              >
                4
              </button>
              <button
                style={{
                  width: '8%',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#7f7f7f',
                }}
              >
                5
              </button>
              <button
                style={{
                  width: '8%',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#7f7f7f',
                }}
              >
                6
              </button>
              <button
                style={{
                  width: '8%',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#7f7f7f',
                }}
              >
                7
              </button>
              <button
                style={{
                  width: '8%',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#7f7f7f',
                }}
              >
                8
              </button>
              <button
                style={{
                  width: '8%',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#7f7f7f',
                }}
              >
                9
              </button>
              <button
                style={{
                  width: '8%',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#7f7f7f',
                }}
              >
                10
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default New;
