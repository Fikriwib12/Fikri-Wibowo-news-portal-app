import React, { useEffect, useState } from 'react'
import Navigation from '../../components/Navigation'
// import CardNews from '../../components/CardNews'
import { Card, Button, Row, Col } from 'react-bootstrap'
import Login from '../login'
import axios from 'axios';


const News = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9ab918eefc984f018995d2bc064f0895';
    
        axios
          .get(apiUrl)
          .then((response) => {
            setArticles(response.data.articles);
          })
          .catch((error) => {
            console.error('Error fetching news:', error);
          });
      }, []);
    



  return (
    <div>
        <Navigation/>
        

        <Row>
      {articles.map((article, index) => (
        <Col key={index} lg={4} md={6} sm={12} style={{ marginBottom: '20px' }}>
          <Card>
            <Card.Img variant="top" src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Button variant="primary"  target="_blank">
                Read more
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        
    </div>
  )
}

export default News