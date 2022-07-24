import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from './Spinner';



const News = (props)=> {
    //USING useState

    const [articles, setArticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    


   

    //capital ke liye function banaya just 
    const capitalizefirstletter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`; 
        setloading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizefirstletter(props.category)} - VloemodiaNews`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setpage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
      };


      return (
        <>
          <h1 className="text-center" style={{margin:'35px 0px',marginTop: '91px',color:'white',fontfamily: 'emoji'}}>VloemodiaNews - Top Instant HeadLines from {capitalizefirstletter(props.category)} category </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner/>}
            > 
                <div className="container">
                     
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                </div> 
            </InfiniteScroll>
        </>
    )

}


News.defaultProps = {
country: 'in',
pageSize: 8,
category: 'general',
}

News.propTypes = {
country: PropTypes.string,
pageSize: PropTypes.number,
category: PropTypes.string,
}

export default News