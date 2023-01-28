import request from 'supertest';

import app from '../static/js/app.js';

test('home page shows list of movies', async () => {
  const response = await request(app)
    .get('/')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);

  expect(response.text.includes('Min granne Totoro')).toBeTruthy();
});

test('Encanto page returns Encanto info', async () => {
  const response = await request(app)
    .get('/movies/2')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200);

  expect(response.text.includes('Encanto')).toBeTruthy();
  expect(response.text.includes('Shawshank')).toBeFalsy();
});

test('Isle of dogs page returns Isle of dogs info', async () => {
    const response = await request(app)
      .get('/movies/1')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200);
  
    expect(response.text.includes('Isle')).toBeTruthy();
    expect(response.text.includes('Totoro')).toBeFalsy();
  });   

test('Non-existent movie page returns 404 status code', async () => {
    const response = await request(app)
    .get('/movies/666')
    .expect(404)
});

test('Non-existent page returns 404 status code', async () => {
    const response = await request(app)
    .get('/randomPath')
    .expect(404)

    expect(response.text.includes("Sidan kan inte hittas")).toBeTruthy();
});