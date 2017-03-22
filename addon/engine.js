import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;
const ECMEngine = Engine.extend({
  modulePrefix,
  Resolver
});

loadInitializers(ECMEngine, modulePrefix);

export default ECMEngine;
