const expect = require('chai').expect;

const exec = require('child_process').exec;

const badInputFile = '../input/toyLambda/simple.lambda';
const goodInputFile = './input/toyLambda/simple.lambda';
const defaultValue = '1';

// test a few of the command line tool options
describe('test command line tool', function () {

  const options = ['-g', '-p', '-i', '-c', '-1', '-2', '-o', '-s', '-d', '-r'];
  const requireFile = ['-p', '-i', '-1', '-c'];
  const requireValue = ['-o', '-s'];

  options.forEach(function (option) {
    describe(option, function () {
      this.timeout(15000);

      // test options that require a file
      if (requireFile.indexOf(option) >= 0) {
        it('should fail without a file', function (done) {
          exec(`node index.js ${option}`, function (err, stdout) {
              expect(err).not.equal(null);
              done();
          });
        });

        it('should fail with a file that does not exist', function (done) {
          exec(`node index.js ${option} ${badInputFile}`, function (err, stdout) {
              expect(err).not.equal(null);
              done();
          });
        });
  
        it('should succeed with a file that exists', function (done) {
          exec(`node index.js ${option} ${goodInputFile}`, function (err, stdout) {
              expect(err).equal(null);
              done();
          });
        });
      } else {
        // test options that do not require a file
        it('should fail with a file', function (done) {
          exec(`node index.js ${option} ${goodInputFile}`, function (err, stdout) {
              expect(err).not.equal(null);
              done();
          });
        });

        // test options that require a value
        if(requireValue.indexOf(option) >= 0) {
          it('should fail without a value', function (done) {
            exec(`node index.js ${option}`, function (err, stdout) {
                expect(err).not.equal(null);
                done();
            });
          });

          it('should succeed with a value', function (done) {
            exec(`node index.js ${option} ${defaultValue}`, function (err, stdout) {
                expect(err).not.equal(null);
                done();
            });
          });

          if(option === '-o') {
            it('should fail on its own', function (done) {
              exec(`node index.js ${option} 0`, function (err, stdout) {
                  expect(err).not.equal(null);
                  done();
              });
            });

            it('should fail with incorrect option', function (done) {
              exec(`node index.js -p ${goodInputFile} ${option} 0`, function (err, stdout) {
                  expect(err).not.equal(null);
                  done();
              });
            });

            // this should only allow 1 - 5
            const allowedValues = [1, 2, 3, 4, 5];

            it('should fail with a 0', function (done) {
              exec(`node index.js -1 ${goodInputFile} ${option} 0`, function (err, stdout) {
                  expect(err).not.equal(null);
                  done();
              });
            });

            allowedValues.forEach(function (allowedValue) {
              it('should succeed with a ' + allowedValue, function (done) {
                exec(`node index.js -1 ${goodInputFile} ${option} ${allowedValue}`, function (err, stdout) {
                    expect(err).equal(null);
                    done();
                });
              });
            });

            it('should fail with a 6', function (done) {
              exec(`node index.js -1 ${goodInputFile} ${option} 0`, function (err, stdout) {
                  expect(err).not.equal(null);
                  done();
              });
            });
          } else {
            if (option === 's') {
              it('should fail on its own', function (done) {
                exec(`node index.js ${option} 125`, function (err, stdout) {
                    expect(err).not.equal(null);
                    done();
                });
              });

              // this should work with any value but a string
              it('should succeed with a number', function (done) {
                exec(`node index.js -i ${goodInputFile} ${option} 125`, function (err, stdout) {
                    expect(err).equal(null);
                    done();
                });
              });

              it('should fail with a string', function (done) {
                exec(`node index.js -i ${goodInputFile} ${option} test`, function (err, stdout) {
                    expect(err).not.equal(null);
                    done();
                });
              });
            } else {
              if (option === 'd') {
                it('should fail on its own', function (done) {
                  exec(`node index.js ${option}`, function (err, stdout) {
                      expect(err).not.equal(null);
                      done();
                  });
                });
              }
            }
          }
        } else {
          // test options that do not require a value
          it('should fail with a value', function (done) {
            exec(`node index.js ${option} ${defaultValue}`, function (err, stdout) {
                expect(err).not.equal(null);
                done();
            });
          });
        }

        const mainOptions = ['-p', '-i', '-c', '-1', '-2', '-r'];
        // if it is a main option
        if (mainOptions.indexOf(option) >= 0) {
          // check that it's not used in combination with the other
          for(let j = 0; j < mainOptions.length; j++) {
            if (mainOptions[j] !== option) {
              it('should fail with ' + mainOptions[j], function (done) {
                exec(`node index.js ${option} ${mainOptions[j]}`, function (err, stdout) {
                  expect(err).not.equal(null);
                  done();
                });
              });
            }
          }
        }

        // now check some other small options
        if (option === '-g' || option === '-o') {
          it('should fail with -p', function (done) {
            exec(`node index.js ${option} -p`, function (err, stdout) {
              expect(err).not.equal(null);
              done();
            });
          });

          it('should fail with -d', function (done) {
            exec(`node index.js ${option} -d`, function (err, stdout) {
              expect(err).not.equal(null);
              done();
            });
          });
        }

        if (option !== '-1' && option !== '-c') {
          it('should fail with -s', function (done) {
            exec(`node index.js ${option} -s`, function (err, stdout) {
              expect(err).not.equal(null);
              done();
            });
          });
        }
      }
    }); 
  });
});