import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem =(props)=> {

 
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    // yaha let dala destructuring kioya props ek object hai us object ,me se vo dono pullkarke title aurdesc ke isme avaiabla ekara diya jaega
    return (
      <div className='my-3'>
   


        {/* DONO CRAD KE BICHMEKA DISTANCE KAM JYADA KRUNGA ME ISSE */}
        <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          right:0,
          position: 'absolute'

        }}>
        <span class=" badge rounded-pill bg-danger" > {source} 
            </span>
            </div>
          <img src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2022/03/sensex-770x433.png" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small class="text-muted">By {!author ? "Unknwon" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }

export default NewsItem
