import data from '../data/data.json';

export default function () {
  return Promise.resolve({
    json: () =>
      Promise.resolve(data)

  })
}