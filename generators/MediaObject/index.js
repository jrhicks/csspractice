import path from 'path';

class MediaObjectGenerator {

  constructor({ gen, command, name, args }) {
    this.gen = gen;
    this.command = command;
    this.name = name;
    this.args = args;
  }

  run() {
    const gen = this.gen;
    const fname = `${this.camelizeName()}MediaObject.js`

    switch (this.command) {
      default:
        gen.template('template.js.ejs', path.join('MediaObjects', fname));
    }
  }

  inspect(v) {
    return JSON.stringify(v);
  }

  pluralizeName() {
    return this.gen.inflect.pluralize(this.name);
  }

  titleizeName() {
    return this.gen.inflect.titleize(this.name);
  }

  dasherizeName() {
    return this.gen.inflect.dasherize(this.name);
  }

  camelizeName(uppercaseFirstLetter = true) {
    return this.gen.inflect.camelize(this.name, uppercaseFirstLetter);
  }



}

module.exports = MediaObjectGenerator;
