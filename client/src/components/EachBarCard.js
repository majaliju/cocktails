import Loading from './Loading';
import { Link, useNavigate } from 'react-router-dom';

function EachBarCard({ bar }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className='py-6 bg-base-900 sm:py-8 lg:py-'>
        {bar !== undefined ? (
          <div className='max-w-screen-xl px-4 mx-auto md:px-8'>
            <div className='flex justify-center'>
              <div className='justify-center shadow-2xl card w-96 bg-base-500 bg-neutral text-neutral-content'>
                <div className='items-center text-center card-body'>
                  <h2 className='card-title'>{bar.name}</h2>
                </div>
                <div className='justify-center card-actions'>
                  <div className='items-center text-center card-body'>
                    {bar.address}
                  </div>
                  <Link
                    to={`/bars/${bar.id}`}
                    state={{ bar: bar }}
                    className='justify-center w-full btn btn-primary btn-outline'>
                    VISIT BAR PAGE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default EachBarCard;
