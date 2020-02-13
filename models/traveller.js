const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function(journey) {
  const result = this.journeys.map(journey => {
    return journey.startLocation;
  })
console.log(result);
return result;
};

Traveller.prototype.getJourneyEndLocations = function (journey) {
  const result = this.journeys.map(journey => {
    return journey.endLocation;
  })
  console.log(result);
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter(journey => {
    return journey.transport === transport;
  })
  console.log(result);
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter(journey => {
    return journey.distance > minDistance;
  })
  console.log(result);
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const results = this.journeys.map(journey => journey.distance);
  return results.reduce((journeyTotal, total) => journeyTotal + total);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const results = this.journeys.map(journey => journey.transport);
    return results.filter((transport, index, array) => {
      return array.indexOf(transport) === index;
    })
  console.log(results);
  };





module.exports = Traveller;
