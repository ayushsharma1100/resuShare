import React, { useContext, useEffect, useState } from 'react'
import ResumeItem from './ResumeItem'
import ResumeContext from '../contexts/ResumeContext';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';

export default function Resume() {
  let { resume, fetchAllNotes } = useContext(ResumeContext);
  const pageSize = 4
  let navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchAllNotes().then((data) => {
      
      if(data.success){
        setItems(data.notes.slice(0, pageSize));
      }
      else{
        navigate("/share-resume");
      }
    });
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = () => {
    setTimeout(() => {
      const currentLength = items.length;
      const newItems = resume.slice(currentLength, currentLength + pageSize);
      setItems([...items, ...newItems]);

      if (currentLength + newItems.length >= resume.length) {
        setHasMore(false);
      }
    }, 1000);
  };
    return (
        <>
            <div className="container padding">
                <div className='d-inline-block' style={{ paddingLeft: "10%" }}>Share your resume...</div>
                <button className="btn btn-primary btn-purple d-inline-block mx-3" onClick={() => { navigate("/share-resume") }}>Share resume</button>
                <div className="row">
                    <InfiniteScroll
                        dataLength={items.length}
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<div className='container scrollSpinner'><Spinner /></div>}
                        endMessage={<div className='container' style={{margintop: "40px", textAlign: "center"}}><p>No more items to load.</p></div>}
                    >
                        <div className="col-md-12">
                            {items.map((resu) => {
                                return <ResumeItem key={resu._id} title={resu.title} description={resu.description} resumeLink={resu.resumeLink} buffer={resu.resume.data} id={resu._id} />
                            })}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </>
    )
}
