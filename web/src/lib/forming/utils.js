/* @flow */

export function focusFirstElement(form: HTMLFormElement): void {
  const element = form.elements[0];
  if (!element) return;

  element.focus();
}

export function elementValues(form: HTMLFormElement): { [key: string]: any } {
  const elements: Array<HTMLElement> = Array.from(form.elements);

  return elements.reduce((results, element) => {
    const elementName = element.getAttribute('name');
    if (!elementName) return results;

    const value = elementValue(element);
    const trimmedValue = typeof value === 'string' ? value.trim() : value;

    if (trimmedValue === undefined) return results;

    const matchArrayElement = elementName.match(/^(.*)\[(.*)?\]$/);

    if (!matchArrayElement) {
      results[elementName] = trimmedValue;
      return results;
    }

    const [, name, index] = matchArrayElement;

    if (!results[name]) {
      results[name] = [];
    }

    if (index) {
      results[name][parseInt(index, 10)] = trimmedValue;
    } else {
      results[name] = [...results[name], trimmedValue];
    }

    return results;
  }, {});
}

function elementValue(element: HTMLElement): any {
  if (element instanceof window.HTMLSelectElement) {
    return element.value;
  }

  if (element instanceof window.HTMLTextAreaElement) {
    return element.value;
  }

  if (element instanceof window.HTMLInputElement) {
    switch (element.type) {
      case 'file':
        return element.files[0];
      case 'checkbox':
        if (!element.checked) return false;
        return true;
      case 'radio':
        if (!element.checked) return;
        return element.value;
      default:
        return element.value || null;
    }
  }
}
