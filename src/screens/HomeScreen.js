import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Button } from "react-bootstrap";
import ArticleOne from "../components/ArticleOne";
import { listArticles } from "../actions/articleActions";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import React from "react";
import ArticleTwo from "../components/ArticleTwo";
import Header from "../components/Header";
import Paginate from "../components/Paginate";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import AdComponent from "../components/AdComponent";
import jsPDF from "jspdf";

function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.articleList);
  const { error, loading, articles, page, pages } = articleList;
  const location = useLocation();
  const navigate = useNavigate();

  let keyword = location.search;

  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
    // document.getElementById("ad").hidden = false;
    const doc = new jsPDF({
      format: "a1",
      unit: "px",
    });

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  useEffect(() => {
    console.log(articles);
    // console.log(error)
    // window.scrollTo({top: 0});
    dispatch(listArticles(keyword));
    window.scrollTo({ top: 0 });
  }, [dispatch, keyword]);

  return (
    <div className="main">
      <Header />
      <Row>
        <Col lg={1}></Col>
        <Col lg={9}></Col>
        <Col lg={2}>
          <Button onClick={handleGeneratePdf}>Export PDF</Button>
        </Col>
      </Row>
      {!keyword && articles ? (
        <div className="pt-4">
          <Container>
            <h2 className="text-start p-1" style={{ color: "#272937" }}>
              Trending AI Articles
            </h2>
          </Container>

          {loading && <Loader />}

          <Container ref={reportTemplateRef}>
            <Row>
              <Col lg={6} className="">
                <Row>
                  {articles.slice(0, 2).map((article) => (
                    <Col key={article.id} md={12} className="pt-2">
                      <ArticleOne article={article} />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  {articles.slice(2, 6).map((article) => (
                    <Col key={article.id} lg={12} className="pt-2">
                      <ArticleTwo article={article} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <AdComponent />
            <Container>
              <h2 className="text-start pt-4" style={{ color: "#272937" }}>
                All AI Articles
              </h2>
            </Container>
            <Row>
              {articles.slice(6).map((article) => (
                <Col key={article.id} lg={4} className="pt-2">
                  <ArticleOne article={article} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      ) : !loading && articles.length === 0 ? (
        <Container>
          <Row style={{ minHeight: "40vh" }}></Row>
          <Row
            className="justify-content-center"
            style={{ fontSize: "2.0rem", color: "#667085" }}
          >
            No articles found
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            {articles.map((article) => (
              <Col key={article.id} lg={4} className="pt-2">
                <ArticleOne article={article} />
              </Col>
            ))}
          </Row>
        </Container>
      )}

      {articles.length > 0 && (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="pt-4"
        >
          <div
            className="p-2"
            style={{ color: "#667085" }}
            onClick={() =>
              navigate(`/?keyword=&page=${page > 1 ? page - 1 : 1}`)
            }
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <Paginate page={page} pages={pages} keyword={keyword} />
          <div
            className="p-2"
            style={{ color: "#667085" }}
            onClick={() =>
              navigate(`/?keyword=&page=${page < pages ? page + 1 : pages}`)
            }
          >
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      )}

      <AdComponent />
      <Footer />
    </div>
  );
}

export default HomeScreen;
