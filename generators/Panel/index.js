import path from 'path';

class HeroPanelGenerator {

  constructor({ gen, command, name, args }) {
    this.gen = gen;
    this.command = command;
    this.name = name;
    this.args = args;
  }

  run() {
    const gen = this.gen;
    const jsFname = `${this.componentName()}.jsx`
    const cssFname = `${this.componentName()}.scss`
    console.log(args);

    switch (this.command) {
      default:
        gen.template('Component.jsx', path.join(process.cwd(), jsFname));
        gen.template('Style.scss', path.join(process.cwd(), cssFname));
    }
  }

  componentName() {
    return `${this.camelizeName()}Panel`;
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

  camelizeName() {
    return this.gen.inflect.camelize(this.name);
  }

}

module.exports = HeroPanelGenerator;
