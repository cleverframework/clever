// Defining menus

class MenuElement {
  constructor(name, ref, order) {
    this.name = name || 'Untitled';
    this.ref = ref || '#';
    this.order = order || -1
  }

  toJSON() {
    return {
      name: this.name,
      ref:  this.ref,
      order: this.order
    }
  }
}

class Menu {
  constructor(name) {
    this.name = name;
    this.elements = [];
    this.fn = null;
    this.rendered = null;
  }

  addElement(name, ref, order) {
    this.elements.push(new Menu.MenuElement(name, ref, order));
  }

  render(config, database) {

    // Caching the rendered
    if(this.rendered) return this.rendered;

    this.rendered = {};
    this.rendered.name = this.name;

    const fnElements = [];

    if(this.fn) {
      const rawElements = this.fn(config, database);
      rawElements.forEach(function (el, index) {
        fnElements.push(new Menu.MenuElement(el.name, el.ref, el.order));
      });
    }

    this.rendered.elements = this.elements.concat(fnElements);

    return this.rendered;

  }

  deleteCache() {
    this.rendered = null;
  }

}

Menu.MenuElement = MenuElement;

const menus = {};



module.exports = menus;
