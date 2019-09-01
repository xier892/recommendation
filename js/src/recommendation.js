class Recommendation {
  constructor() {
    this.switchfilter0 = switches
      .filter(i => new Filter(i).tactility())
      .filter(i => new Filter(i).force())
      .filter(i => new Filter(i).noise());
    this.switchfilter1 = switches
      .filter(i => new Filter(i).tactility())
      .filter(i => new Filter(i).force());
    this.keyfilter0 = keyboards
      .filter(i => new Filter(i).macros())
      .filter(i => new Filter(i).backlighting())
      .filter(i => new Filter(i).size())
      .filter(i => new Filter(i).color());
    this.keyfilter1 = keyboards
      .filter(i => new Filter(i).macros())
      .filter(i => new Filter(i).backlighting())
      .filter(i => new Filter(i).color());
    this.keyfilter1a = keyboards
      .filter(i => new Filter(i).macros())
      .filter(i => new Filter(i).size())
      .filter(i => new Filter(i).color());
    this.keyfilter2 = keyboards
      .filter(i => new Filter(i).macros())
      .filter(i => new Filter(i).backlighting());
    this.keyfilter2a = keyboards
      .filter(i => new Filter(i).macros())
      .filter(i => new Filter(i).color());
    this.keyfilter3 = keyboards
      .filter(i => new Filter(i).macros());
    this.keyfilter4 = keyboards;
    this.switchfilterList = [this.switchfilter0, this.switchfilter1];
    this.keyfilterList = [this.keyfilter0, this.keyfilter1, this.keyfilter2, this.keyfilter3, this.keyfilter4];
    this.keyfilterLista = [this.keyfilter0, this.keyfilter1a, this.keyfilter2a, this.keyfilter3, this.keyfilter4];
  }
  static showSilencer(s) {
    if (settings.noise === 'quiet' && s.filter(i => i.noise > 3).length > 0) {
      settings.showSilencer = 'yes';
      localStorage.setItem('showSilencer', 'yes');
    } else {
      settings.showSilencer = 'no';
      localStorage.setItem('showSilencer', 'no');
    }
  }
  generate() {
    // find switch
    const switchList = this.switchfilterList
      .map(i => i)
      .filter(i => i.length !== 0);
    this.constructor.showSilencer(switchList[0]);
    // find keyboard
    const keyList = this.keyfilterList
      .map(i => i)
      .filter(i => i.length !== 0);
    // only display keyboards with recommended switches
    const result = switchList[0]
      .map(i => i.class)
      .map(i => keyList[0].filter(ii => ii.switch === i));
    const recommendation = [].concat(...result);
    if (recommendation.length === 0) {
      return this.generate1();
    }
    new Keyboard(switchList[0], recommendation).add();
  }
  generate1() {
    let switchList;
    let keyList;
    if (settings.backlighting === 'yes') {
      // skip noise filter
      switchList = this.switchfilterList
        .filter(i => i !== this.switchfilterList[0])
        .map(i => i)
        .filter(i => i.length !== 0);
      this.constructor.showSilencer(switchList[0]);
      keyList = this.keyfilterList
        .map(i => i)
        .filter(i => i.length !== 0);
    } else if (settings.backlighting === 'no') {
      // skip backlighting filter
      switchList = this.switchfilterList
        .map(i => i)
        .filter(i => i.length !== 0);
      keyList = this.keyfilterLista
        .filter(i => i !== this.keyfilterLista[0])
        .map(i => i)
        .filter(i => i.length !== 0);
    }
    const result = switchList[0]
      .map(i => i.class)
      .map(i => keyList[0].filter(ii => ii.switch === i));
    const recommendation = [].concat(...result);
    if (recommendation.length === 0) {
      return this.generate2();
    }
    new Keyboard(switchList[0], recommendation).add();
  }
  generate2() {
    let switchList;
    let keyList;
    if (settings.backlighting === 'yes') {
      // skip noise filter
      // skip size filter
      switchList = this.switchfilterList
        .filter(i => i !== this.switchfilterList[0])
        .map(i => i)
        .filter(i => i.length !== 0);
      this.constructor.showSilencer(switchList[0]);
      keyList = this.keyfilterList
        .filter(i => i !== this.keyfilterList[0])
        .map(i => i)
        .filter(i => i.length !== 0);
    } else if (settings.backlighting === 'no') {
      // skip noise filter
      // skip backlighting filter
      switchList = this.switchfilterList
        .filter(i => i !== this.switchfilterList[0])
        .map(i => i)
        .filter(i => i.length !== 0);
      this.constructor.showSilencer(switchList[0]);
      keyList = this.keyfilterLista
        .filter(i => i !== this.keyfilterLista[0])
        .map(i => i)
        .filter(i => i.length !== 0);
    }
    const result = switchList[0]
      .map(i => i.class)
      .map(i => keyList[0].filter(ii => ii.switch === i));
    const recommendation = [].concat(...result);
    if (recommendation.length === 0) {
      return this.generate3();
    }
    new Keyboard(switchList[0], recommendation).add();
  }
  generate3() {
    let switchList;
    let keyList;
    if (settings.backlighting === 'yes') {
      // skip noise filter
      // skip size filter
      // skip color filter
      switchList = this.switchfilterList
        .filter(i => i !== this.switchfilterList[0])
        .map(i => i)
        .filter(i => i.length !== 0);
      this.constructor.showSilencer(switchList[0]);
      keyList = this.keyfilterList
        .filter(i => i !== this.keyfilterList[0] && i !== this.keyfilterList[1])
        .map(i => i)
        .filter(i => i.length !== 0);
    } else if (settings.backlighting === 'no') {
      // skip noise filter
      // skip backlighting filter
      // skip size filter
      switchList = this.switchfilterList
        .filter(i => i !== this.switchfilterList[0])
        .map(i => i)
        .filter(i => i.length !== 0);
      this.constructor.showSilencer(switchList[0]);
      keyList = this.keyfilterLista
        .filter(i => i !== this.keyfilterLista[0] && i !== this.keyfilterLista[1])
        .map(i => i)
        .filter(i => i.length !== 0);
    }
    const result = switchList[0]
      .map(i => i.class)
      .map(i => keyList[0].filter(ii => ii.switch === i));
    const recommendation = [].concat(...result);
    if (recommendation.length === 0) {
      return this.generate4();
    }
    new Keyboard(switchList[0], recommendation).add();
  }
  generate4() {
    // skip noise filter
    // skip backlighting filter
    // skip size filter
    // skip color filter
    const switchList = this.switchfilterList
      .filter(i => i !== this.switchfilterList[0])
      .map(i => i)
      .filter(i => i.length !== 0);
    this.constructor.showSilencer(switchList[0]);
    const keyList = this.keyfilterList
      .filter(i => i !== this.keyfilterList[0] && i !== this.keyfilterList[1] && i !== this.keyfilterList[2])
      .map(i => i)
      .filter(i => i.length !== 0);
    const result = switchList[0]
      .map(i => i.class)
      .map(i => keyList[0].filter(ii => ii.switch === i));
    const recommendation = [].concat(...result);
    if (recommendation.length === 0) {
      return this.generate5();
    }
    new Keyboard(switchList[0], recommendation).add();
  }
  generate5() {
    // skip noise filter
    // skip macro filter
    // skip backlighting filter
    // skip size filter
    // skip color filter
    const switchList = this.switchfilterList
      .filter(i => i !== this.switchfilterList[0])
      .map(i => i)
      .filter(i => i.length !== 0);
    this.constructor.showSilencer(switchList[0]);
    const keyList = this.keyfilterList
      .filter(i => i === this.keyfilterList[4])
      .map(i => i)
      .filter(i => i.length !== 0);
    const result = switchList[0]
      .map(i => i.class)
      .map(i => keyList[0].filter(ii => ii.switch === i));
    const recommendation = [].concat(...result);
    new Keyboard(switchList[0], recommendation).add();
  }
}
