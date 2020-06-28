import React, { useState, useEffect } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import { getLocation, filtrateForeignMovies, filtrateNationalMovies } from '../services/movieFilter';

const api = require('../assets/Movies.json')

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = () => {
  const [nationalMovies, setNationalMovies] = useState()
  const [foreignMovies, setForeignMovies] = useState()

  useEffect(() => {

    const getNationalMovies = async () => {
      const geolocation = await getLocation()
      const nationalMovies = await filtrateNationalMovies(api, geolocation)
      setNationalMovies(nationalMovies)
    }

    const getForeignMovies = async () => {
      const geolocation = await getLocation()
      const foreignMovies = await filtrateForeignMovies(api, geolocation)
      setForeignMovies(foreignMovies)
    }

    getNationalMovies()
    getForeignMovies()
  }, [])

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require('../assets/poster.jpg')}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,1)',
            ]}>
            <Header />
            <Hero />
          </Gradient>
        </Poster>
        <Movies label="Recomendados" movies={foreignMovies} />
        <Movies label="Nacionais" movies={nationalMovies} />
      </Container>
    </>
  );
};

export default Home;
