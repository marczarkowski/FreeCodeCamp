const earth = {
  isRound: true,
  numberFromSun: 3,
  hasMoon: true,
};

describe('Earth', () => {
  it('has property isRound', () => {
    expect(earth.isRound).toBeDefined();
  });
  it('is round', () => {
    expect(earth.isRound).toBe(true);
  });
  it('is third planet in solar system', () => {
    expect(earth.numberFromSun).toBe(3);
  });
  it('has moon', () => {
    expect(earth.hasMoon).toBe(true);
  });
});
