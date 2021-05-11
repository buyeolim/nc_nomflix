import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const TvPresenter = ({ topRated, popular, airingToday, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.name}
              imageUrl={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.name}
              imageUrl={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today Shows">
          {airingToday.map((tv) => (
            <Poster
              key={tv.id}
              id={tv.id}
              title={tv.name}
              imageUrl={tv.poster_path}
              rating={tv.vote_average}
              year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

TvPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TvPresenter;
