if (amplitude) {
  amplitude.init("d7f12146f8bd3e7c5c0b0d425490e533", 'ampjshek');

} else {
  console.error("Amplitude failed to initialize")
}

const eventProperties = {
  page: 'Home'
};

const identifyObj = new Identify();
identifyObj.set('location', 'San Francisco');
amplitude.identify(identifyObj)

amplitude.track('Landing Page Viewed', eventProperties);
