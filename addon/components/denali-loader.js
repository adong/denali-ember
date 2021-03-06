/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */
import Component from '@glimmer/component';
import { arg } from 'ember-arg-types';
import { boolean, oneOf } from 'prop-types';

const sizes = ['extrasmall', 'small', 'medium', 'large'];

export default class DenaliLoaderComponent extends Component {
  @arg(oneOf(sizes))
  size;

  @arg(boolean)
  isInverse = false;

  get sizeClass() {
    return this.size ? `is-${this.size}` : undefined;
  }

  get isInverseClass() {
    return this.isInverse ? 'is-inverse' : undefined;
  }
}
