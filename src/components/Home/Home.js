import React from 'react';
import { styled } from '@mui/system';
import { Container, Grid, Typography, Paper, Box, Card, CardContent, CardMedia } from '@mui/material';
import Image from './foto3.jpg';


const MainContainer = styled(Container)({
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
});

const MainRam = styled(Container)({
    marginTop: 50,
    marginLeft: 30,
    display: 'flex',
    width: '120%',
    height: 850,
  });

const ImageContainer = styled('div')({
  height: 800,
  width: '40%',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  display: 'inline-block',
});

const ImageStyled = styled('img')({
  width: '100%',
  height: 'auto',
});

const TextContainer = styled('div')({
  paddingLeft: '5%',
  height: 800,
  width: '50%',
  display: 'inline-block',
});

const Alter = styled(Box)({
    marginBottom: 20,
  });

const SthContainer = styled('div')({
  display: 'flex',
  width: '90%',
  height: 400,
  marginTop: 50,
  backgroundColor: 'rgba(0, 0, 0, 0)',
});

const Sth = styled(Paper)({
    width: '30%',
    height: 200,
    margin: 20,
    padding: 10,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

  });

const Home = () => {
  return (
    <MainContainer>
        <MainRam>
      <Grid container>
        <Grid item component={ImageContainer}>
          <ImageStyled src={Image} alt="Ваш текст для атрибута alt" />
        </Grid>
        <Grid item component={TextContainer}>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            <strong>Руснак Анна Валерьевна - воспитатель высшей категории</strong>
          </Typography>

          <div component={Alter}>
            <Typography variant="h5"><strong>Образование:</strong></Typography>
            <Typography>
              Высшее: "Международная школа бизнеса", 1999 год. <br />
              Специальность: "Менеджмент". <br />
              Квалификация: "Финансовый менеджер". <br />
              Профессиональная переподготовка: АНО высшего профессионального образования РФ "Российский университет кооперации", 2013 год.
              <br />
            </Typography>
          </div>

          <div component={Alter}>
            <Typography variant="h5"><strong>Опыт:</strong></Typography>
            <Typography>
              Стаж педагогической работы: 10 лет. <br />
              В дошкольном учреждении: 12 лет. <br />
            </Typography>
          </div>

          <div component={Alter}>
            <Typography variant="h5"><strong>Дополнительная информация:</strong></Typography>
            <Typography>
              Большой опыт проектной деятельности в детском саду. <br />
              Проведение открытых показов для воспитателей. <br />
              Выступление на педагогических советах. <br />
              Участие в муниципальных методических объединениях воспитателей. <br />
              Участие в фестивалях детского творчества:
              <ul>
                <li>"Звездный калейдоскоп -2018"</li>
                <li>"Звездный калейдоскоп -2019"</li>
                <li>"Звездный калейдоскоп -2020"</li>
                <li>"Звездный калейдоскоп -2021"</li>
                <li>"Звездный калейдоскоп -2022"</li>
              </ul>
            </Typography>
          </div>
        </Grid>
      </Grid>
      </MainRam>

      <SthContainer>
        <Sth>
          <Typography>
            Пришла в детский сад- <br />
            Улыбнись на пороге. <br />
            Всё то, что ты детям отдашь, <br />
            К тебе возвратится в итоге. <br />
          </Typography>
        </Sth>
        <Sth>
          <Typography>
            Воспитателем надо родиться, <br />
            Чтобы детей непременно любить. <br />
            И терпенье иметь, не сердиться <br />
            И заботой уметь окружить. <br />
          </Typography>
        </Sth>
        <Sth>
          <Typography>
            Воспитатель без любви к ребёнку - всё равно, <br />
            что певец без голоса, <br />
            музыкант без слуха, <br />
            живописец без чувства цвета <br />
          </Typography>
        </Sth>
      </SthContainer>
    </MainContainer>
  );
};

export default Home;
