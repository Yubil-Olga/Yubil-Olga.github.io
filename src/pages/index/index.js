function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('../../../src', true, /\.js$|\.scss$/));
importAll(require.context('../../components', true, /\.(jpg|png|svg|png)$/));
