import data from './data.js';

export default function () {
  return Promise.resolve({
    json: () =>
      Promise.resolve(data)

  })
}