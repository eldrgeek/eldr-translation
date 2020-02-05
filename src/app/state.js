export const state = {
  mediaURL: 'https://soundcloud.com/mike-wolf-443507667/harry-potter-part-1',
  playing: false,
  currentTime: 0,
  nextTime: 0,
  timeOut: null,
  fragments: [],
  currentFragment: 0,
  nextFragmentTime: null,
  aFunction: ({ aScalar }) => {
    return aScalar;
  },
};
