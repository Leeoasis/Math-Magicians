import React, { useState, useEffect } from 'react';
import { FaCircleNotch, FaQuoteLeft } from 'react-icons/fa';

function Quotes() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = '3s3I81LpJxpp0MD46Yqweg==utIo6B2WhXAtvPcj';
  const category = 'happiness';

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, [setData, setIsLoading]);

  if (hasError) {
    return (
      <div>
        <p className="error">Something went wrong!</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div>
        <div className="spinner"><FaCircleNotch size={70} /></div>
      </div>
    );
  }

  return (
    <section>
      <div id="quote-box">
        {data.map((item) => (
          <blockquote key={data.indexOf(item)} className="blockquote">
            <p className="quote">
              <FaQuoteLeft size={42} />
              <span id="text">{item.quote}</span>
            </p>
            <footer className="blockquote-footer" id="author">
              {item.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export default Quotes;
