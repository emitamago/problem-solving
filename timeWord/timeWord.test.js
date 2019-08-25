const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('special case', () => {
  test('Special case1---12:00 will be noon', () => {
    expect(timeWord("12:00")).toBe("noon");
  });

  test('Special case2---00:00 will be midnight', () => {
    expect(timeWord("00:00")).toBe("midnight");
  });
});

describe('nomal case', () => {
  test('09:05 will be nine oh five am ', () => {
    expect(timeWord("09:05")).toBe("nine oh five am");
  });

  test('09:10 will be nine ten am ', () => {
    expect(timeWord("09:10")).toBe("nine ten am");
  });

  test('12:10 will be twelve ten pm ', () => {
    expect(timeWord("12:10")).toBe("twelve ten pm");
  });

  test('12:12 will be twelve twelve pm ', () => {
    expect(timeWord("12:12")).toBe("twelve twelve pm");
  });

})

describe('min more than 20', () => {
  test('09:25 will be nine oh five am ', () => {
    expect(timeWord("09:25")).toBe("nine twenty five am");
  });

  test('09:56 will be nince fifty six am ', () => {
    expect(timeWord("09:56")).toBe("nine fifty six am");
  });
})

describe('min is 00', () => {
  test('09:00 will be nine o’clock am ', () => {
    expect(timeWord("09:00")).toBe("nine o’clock am");
  });

  test('13:00 will be one o’clock pm ', () => {
    expect(timeWord("13:00")).toBe("one o’clock pm");
  });
})


describe('Hour  more than 13', () => {
  test('13:15 will be one fifteen pm, ', () => {
    expect(timeWord("13:15")).toBe("one fifteen pm");
  });

  test('23:25 will be eleven twenty five pm', () => {
    expect(timeWord("23:25")).toBe("eleven twenty five pm");
  });

})

describe('Hour  is 00', () => {
  test('00:15 will be twelve fifteen am, ', () => {
    expect(timeWord("00:15")).toBe("twelve fifteen am");
  });

  test('00:05 will be twelve oh five am', () => {
    expect(timeWord("00:05")).toBe("twelve oh five am");
  });

})

describe('Mixing up situation', () => {
  test('14:05 will be two oh five pm, ', () => {
    expect(timeWord("14:05")).toBe("two oh five pm");
  });

  test('17:25 will be five twenty five pm', () => {
    expect(timeWord("17:25")).toBe("five twenty five pm");
  });

})