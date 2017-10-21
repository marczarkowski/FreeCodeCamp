function orbitalPeriod(objectsInCosmos) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    return objectsWithOrbitalPeriod = objectsInCosmos.map((el) => {
        let radius = el.avgAlt + earthRadius;
        let orbitalPeriod = 2 * Math.PI * Math.sqrt(Math.pow(radius, 3) / GM);
        return {name: el.name, orbitalPeriod: Math.round(orbitalPeriod)};
    });
}

