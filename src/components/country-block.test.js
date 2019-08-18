import React from 'react'
import { PureCountryBlock as CountryBlock } from './country-block'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const data = {
    "landImage": {
      "childImageSharp": {
        "fluid": {
          "base64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA+ElEQVQ4y+2STwqCQBSH5xpCRVFEOwk8R9iB2kQIhW08g5t2gqit6xadINtILSucfhOjqI0T/qFVDz58M858PN+TkH+0ERPXdTVKqQ5mDdA9z9MIkh1wwBEcGsDuO0x4AiFtJ0ISBMEcyRI8Mi9ijiyKZ57M824ikg5YgHtNIZOtQC+dDJcaICpciEtEyf4VmKkMSSpVFKWP9RacSy4X1xdg2bY9zP03WSliwKWRpKqkMgvnx0IPWyQbvFIj01MqGICZVJa9KxRKBiUcgFAoKlswqFtuAJ/t+i5VVZV9/hrswcb3/VElWcnhLpjyZ3WZrDfSfv1cWCdetnvGmXO4OtMAAAAASUVORK5CYII=",
          "tracedSVG": "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400' version='1'%3e%3cpath d='M5 71H0v8l1 8 6-1c11 0 16-4 14-10s-3-6-16-5m377 2c-5 7 0 13 12 13l6 1V71h-6c-9-1-10-1-12 2M2 137c-2 0-2 1-2 9v10h10l1-7c1-7 0-11-4-12H2m391 0c-3 2-4 5-3 13l1 6h9v-10c0-7 0-9-2-9h-5M22 165c-2 0-2 0 0 3 4 7 13 14 14 11v-14H22m344 1v11l1 4 4-3 8-8 2-3-4-1h-11M47 190c-2 1 3 8 9 13 5 3 5 3 5 1v-14H47m294 1l-1 8 1 7 5-3 7-8 3-4h-15M72 215c-2 1 3 8 9 13 5 3 5 3 5 1v-14H72m244 1l-1 8 1 7 5-3 7-8 3-4h-15M97 240c-2 1 3 8 9 13 5 3 5 3 5 1v-14H97m194 1l-1 8 1 7 5-3 7-8 3-4h-15m-169 24c-2 1 3 8 9 13 5 3 5 3 5 1v-14h-14m144 1l-1 8 1 7 5-3 7-8 3-4h-15m-119 24c-2 0-1 3 3 7l1 2 5 4c4 3 5 3 5 1v-14h-14m94 1c-2 2 0 14 2 14l10-9 3-4-4-1h-11m-59 25l-9 3 6 8c8 6 33 7 42 0l6-6 2-4h-4l-10-1c-7-3-23-2-33 0' fill='lightgray' fill-rule='evenodd'/%3e%3c/svg%3e",
          "aspectRatio": 1,
          "src": "/static/51ef4d08e99f1e6f2046dd80a093815b/dd41c/caret-down.png",
          "srcSet": "/static/51ef4d08e99f1e6f2046dd80a093815b/dd41c/caret-down.png 16w",
          "srcWebp": "/static/51ef4d08e99f1e6f2046dd80a093815b/8b965/caret-down.webp",
          "srcSetWebp": "/static/51ef4d08e99f1e6f2046dd80a093815b/8b965/caret-down.webp 16w",
          "sizes": "(max-width: 16px) 100vw, 16px",
          "originalImg": "/static/51ef4d08e99f1e6f2046dd80a093815b/dd41c/caret-down.png",
          "originalName": "caret-down.png",
          "presentationWidth": 16,
          "presentationHeight": 16
        }
      }
    }
  }
  const tree = renderer.create(<CountryBlock data={data} />).toJSON()
  expect(tree).toMatchSnapshot()
})
