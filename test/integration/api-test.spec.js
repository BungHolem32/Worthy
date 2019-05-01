'use strict';

import app from '../../src/app';
import chai from 'chai';
import request from 'supertest';

const expect = chai.expect;

describe('Jewelry Calculation Api Integration test', () => {

  /*Check validation*/
  describe(' #POST /api/calculate validation check', () => {
    it('should throw error after seeing no params', (done) => {
      request(app)
      .post('/api/calculate').end((err, res) => {
        if (err) return done(err);
        let {errors} = res.body;
        expect(res.statusCode).to.equal(422);
        expect(res.body).to.be.a('object');
        expect(errors).to.be.a('array');
        expect(errors).length(5);
        done();
      });
    });

    it('should throw error after missing param', (done) => {
      let params = {
        type: 'diamond',
        cut: 'very good',
        color: 'e',
        clarity: 'i2',
      };

      request(app)
      .post('/api/calculate')
      .send(params)
      .end((err, res) => {
        if (err) return done(err);
        let {errors} = res.body;
        expect(res.statusCode).to.equal(422);
        expect(res.body).to.be.a('object');
        expect(errors).to.be.a('array');
        expect(errors).length(1);
        done();
      });
    });
  });

  describe(' #POST /api/calculate with params', () => {
    let params = {
      type: 'diamond',
      weight: 10,
      cut: 'very good',
      color: 'e',
      clarity: 'i2',
    };

    it('should return price', (done) => {
      request(app).
          post('/api/calculate').
          send(params).
          set('Accept', 'application/json').
          expect('Content-Type', /json/).
          end((err, res) => {
            if (err) return done(err);
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.data).to.be.an('object');
            expect(res.body.data.price).to.be.an('number');
            done();
          });
    });
  });
});